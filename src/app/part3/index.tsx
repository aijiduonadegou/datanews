"use client";
import {useEffect, useState} from "react";
import {Col, Row} from "antd";


export default function Part13() {

    // 图片路径数组（根据实际项目调整路径）
    const images = [
        'https://8.haory.top/j/j11/datanews/part3/cover2.png',
        'https://8.haory.top/j/j11/datanews/part3/cover1.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [checkStory1, setCheckStory1] = useState(false);
    const [checkStory2, setCheckStory2] = useState(false);

    const [checkStory3, setCheckStory3] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: any) => (prevIndex + 1) % images.length);
        }, 1000); // 1秒切换一次

        return () => clearInterval(interval); // 清除定时器
    }, [images.length]);

    return (
        <div>
            <div className="cover" style={{
                backgroundImage: `url( ${images[currentIndex]} )`
            }}>

            </div>

            <div className="container mx-auto  pt-10 ">
                <p className={'paragraph'}>
                    <span
                        className={'highLight'}>在婚育之后，STEM女性面临“职业向下流动”的风险，这一威胁并非源于其技术能力的不足，而是生育与技术岗位结构性要求之间的冲突。</span>技术岗位通常具有高度的连续性、协作密集性、人员稳定性以及与经济效益紧密挂钩的特征。然而，女性的生育行为会不可避免地导致工作中断、协作退出以及影响产出，这使得她们与技术岗位原有的运作逻辑不再契合。
                </p>
                <p className={'paragraph'}>
                    此外，STEM行业普遍实行节奏快且人力紧凑的项目制管理。女性因产假暂时退出后，其岗位被迅速替代，原项目也已重组。在以“减员增效”为导向的企业逻辑中，项目组通常不会为产假女性保留岗位或单独安排她们重新融入，于是STEM女性在产后几乎无从回归，在职场中被边缘化。
                </p>

                <Row>
                    <Col span={12}>
                        <img src="https://8.haory.top/j/j11/datanews/part3/sider.png" alt=""/>
                    </Col>
                    <Col span={12}>
                        <div>
                            <p className={'paragraph mt-20 '}>
                                在以“减员增效”为导向的企业逻辑中，项目组通常不会为产假女性保留岗位或单独安排她们重新融入，于是STEM女性在产后几乎无从回归，在职场中被边缘化。
                            </p>
                        </div>

                    </Col>
                </Row>

                <Row>

                    <Col span={12}>
                        <div>
                            <p className={'paragraph mt-20 '}>
                                而这种职业风险是STEM女性所特有的问题。相较而言，非STEM领域多为行政或文职性岗位，与组织绩效的直接关联度较低，对岗位人员的稳定性要求也较弱，女性在产后相对容易回归原职。
                            </p>
                        </div>

                    </Col>
                    <Col span={12}>
                        <img src="https://8.haory.top/j/j11/datanews/part3/sider2.png" alt=""/>
                    </Col>
                </Row>
                <p className={'paragraph'}>
                    <span
                        className={'highLight'}>因此，生产后的STEM女性面临三种情况：转岗下调、不转岗但没有项目做、离职。</span>不管哪种选择，她们的工资和福利待遇都全部下降，让STEM光芒四射的“高薪”特点，已离她们远去，而 <span
                    className={'highLight'}>技术壁垒似乎也不再是庇护她们的“保护伞”。</span>
                </p>

                <p className={'tips'}>
                    点击名片查看更多
                </p>
                <div className={'flex justify-around'} style={{flexWrap: 'wrap'}}>
                    <div className={'img_center cursor-pointer people'} style={{width: checkStory1 ? '100%' : '510px'}}
                         onClick={() => setCheckStory1(!checkStory1)}>
                        <img src="https://8.haory.top/j/j11/datanews/part3/r2.png" alt=""/>
                    </div>
                    {
                        checkStory1 && <div>
                            <p className={'paragraph opacity-1'} style={{opacity: '1'}}>
                                晴晴在一家科学教育研发公司工作。由于业务核心围绕青少年科学课程的研发、设计和教授展开，许多家长普遍持有“男性更擅长理科”的观念，因此在面授课倾向于选择信任的男教师。这种家长认同使得男教师在课程研发组中的占比近80%，不仅获得了公司内部的资源倾斜，也在评价体系中更易被领导认可，拥有更多发展机会。
                            </p>

                            <p className={'paragraph  opacity-1'} style={{opacity: '1'}}>
                                晴晴是华中师范大学科学教育的研究生，工作4年后通过自身努力不仅成功进入了研发组，还成为了科学面授课的老师，并且已经积攒了不少家长的好口碑。但怀孕生产，改变了这来之不易的一切。因产假休息，她在研发组的位置以及教学岗位很快被一位男教师接替。晴晴十分不确定自己的岗位在复工后是否可以保留，领导口头承诺她：“放心，你回来后适应一下还会交接回来的。”
                            </p>

                            <p className={'paragraph  opacity-1'} style={{opacity: '1'}}>
                                而等她怀着期待回来时，却发现自己被调岗了，调到了非常边缘的课程审核岗位。她去找领导要个解释，领导说，对方男教师早就已经顺利接手了，家长十分认可他的教学能力，没有办法再撤回，也不会让他退出研发组。
                            </p>

                            <p className={'paragraph  opacity-1'} style={{opacity: '1'}}>
                                晴晴感觉自己像从头到脚被凉水浇透了。课程审核的岗位本身基础工资就低，同时不再涉及授课，没有建立口碑的机会，也自然意味着没有办法获得绩效奖金。<span
                                className={'highLight  opacity-1'}
                                style={{opacity: '1'}}>她曾经一点点积累起来的职场资本，仿佛一夜归零。</span>谈及此，晴晴很委屈：<span
                                className={'highLight  opacity-1'}
                                style={{opacity: '1'}}>“这和换了一份工作没什么区别。</span>”更令人无奈的是，这种损失几乎没有任何补偿。公司虽发放了育儿津贴，但那点补助根本无法抵消岗位调整所带来的长期影响。甚至，公司内部还流传着一个心照不宣的“三年流失率”潜规则：被调岗的员工，往往在三年内自动流失或被裁撤。
                                对于刚刚结束产假的她而言，还未接受被边缘化的现实，就必须直面悬而未决的职业危机。
                            </p>
                        </div>
                    }
                    <div className={'img_center cursor-pointer people'} style={{width: checkStory2 ? '100%' : '510px'}}
                         onClick={() => setCheckStory2(!checkStory2)}>
                        <img src="https://8.haory.top/j/j11/datanews/part3/r3.png" alt=""/>
                    </div>

                    {
                        checkStory2 && <div>
                            <p className={'paragraph  opacity-1'} style={{opacity: '1'}}>
                                <span className={'highLight'}>在互联网“中厂”从事技术岗的西西，正经历着“隐形失业”。</span>西西年近40岁，在怀上二胎后选择按公司制度休产假，并将手头所有重要项目都做了交接。产假结束后，她遭受了接二连三的“劝退”，领导多次找她，想要她自己提出离职。但西西深知，40岁的宝妈离职再就业，几乎没有同等待遇的技术公司会要她，她必须争取保留自己的工作。
                            </p>
                            <p className={'paragraph  opacity-1'} style={{opacity: '1'}}>
                                在西西坚决不离职的坚持下，领导没有再劝说，然而她的处境却十分尴尬。<span
                                className={'highLight  opacity-1'}
                                style={{opacity: '1'}}>虽然西西依然在原公司，名义上也未被调岗或裁员，但所有核心项目都已被他人接手，新的项目分配也迟迟没有消息。</span>她每天照常打卡上下班，坐在工位上完成一些边角碎活，却始终无法接入公司真正的技术主线。<span
                                className={'highLight  opacity-1'}
                                style={{opacity: '1'}}>看似还在职场体系内，实则被悄然“雪藏”</span>，没人主动找她沟通新任务，参与的会议也越来越少，她的存在感一点点被稀释，仿佛逐渐从团队中“隐身”了。
                            </p>
                            <p className={'paragraph'} style={{opacity: '1'}}>
                                她并不甘心。虽然没有任何项目分配给她，但在这段被“架空”的时间里，她还在学习新技术，希望遇到新项目的时候有能力争取参与进去。实际上，她的努力无人问津，甚至因为二胎家庭和年龄较大被认为“家庭转移了工作中心，精力难以保证”。在这种既无法投入工作又不能抽身离开的日子里，上下班变得机械且煎熬，她的期待也逐渐被消磨殆尽了。提起职业发展，她就长叹一口气：“还能怎么办。”
                            </p>
                        </div>
                    }
                    <div className={'img_center cursor-pointer people'} style={{width: checkStory3 ? '100%' : '510px'}}
                         onClick={() => setCheckStory3(!checkStory3)}>

                        <img src="https://8.haory.top/j/j11/datanews/part3/r1.png" alt=""/>
                    </div>

                    {
                        checkStory3 && <div>
                            <p className={'paragraph'} style={{opacity: '1'}}>

                                原本在普通互联网公司做技术岗的小月，工作能力出色，加班赶项目也从不抱怨，工作发展有较大空间。但一切从生完孩子后开始改变。孩子的出生加大了生活开支，丈夫起早贪黑的上班赚钱，而她陷入照顾孩子和家庭琐碎的漩涡中，没有其他精力再投入工作，也就因此选择离职。
                            </p>

                            <p className={'paragraph'} style={{opacity: '1'}}>

                                孩子很小，小月不仅要喂奶、拍嗝、哄睡，还要学习科学育儿方法，带孩子晒太阳，去医院打各种疫苗......此外还得在孩子睡觉的空隙赶紧洗衣、做饭和收拾屋子。孩子长大一点，上了幼儿园，事情依然接踵而至。小月不仅要定时接送，还要随时应对孩子在幼儿园出现的各种状况，拉肚子、吃水果过敏、打闹了、发烧了......等孩子上了小学，小月仍旧忙得像陀螺。周一到周五要做饭、接送、辅导作业，周末安排孩子的音乐和篮球兴趣班，哪个环节她都不能落下。尽管她的父母偶尔能在经济上和育儿上给予些许帮衬，但基本上于事无补。
                            </p>

                            <p className={'paragraph'} style={{opacity: '1'}}>

                                孩子逐渐长大，养育成本也随之不断增加，仅凭丈夫一个人的工资有些难以支撑家庭的运转，小月必须要重新就业。而将近8年的工作空档期使她费劲力气却只能找到一份文职岗位，处理一些基础的数据录入和行政事务。每月工资3000元，几乎看不到上涨的空间；朝九晚五，没加班没绩效；同事关系淡如水，也没有成长的机会。这样的职业，一眼望到头。
                            </p>

                            <p className={'paragraph'} style={{opacity: '1'}}>

                                <span
                                    className={'highLight'}>曾经拼命学代码、通宵debug，想要在技术行业站稳脚跟的努力早就成了一场空。</span>如今的她，消磨在家庭和工作的拉锯中，也早已不再想象如果能回到过去那个岗位，人生还会是怎样的光景。
                            </p>

                        </div>
                    }
                </div>

            </div>
        </div>
    );
};
