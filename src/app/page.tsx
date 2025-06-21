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
import {log} from "node:util";
// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger)


const sections = [
    {id: "Part0", title: "Part0", color: "bg-gradient-to-br from-blue-600 to-purple-700"},
    {id: "Part1", title: "Part1", color: "bg-gradient-to-br from-blue-600 to-purple-700"},
    {id: "Part2", title: "Part2", color: "bg-gradient-to-br from-green-500 to-teal-600"},
    {id: "Part3", title: "Part3", color: "bg-gradient-to-br from-orange-500 to-red-600"},
    {id: "Part4", title: "Part4", color: "bg-gradient-to-br from-purple-600 to-pink-600"},
]

export default function Home() {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const [activeSection, setActiveSection] = useState("Part0")
    const lenisRef = useRef<Lenis | null>(null)
    const sectionsRef = useRef<HTMLElement[]>([])


    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });
        lenisRef.current = lenisInstance;

        lenisInstance.on("scroll", ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        setLenis(lenisInstance); // 存储实例到状态

        function raf(time: number) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // GSAP动画设置
        sectionsRef.current.forEach((section, index) => {
            if (section) {
                gsap.fromTo(
                    section.querySelector(".section-content"),
                    {
                        opacity: 0,
                        y: 100,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse",
                        },
                    },
                )
            }
        })

        // 监听滚动位置，更新当前活跃的section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log('entries',entry)
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: [0.5],
                rootMargin: "-20% 0px -20% 0px",
            },
        )

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section)
        })

        return () => {
            lenisInstance.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            gsap.ticker.remove((time) => lenisInstance.raf(time * 1000))
            setLenis(null);

        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element && lenisRef.current) {
            lenisRef.current.scrollTo(element, {
                offset: 0,
                duration: 1.5,
            })
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
                        index === 0 &&  <Part0 lenis={lenis}/>
                    }
                    {
                        index === 1 &&  <Part1/>
                    }
                    {
                        index === 2 &&   <Part2/>
                    }
                    {
                        index === 3 &&   <Part3/>
                    }
                    {
                        index === 4 &&    <Part4/>
                    }
                </section>
            ))}




            <TableOfContents sections={sections} activeSection={activeSection} onSectionClick={scrollToSection}/>
        </div>
    );
}