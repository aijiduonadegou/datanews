"use client"
import {Card, Col, Row} from 'antd'
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";

const {Meta} = Card;
export default function Part4() {
    const earthRef = useRef<HTMLDivElement>(null)

    const [p1, setP1] = useState<boolean>(false)
    const [p2, setP2] = useState<boolean>(false)

    const [p3, setP3] = useState<boolean>(false)

    useEffect(() => {


        gsap.to(
            '.earth_text',
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: earthRef.current,
                    start: "top -70%",  // 调整为容器顶部距离视口底部10%时触发
                    toggleActions: "play none none reverse",
                }
            }
        )

        gsap.to(
            '.earth',
            {
                rotation: 360, duration: 5,
                scrollTrigger: {
                    trigger: earthRef.current,
                    start: "top -30%",  // 调整为容器顶部距离视口底部10%时触发
                    toggleActions: "play none none reverse",
                }
            }
        )
        gsap.to(
            '.end',
            {
                opacity: 1,
                duration: 5,
                scrollTrigger: {
                    trigger: earthRef.current,
                    start: "bottom 50%",  // 调整为容器顶部距离视口底部10%时触发
                    toggleActions: "play none none reverse",
                }
            }
        )


    }, []);
    return (
        <div>
            <div className="cover" style={{
                backgroundImage: `url('https://8.haory.top/j/j11/datanews/part4/cover.jpg')`
            }}>

            </div>

            <div className="container mx-auto  pt-10 ">
                <p className={'paragraph'}>
                    尽管STEM女性在项目为导向、高强度协作、严控成本的技术组织中常被视为低弹性人力资源，但这并不意味着她们在职业道路上必然陷入边缘化的命运。
                </p>
                <p className={'paragraph'}>
                    <span className={'highLight'}>技术道路上仍然有成功的榜样。</span>
                </p>
            </div>
            <p className={'tips'}>
                鼠标悬浮在人物上，查看更多
            </p>
            <div className="cover relative" style={{
                backgroundImage: `url('https://8.haory.top/j/j11/datanews/part4/ttt.png')`
            }}>

                {
                    p1 && <div className="paragraph absolute bg-[gray] w-[650px] top-[30px]  left-[60px]  "
                               style={{fontSize: '22px', lineHeight: '30px', padding: '20px', opacity: 1}}>
                        “我有计算机科学背景，并在一家保险公司的软件团队中担任信息系统经理。2018年，我与两名女性合作，考虑到马尔代夫的地理位置和发展背景，技术越来越重要，我们建立了女性科技公司。公司为该领域的女性提供建立社交网络的机会，并供给她们数据收集、管理、创新和网络安全的工作。公司也积极支持女性的STEM教育事业，包括为马尔代夫科技学院培养200名女性成员，在马尔代夫各地培训了8000
                        名儿童的编程技能。”
                    </div>
                }
                <div className={'w-[500px] h-[500px]  absolute bottom-[100px]'} onMouseEnter={() => setP1(true)}  onMouseLeave={() => setP1(false)}></div>
                {
                    p3 && <div className="paragraph absolute bg-[gray] w-[650px] top-[655px] left-[600px]  "
                               style={{fontSize: '22px', lineHeight: '30px', padding: '20px', opacity: 1}}>

                        “我因为读过达尔文的书，被他探索未知的经历吸引，于是在本科选择了生物学。但我上大学时，北京大学生物系只有实验课，我有点失望。然而，在本科学习的第三年，我很幸运地遇到了一位在野外研究大熊猫的教授。我认为这是一个探索的机会，就联系教授问能不能带着我做研究，就这样开始了我的职业生涯。周围的人都反对，因为他们认为去野外研究动物、到处跑、爬山是典型的‘男人的工作’。但母亲给了我信念，她说，你可以大胆地做出任何决策，但是如果有一天你后悔了，也必须为此负责。我毫不犹豫地告诉她，我不会后悔的。这是真的，我从没后悔过。”
                    </div>
                }
                <div className={'w-[500px] h-[500px]  absolute bottom-[100px] right-[50px]'}
                     onMouseEnter={() => setP3(true)} onMouseLeave={() => setP3(false)}></div>

                {
                    p2 && <div className="paragraph absolute bg-[gray] w-[650px] top-[30px] right-[60px]  "
                               style={{fontSize: '22px', lineHeight: '30px', padding: '20px', opacity: 1}}>
                        “读小学时，我学数学遇到了困难，这使我感到很自卑。上中学时，感觉学数学变得容易了，但那个时候我想成为一名律师。后来我顺利考入大学的生物技术专业，成为少数学习STEM的女学生，毕业后成为了一名医生。如今我的女儿们也在STEM领域工作，分别从事工程测量和化学工程。我的丈夫也支持我的女儿们从事STEM行业，他一直支持我们的远大志向。”
                    </div>
                }
                <div className={'w-[500px] h-[500px]  absolute top-[100px]  left-0 right-0 m-auto'} onMouseEnter={() => setP2(true)} onMouseLeave={() => setP2(false)}></div>


                <p className={'paragraph absolute bottom-0 right-20 w-[500px]'}>
                    吕植，北京大学生命科学学院教授、自然与社会中心执行主任，58岁。
                </p>
            </div>
            <div className="container mx-auto  pt-40 ">

                <p className={'paragraph'}>
                榜样涌现，<span className={'highLight'}>STEM女性也不断地团结起来，形成自己的社会网络和共享资源。</span>全球范围内女性工程师、程序员、产品经理等群体的集结形成了日益壮大的技术性别共同体，如“Women
                    in Bio”“Women in Tech”“She Loves Tech”等组织，提供了资源共享、情感支持与职场导航的文化网络，使女性得以在男性主导的技术语境之外建立独立身份与认同空间。
                </p>

                <p className={'paragraph'}>

                    另一方面，<span className={'highLight'}>AI技术引领的产业变革也为STEM女性带来了新的发展机遇。</span>人工智能、大数据等前沿领域日益重视跨学科融合，如“数据+心理”“算法+伦理”“编程+沟通”等复合型能力结构。《印度时报》6月9日报道指出，在AI未来发展的十年中，情绪引导、伦理思维、高级沟通等“软技能”将愈发重要，而这些正是女性相对擅长的领域。“技术+X”的融合模式打破了传统技术岗位的边界，使女性有更多机会在复合型岗位中积累专业资本。尤其是一些女性将生理特质与婚育经验转化为创新动力，投身AI体检、母婴科技、女性陪伴系统等新赛道，以“经验的技术转译”推动身份转换与产业创新，拓展了自身的参与边界与价值空间。
                </p>
                <p className={'paragraph'}> 与此同时，<span className={'highLight'}>技术企业也革新了工作模式。</span>2023年，《福布斯》公布的全球最适合女性工作的公司中，位列第5的万豪国际集团提供了一系列以女性为中心的计划和福利，包括灵活的工作时间安排、兼职管理职位等，员工可以在酒店内学习和执行多项任务，从而承担更大的责任，并获得更多的职业晋升机会。事实上，麦肯锡（McKinsey）和LeanIn.Org最新发布的《职场女性》报告显示，每五名美国女性中就有一人表示，“灵活性”帮助她们保住了自己的工作，或是避免了工作时间的减少。领英（LinkedIn）“性别平等最佳发声者”妮可·凯尔（Nicole
                    Kyle）表示：“灵活性对每个人都有帮助，尤其是对职业女性而言，因为女性通常需要承担大量的家庭责任。我是灵活性的忠实拥趸，数据也显示这是员工们的心之所向。”
                </p>

                <p className={'paragraph'}>
                    中国公司同样推出了灵活工作模式，包括混合工作制和混合团队成员。携程于2022年实行“3+2”混合工作制，允许近3万名员工每周三和周五在家远程办公。携程集团联合创始人梁建章曾表示：“这种模式不仅减少了通勤拥堵，提升了员工满意度，还有利于减轻夫妻育儿压力，促进女性职业发展。”据2023年携程内部调研，对于岗位和团队类型而言，有明确交付成果的技术型团队更倾向于混合办公。所有申请员工中，技术产研团队累计占比85.6%，技术管理者也比业务管理者更加乐观。携程数据显示，过去一年，技术团队的“7天交付率指标”、“每周发布数指标”均有超10个百分点的提升。
                </p>

                <p className={'paragraph'}>
                    尽管环境和前路复杂多变，女性仍旧选择走进STEM领域，尝试在其中找到自己的位置。技术之光如今未必照亮了她们，但她们依然努力奋斗积蓄力量，在挣扎中坚持，在掣肘之处寻找突破的可能。她们的身影会化为一束束火焰，或许还不被看见，但会在未来照亮更多的女性。
                </p>

                <p className={'paragraph'}>
                    总有这样的一天，女性不断在STEM领域崭露头角，此时STEM对她们而言不再是窄路，
                    而是通往未知与创造的广阔天地，承载着她们的好奇、热爱与力量。她们不再被问“能不能”，而是开始决定“要不要”；<span
                    className={'highLight'}>不再是例外的存在，而是理所当然的一部分。</span>
                </p>

                <p className={'paragraph'}>
                    那时已不需要特别强调“女工程师”“女科学家”，<span
                    className={'highLight'}>她们只是工程师，是科学家，是改变世界的人。</span>
                </p>


            </div>

            <div ref={earthRef}
                 className="shay bg-[url('https://8.haory.top/j/j11/datanews/part4/shay.gif')] relative bg-no-repeat h-[2100px] ">
                <img src="https://8.haory.top/j/j11/datanews//part4/ddd.png" className={'earth  absolute top-[550]'}
                     style={{
                         transformStyle: 'preserve-3d'
                     }}
                     alt=""/>
                <img src="https://8.haory.top/j/j11/datanews/part4/mp.png" className={' absolute top-[200]'}
                     alt=""/>


                <div className={'earth_text absolute left-0 right-0 m-auto z-[999] text-left top-[800] opacity-0'}
                     style={{marginBottom: '300px'}}>
                    <div className={'w-[650px] m-auto'}>
                        <p className={'paragraph text-center'}>
                            （本文受访者皆为化名）
                        </p>

                        <p className={'paragraph  text-center'}>
                            制作团队
                        </p>
                        <p className={'paragraph  text-center'}>
                            采访：王润彤 李昂岂 蒲子菲 <br/>

                            撰文：王润彤 李昂岂<br/>
                            数据分析及可视化：李昂岂 蒲子菲 张凯婷<br/>
                            美工：张凯婷<br/>
                        </p>
                        <p className={'paragraph  text-center'}>

                            指导老师 <br/>
                            <br/>
                            戴玉老师
                            <br/>
                            刘萍老师
                        </p>
                    </div>
                    <p className={'paragraph'}>
                        数据来源及参考文献
                    </p>
                    <p className={'paragraph'}>
                        [1]麦可思.《2023年中国本科就业报告》<br/>
                        [2]杨娟. 工科毕业生专业认同与跨学科深造情况的实证研究 [J]. 高等理科教育, 2019,(05):19-24. <br/>
                        [3]Congbin Guo, Mun C. Tsang, Xiaohao Ding,Gender disparities in science and engineering in
                        Chinese universities, Economics of Education Review, Volume 29, Issue 2, 2010, Pages
                        225-235,ISSN 0272-7757, https://doi.org/10.1016/j.econedurev.2009.06.005.<br/>
                        [4]智联招聘.《2020年就业困难大学生群体研究报告》<br/>
                        [5]麦可思.《2020届本科生毕业半年后培养质量的跟踪评价》<br/>
                        [6]Kalhor, G., Gardner, H., Weber, I., & Kashyap, R. (2024). Gender Gaps in Online Social
                        Connectivity, Promotion and Relocation Reports on LinkedIn. Proceedings of the
                        International AAAI Conference on Web and Social Media, 18(1), 800-812.
                        https://doi.org/10.1609/icwsm.v18i1.31353<br/>
                        [7]layoffs.fyi.《2022-2024裁员追踪数据》https://layoffs.fyi/<br/>
                    </p>
                    <p className={'paragraph  text-center'}>
                        特别致谢
                    </p>

                    <p className={'paragraph text-center'}>
                        感谢所有接受采访的STEM女性<br/>
                        感谢戴玉老师和刘萍老师全程给予的辅导与帮助<br/>
                        感谢制作团队成员相互的理解与支持<br/>
                    </p>
                    <div className="img_center end opacity-0 mt-[320px]">
                        <img src="https://8.haory.top/j/j11/datanews/part4/end.png" alt=""/>
                    </div>
                </div>

            </div>

        </div>
    );
}
