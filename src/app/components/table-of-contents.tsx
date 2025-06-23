"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ChevronRight, Menu, ChevronLeft } from "lucide-react"

interface Section {
    id: string
    title: string
    color: string
}

interface TableOfContentsProps {
    sections: Section[]
    activeSection: string
    onSectionClick: (sectionId: string) => void
}

export default function TableOfContents({ sections, activeSection, onSectionClick }: TableOfContentsProps) {
    const tocRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const itemsRef = useRef<HTMLButtonElement[]>([])
    const [isCollapsed, setIsCollapsed] = useState(true)

    useEffect(() => {
        // 初始动画
        if (tocRef.current) {
            gsap.fromTo(
                tocRef.current,
                {
                    opacity: 0,
                    x: 100,
                    scale: 0.8,
                },
                {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                    delay: 1,
                },
            )
        }
    }, [])

    useEffect(() => {
        // 当活跃section改变时的动画
        itemsRef.current.forEach((item, index) => {
            if (item) {
                const isActive = sections[index].id === activeSection
                gsap.to(item, {
                    scale: isActive ? 1.05 : 1,
                    duration: 0.3,
                    ease: "power2.out",
                })
            }
        })
    }, [activeSection, sections])

    const toggleCollapse = () => {
        if (contentRef.current) {
            if (isCollapsed) {
                // 展开动画
                gsap.to(contentRef.current, {
                    width: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                })
                gsap.to(tocRef.current, {
                    width: "auto",
                    duration: 0.4,
                    ease: "power2.out",
                })
            } else {
                // 收缩动画
                gsap.to(contentRef.current, {
                    width: 0,
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.out",
                })
                gsap.to(tocRef.current, {
                    width: "60px",
                    duration: 0.4,
                    ease: "power2.out",
                })
            }
        }
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div
            ref={tocRef}
            className="fixed top-6 right-6 z-[999] bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl overflow-hidden"
            style={{ minWidth: isCollapsed ? "120px" : "auto",maxHeight: isCollapsed ? "50px" : "620px" }}
        >
            {/* 头部 - 始终显示 */}
            <div className="flex items-center justify-between p-4"  onClick={toggleCollapse} >
                <div className="flex items-center gap-2">
                    <Menu className="w-4 h-4 text-white/80 flex-shrink-0" />
                    { <span className="text-white/80 text-sm font-medium whitespace-nowrap">目录导航</span>}
                </div>
                <span
                    className="text-white/60 hover:text-white transition-colors duration-200 p-1 hover:bg-white/10 rounded-lg"
                    title={isCollapsed ? "展开目录" : "收缩目录"}
                >
                    {isCollapsed ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </span>
            </div>

            {/* 可收缩的内容区域 */}
            <div ref={contentRef} className="overflow-hidden">
                <div className="px-4 pb-4">
                    <div className="border-t border-white/20 pt-3 mb-3" />

                    <div className="space-y-2">
                        {sections.map((section, index) => (
                            <button
                                key={section.id}
                                ref={(el) => {
                                    if (el) itemsRef.current[index] = el
                                }}
                                onClick={() => onSectionClick(section.id)}
                                className={`
                                    w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 group
                                    ${
                                    activeSection === section.id
                                        ? "bg-white/20 text-white shadow-lg"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                }
                                `}
                            >
                                <span className="text-sm font-medium truncate max-w-[250px]">{section.title}</span>
                                <ChevronRight
                                    className={`
                                        w-4 h-4 transition-all duration-300 flex-shrink-0
                                        ${
                                        activeSection === section.id
                                            ? "opacity-100 transform translate-x-0"
                                            : "opacity-0 transform -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"
                                    }
                                    `}
                                />
                            </button>
                        ))}
                    </div>

                    {/* 进度指示器 */}
                    <div className="mt-4 pt-3 border-t border-white/20">
                        <div className="flex items-center gap-2">
                            <div className="flex-1 bg-white/20 rounded-full h-1 overflow-hidden">
                                <div
                                    className="h-full bg-white rounded-full transition-all duration-500 ease-out"
                                    style={{
                                        width: `${((sections.findIndex((s) => s.id === activeSection) + 1) / sections.length) * 100}%`,
                                    }}
                                />
                            </div>
                            <span className="text-white/60 text-xs whitespace-nowrap">
                {sections.findIndex((s) => s.id === activeSection) + 1}/{sections.length}
              </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 收缩状态下的活跃指示器 */}
            {/*{isCollapsed && (*/}
            {/*    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">*/}
            {/*        <div className="w-2 h-2 bg-white rounded-full opacity-60" />*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}
