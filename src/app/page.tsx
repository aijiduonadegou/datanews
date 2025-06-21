"use client";
import { gsap } from "gsap"
import Part0 from './part0'
import Part1 from './part1'
import Part2 from './part2'
import Part3 from './part3'
import Part4 from './part4'
import {useEffect, useState} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Lenis from "@studio-freight/lenis";
// 注册 GSAP 插件
gsap.registerPlugin(ScrollTrigger)

export default function Home() {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            lerp: 0.1,
            orientation: 'vertical',
            wheelMultiplier: 0.8
        });

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

        return () => {
            lenisInstance.destroy();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
            gsap.ticker.remove((time) => lenisInstance.raf(time * 1000))
            setLenis(null);

        };
    }, []);

    return (
        <div>
            <Part0 lenis={lenis} />
            <Part1  />
            <Part2  />
            <Part3 />
            <Part4 />
        </div>
    );
}