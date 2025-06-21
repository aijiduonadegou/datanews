"use client"
import {Card, Col, Row} from 'antd'
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

const {Meta} = Card;
export default function Part4() {
    const earthRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        gsap.fromTo(
            '.earth',
            {

            },
            {
                duration: 1.5, // 动画持续时间
                ease: "power2.out",  // 缓动函数
                scrollTrigger: {
                    trigger: earthRef.current,
                    start: "top 90%",  // 调整为容器顶部距离视口底部10%时触发
                    end: "top 50%",    // 动画在容器到达视口中部时完成
                    toggleActions: "play none none reset", // 修改为reset确保回滚时重置
                    markers: true      // 开发阶段建议开启标记
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
                    技术道路上仍然有成功的榜样。
                </p>
            </div>
            <div className="cover relative" style={{
                backgroundImage: `url('https://8.haory.top/j/j11/datanews/part4/ttt.png')`
            }}>

                <div className="paragraph absolute bg-[gray] w-[650px] top-[30px] left-[60px]  "
                     style={{fontSize: '22px', lineHeight: '30px', padding: '20px'}}>
                    “我有计算机科学背景，并在一家保险公司的软件团队中担任信息系统经理。2018年，我与两名女性合作，考虑到马尔代夫的地理位置和发展背景，技术越来越重要，我们建立了女性科技公司。公司为该领域的女性提供建立社交网络的机会，并供给她们数据收集、管理、创新和网络安全的工作。公司也积极支持女性的STEM教育事业，包括为马尔代夫科技学院培养200名女性成员，在马尔代夫各地培训了8000
                    名儿童的编程技能。”
                </div>
                <div className="paragraph absolute bg-[gray] w-[650px] top-[670px] left-[600px]  "
                     style={{fontSize: '22px', lineHeight: '30px', padding: '20px'}}>
                    “读小学时，我学数学遇到了困难，这使我感到很自卑。上中学时，感觉学数学变得容易了，但那个时候我想成为一名律师。后来我顺利考入大学的生物技术专业，成为少数学习STEM的女学生，毕业后成为了一名医生。如今我的女儿们也在STEM领域工作，分别从事工程测量和化学工程。我的丈夫也支持我的女儿们从事STEM行业，他一直支持我们的远大志向。”
                </div>
                <div className="paragraph absolute bg-[gray] w-[650px] top-[30px] right-[60px]  "
                     style={{fontSize: '22px', lineHeight: '30px', padding: '20px'}}>
                    “读小学时，我学数学遇到了困难，这使我感到很自卑。上中学时，感觉学数学变得容易了，但那个时候我想成为一名律师。后来我顺利考入大学的生物技术专业，成为少数学习STEM的女学生，毕业后成为了一名医生。如今我的女儿们也在STEM领域工作，分别从事工程测量和化学工程。我的丈夫也支持我的女儿们从事STEM行业，他一直支持我们的远大志向。”
                </div>
            </div>
            <div className="container mx-auto  pt-10 ">

                <p className={'paragraph'}>
                    榜样涌现，STEM女性也不断地团结起来，形成自己的社会网络和共享资源。全球范围内女性工程师、程序员、产品经理等群体的集结形成了日益壮大的技术性别共同体，如“Women
                </p>

                <p className={'paragraph'}>
                    in Bio”“Women in Tech”“She Loves Tech”等组织，提供了资源共享、情感支持与职场导航的文化网络，使女性得以在男性主导的技术语境之外建立独立身份与认同空间。
                    另一方面，AI技术引领的产业变革也为STEM女性带来了新的发展机遇。人工智能、大数据等前沿领域日益重视跨学科融合，如“数据+心理”“算法+伦理”“编程+沟通”等复合型能力结构。《印度时报》6月9日报道指出，在AI未来发展的十年中，情绪引导、伦理思维、高级沟通等“软技能”将愈发重要，而这些正是女性相对擅长的领域。“技术+X”的融合模式打破了传统技术岗位的边界，使女性有更多机会在复合型岗位中积累专业资本。尤其是一些女性将生理特质与婚育经验转化为创新动力，投身AI体检、母婴科技、女性陪伴系统等新赛道，以“经验的技术转译”推动身份转换与产业创新，拓展了自身的参与边界与价值空间。
                    与此同时，技术企业也革新了工作模式。2023年，《福布斯》公布的全球最适合女性工作的公司中，位列第5的万豪国际集团提供了一系列以女性为中心的计划和福利，包括灵活的工作时间安排、兼职管理职位等，员工可以在酒店内学习和执行多项任务，从而承担更大的责任，并获得更多的职业晋升机会。事实上，麦肯锡（McKinsey）和LeanIn.Org最新发布的《职场女性》报告显示，每五名美国女性中就有一人表示，“灵活性”帮助她们保住了自己的工作，或是避免了工作时间的减少。领英（LinkedIn）“性别平等最佳发声者”妮可·凯尔（Nicole
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
                    而是通往未知与创造的广阔天地，承载着她们的好奇、热爱与力量。她们不再被问“能不能”，而是开始决定“要不要”；不再是例外的存在，而是理所当然的一部分。
                </p>

                <p className={'paragraph'}>
                    那时已不需要特别强调“女工程师”“女科学家”，她们只是工程师，是科学家，是改变世界的人。
                </p>


            </div>

            <div ref={earthRef}
                 className="shay bg-[url('https://8.haory.top/j/j11/datanews/part4/shay.gif')] relative bg-no-repeat h-[1500px] ">
                <img src="https://8.haory.top/j/j11/datanews//part4/ddd.png" className={'earth  absolute top-[550]'}
                     style={{
                         transformStyle: 'preserve-3d'
                     }}
                     alt=""/>
                <img src="https://8.haory.top/j/j11/datanews//part4/mp.png" className={' absolute top-[200]'}
                     alt=""/>

            </div>

        </div>
    );
}
