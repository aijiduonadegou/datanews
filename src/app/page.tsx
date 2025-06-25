"use client";
import {gsap} from "gsap"
import Part0 from './part0'
import Part1 from './part1'
import Part2 from './part2'
import Part3 from './part3'
import Part4 from './part4'
import {useEffect, useState, useRef} from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis";
import TableOfContents from "@/app/components/table-of-contents";

// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger)


const sections = [
    {id: "Part0", title: "Part0-STEM女性的技术困境", color: "bg-gradient-to-br from-blue-600 to-purple-700"},
    {id: "Part1", title: "Part1-负重通行的窄门", color: "bg-gradient-to-br from-blue-600 to-purple-700"},
    {id: "Part2", title: "Part2-地板到天花板", color: "bg-gradient-to-br from-green-500 to-teal-600"},
    {id: "Part3", title: "Part3-破裂的“保护伞", color: "bg-gradient-to-br from-orange-500 to-red-600"},
    {id: "Part4", title: "Part4-期待明天", color: "bg-gradient-to-br from-purple-600 to-pink-600"},
]

export default function Home() {
    const [activeSection, setActiveSection] = useState("Part0")
    const lenisRef = useRef<any>(null)
    const sectionsRef = useRef<HTMLElement[]>([])

    useEffect(() => {
        // 初始化Lenis平滑滚动
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
            infinite: false,
        })

        lenis.stop()
        lenis.on('scroll', ({scroll}: any) => {
            console.log(scroll)
            if (scroll < 6500) {
                setActiveSection("Part0")
            } else if (scroll < 14180 && scroll >= 6500) {
                setActiveSection("Part1")
            } else if (scroll >= 14180 && scroll < 21039) {
                setActiveSection("Part2")
            } else if (scroll >= 21039 && scroll < 23685) {
                setActiveSection("Part3")
            } else {
                setActiveSection("Part4")

            }
        })

        lenisRef.current = lenis

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        gsap.utils.toArray('.paragraph').forEach((para: any, i) => {
            gsap.to(para, {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 5,
                scrollTrigger: {
                    trigger: para,
                    start: "top 90%",
                    end: "top 30%",
                    toggleActions: "play none none none",
                    // 为每个段落添加唯一标记便于调试
                    markers: false,
                    id: "para-" + i
                }
            });
        });

        gsap.utils.toArray('.cover').forEach((para: any, i) => {
            gsap.to(para, {
                opacity: 1,
                y: 0,
                ease: "power2.out",
                duration: 5,
                scrollTrigger: {
                    trigger: para,
                    start: "top 90%",
                    end: "top 30%",
                    toggleActions: "play none none none",
                    // 为每个段落添加唯一标记便于调试
                    markers: false,
                    id: "para-" + i
                }
            });
        });
        return () => {
            lenis.destroy()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])


    const scrollToSection = (sectionId: string) => {
        let element: any = document.getElementById(sectionId)

        if (sectionId == 'Part1') {
            element = 6500
        }
        if (element && lenisRef.current) {

            const rrr = lenisRef.current.scrollTo(element, {
                offset: 0,
                duration: 1.5,
            })
            lenisRef?.current?.start()

        }

    }


    return (
        <div>
            {sections.map((section, index) => (
                <section
                    key={section.id}
                    id={section.id}
                    ref={(el) => {
                        if (el) sectionsRef.current[index] = el
                    }}
                >
                    {
                        index === 0 && <Part0 scrollToSection={scrollToSection}/>
                    }
                    {
                        index === 1 && <Part1/>
                    }
                    {
                        index === 2 && <Part2/>
                    }
                    {
                        index === 3 && <Part3/>
                    }
                    {
                        index === 4 && <Part4/>
                    }
                </section>
            ))}


            <TableOfContents sections={sections} activeSection={activeSection} onSectionClick={scrollToSection}/>
        </div>
    );
}