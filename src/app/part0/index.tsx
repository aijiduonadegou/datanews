import {Row, Col} from 'antd';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";


export default function Part0() {
    const cover1 = useRef<HTMLDivElement>(null)
    const cover2 = useRef<HTMLDivElement>(null)
    const cover3 = useRef<HTMLDivElement>(null)
    const downRef = useRef<HTMLDivElement>(null)


    const p1 = useRef<HTMLDivElement>(null)

    const p2 = useRef<HTMLDivElement>(null)

    const p3 = useRef<HTMLDivElement>(null)

    const p4 = useRef<HTMLDivElement>(null)

    const p5 = useRef<HTMLDivElement>(null)


    useEffect(() => {


        gsap.fromTo(
            cover1.current,
            {y: 800, opacity: 0},
            {
                y: 0,
                opacity: 1,
            }
        )
        gsap.fromTo(
            cover2.current,
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.cover2',
                    start: "top 60%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        gsap.fromTo(
            cover3.current,
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: cover3.current,
                    start: "top 60%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        gsap.fromTo(
            '.pp1',
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: p1.current,
                    start: "top 0%",
                    end: "top 0%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        gsap.fromTo(
            '.pp2',
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: p1.current,
                    start: "top 20%",
                    end: "top 20%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        gsap.fromTo(
            '.pp3',
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: p1.current,
                    start: "top 40%",
                    end: "top 40%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        gsap.fromTo(
            '.pp4',
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: p1.current,
                    start: "top 60%",
                    end: "top 60%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        gsap.fromTo(
            '.pp5',
            {y: 0, opacity: 0},
            {
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: p1.current,
                    start: "top 80%",
                    end: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        )


        gsap.to('.pText',  {
            opacity: 1,
            scrollTrigger: {
                trigger: downRef.current,
                start: "top 10%",
                toggleActions: "play none none none",
            }
        })
        gsap.to('.pText1',  {
            opacity: 1,
            scrollTrigger: {
                trigger: downRef.current,
                start: "top 5%",
                toggleActions: "play none none none",
            }
        })
        gsap.to('.pText2',  {
            opacity: 1,
            scrollTrigger: {
                trigger: downRef.current,
                start: "top -10%",
                toggleActions: "play none none none",
            }
        })
        gsap.to('.pText3',  {
            opacity: 1,
            scrollTrigger: {
                trigger: downRef.current,
                start: "top -20%",
                toggleActions: "play none none none",
            }
        })

        gsap.to('.dg',  {
            opacity: 1,
            scrollTrigger: {
                trigger: downRef.current,
                start: "top -60%",
                toggleActions: "play none none none",
            }
        })
        gsap.to('.dm',  {
            opacity: 1,
            scrollTrigger: {
                trigger: downRef.current,
                start: "top -90%",
                toggleActions: "play none none none",
            }
        })


    }, []);

    return (
        <div>
            <div className="cover cover1" ref={cover1} style={{
                backgroundImage: `url( 'https://8.haory.top/j/j11/datanews/part0/cover1.png' )`
            }}>
            </div>
            <div className="cover cover2" ref={cover2} style={{
                backgroundImage: `url( 'https://8.haory.top/j/j11/datanews/233.png' )`
            }}>
            </div>
            <div className="cover cover3" ref={cover3} style={{
                backgroundImage: `url( 'https://8.haory.top/j/j11/datanews/part0/cover.png' )`
            }}>
            </div>
            <div className="container mx-auto  pt-10 " ref={p1}>
                <Row className='h-[420px]'>
                    <Col span={12}>
                        <div className='relative'>
                            <img src="https://8.haory.top/j/j11/datanews//part0/1.png"
                                 className='absolute top-0 left-[10px] z-40  pp1' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/2.png"
                                 className='absolute top-0 left-[10px] z-30 pp2' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/3.png"
                                 className='absolute top-0 left-[10px] z-20 pp3' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/4.png"
                                 className='absolute top-0 left-[10px] z-10 pp4' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/5.png"
                                 className='absolute top-0 left-[10px] z-0 pp5' width={960}
                                 height={540} alt=""/>
                        </div>
                    </Col>
                    <Col span={12}>
                        <p className='paragraph'>
                            “STEM”是Science（科学）、Technology（技术）、Engineering（工程）和Mathematics（数学）的缩写，也是人们熟知的“理工科”。过去十年间，随着科技行业的飞速发展，STEM女性一度被视为职场逆袭的代表。她们依靠实力闯入男性主导的技术领域，赢得同等的尊重与声望。
                        </p>
                    </Col>
                </Row>
                <p className='paragraph'>
                    相较于非STEM领域的女性，她们因掌握专业理工技能而具备更强的技术壁垒与不可替代性，这使得STEM成为部分女性在职业选择中的“安全牌”；同时从事STEM职业也享有更高的薪酬回报，若以财富作为阶层划分的标准，STEM则暗含助力阶层跃迁的可能，因此逐渐构建起技术充满光芒的“神话”。
                </p>
                <div className='img_center'>
                    <img src='https://8.haory.top/j/j11/datanews/part0/fiveYear.png' width='1200' height='500' alt=''/>

                </div>
                <p className='paragraph'>
                    然而，一场“技术未能庇护女性”的悖论正悄悄展开。

                </p>
                <p className='paragraph'>
                    经济下行期又遇AI发展的技术革新，理工科岗位正在逐渐成为“既被裁员又被AI替代的重灾区”。

                </p>
                <p className='paragraph'>
                    2025年6月，据济南日报报道，花旗集团宣布裁掉4000名技术人员。宋女士表示：“很突然，仅仅保留了非常少的员工支持香港业务，可以概括成上海大连一锅端了。”根据就业追踪机构Layoffs.fyi统计，自生成式AI兴起后，全球科技公司的平均裁员率逐年上升。

                </p>
                <div className='img_center'>
                    <img src='https://8.haory.top/j/j11/datanews/part0/timeline.png' width={1000} alt=''/>
                </div>
                <p className='paragraph'>
                    诺贝尔经济学奖得主克里斯托弗·皮萨里季斯告诚年轻一代，不要一窝蜂地学习科学、技术、工程和数学(STEM)专业。AI时代将对STEM领域产生严重冲击。
                </p>

            </div>

            <div ref={downRef} className=" cover relative z-[-100]" style={{
                height: '3223px',
                backgroundSize: '1112px 3223px',
                backgroundImage: `url('https://8.haory.top/j/j11/datanews/part0/lf.png' )`
            }}>
                <img src="https://8.haory.top/j/j11/datanews/part1/girlDown.png"
                     className={'dg absolute left-[850px] top-[30%] w-[500px] opacity-0'} alt=""/>
                <img src="https://8.haory.top/j/j11/datanews/part1/mz.png"
                     className={'dm absolute left-0 right-0 m-auto top-[60%] w-[250px] opacity-0'} alt=""/>
                <div className="pText paragraph w-[20px] absolute top-[200px] left-[300px] dt1 opacity-0">
                    宋女士的经历不是个案。
                </div>
                <div className="pText1 paragraph w-[30px] absolute top-[550px] left-[440px] opacity-0">
                    在当下这个复杂的时期。
                </div>
                <div className="pText2 paragraph w-[30px] absolute top-[800px] right-[300px] opacity-0">
                    对女性来说，技术究竟是【 <br/>安全牌 <br/>】<br/> 还是 <br/>【 <br/>安全陷阱 <br/>】 <br/>
                </div>
                <div className="pText3 paragraph w-[20px] absolute top-[1700px] left-[1200px] opacity-0">
                    S <br/>T <br/>E <br/>M 女性又将如何审视自己的命运？
                </div>
            </div>
        </div>
    );
}
