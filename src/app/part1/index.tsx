"use client"
import {useEffect, useState} from "react";
import {Col, Row} from "antd";

export default function Part1() {

    const [left, setLeft] = useState(0);
    const [showP1, setShowP1] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            setLeft((prevIndex: any) => {
                if (prevIndex >= 1920) {
                    return 0
                } else {
                    return (prevIndex + 10)
                }
            });
        }, 100)

        return () => clearInterval(interval); // 清除定时器
    }, [left]);


    const [isMessage, setMessage] = useState(false)

    return (
        <div>
            {/*<div className={"h-[800px] bg-[url('/part0/lf.png')] bg-no-repeat bg-[length:600px_1000px]"}>*/}

            {/*</div>*/}
            <div className="cover" style={{
                backgroundImage: `url('https://8.haory.top/j/j11/datanews/part1/cover.jpg' )`
            }}>

            </div>
            <div className="container mx-auto  pt-10 ">
                {/*bg-[url('https://8.haory.top/j/j11/datanews/part1/bg.png')] bg-fixed bg-cover bg-center*/}
                <p className={'paragraph'}>
                    中南大学地球物理专业的大三学生小林正陷于这样的困境之中。她曾因兴趣选择了该专业，理应拥有多元出路：考编制入地震局、进入科研企业、继续深造等。然而现实往往是残忍的，有的道路看似光明实则从未畅通。
                </p>
                <p className={'paragraph'}>
                    地球物理专业设有高强度的测绘与勘探实践，因此学生们要背着沉重的仪器去往野外实地考察。清早就进山采样，烈日下计算刨土方量，夜晚扎营深山观测星轨。小林对此并无怨言，她认为爬山和野外作业这样考验身体素质的任务并非女生所不能完成。但是当走出学校的实践课，面临找一份企业实习时，小林接收到这样的用人反馈信息：“这岗位要爬山的哦”，“我们更看重男生”，“其实你可以试试文员岗”。不仅如此，毕业季来临之前，来自地勘单位“男性，能接受半年以上无人区作业”的招聘内容在学生之间转发。
                </p>
            </div>
            <div className="cover" style={{
                backgroundImage: `url('https://8.haory.top/j/j11/datanews/part1/bg.png' )`
            }}>

            </div>

            <div className="container mx-auto  pt-10 ">
                <div
                    className="hasPhone bg-[url('https://8.haory.top/j/j11/datanews/part1/phone.png')] h-[750px] bg-[length:760px_625px] bg-no-repeat bg-right">
                    <p className={'paragraph'}>
                        但是当走出学校的实践课，面临找一份企业实习时，小林接收到这样的用人“这岗位要爬山的哦”“我们更看重男生”反馈信息:试文员岗”不仅如此，毕业季来临之前，来自地勘单位“男性，能接受半年以上无人区作业”的招聘内容在 <br/>学生之间转发。
                    </p>
                    <p className={'paragraph'}>
                        事实就是如此，通往科研企业的职业路径早在实习阶段就划出了性别界限。许多用人单位因 “背仪器<br/>爬山等体力活，女生无法胜任”而不招女生。这已是业内心照不宣却从未言明的“行业黑话”。
                    </p>
                    <p className={'paragraph'}>
                        这样具有性别倾向的STEM专业同时还有很强的信息不对称性。社交媒体上多是<br/>个性化和
                        差异化的经验帖，真实有效的信息供给不足，另外又无亲戚<br/>可以打听询问，因此小林在当初选择专业时几乎不了解现实情况，<br/>学习之后才知晓内幕。
                    </p>

                </div>
            </div>

            <div className="girlBox h-[100vh] relative overflow-hidden">
                {
                    !isMessage && (
                        <div>
                            <img src="https://8.haory.top/j/j11/datanews/part1/girlMessage1.png"
                                 className={'absolute top-0'}
                                 style={{
                                     left: left,
                                 }} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews/part1/girlMessage2.png"
                                 className={'absolute top-0'}
                                 style={{
                                     left: left - 1920,
                                 }} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews/part1/girlMessage3.png"
                                 className={'absolute top-0'}
                                 style={{
                                     left: left - 2400,
                                 }} alt=""/>
                        </div>
                    )
                }
                <img src="https://8.haory.top/j/j11/datanews/part1/girl.png"
                     className={'absolute bottom-0 left-0 right-0 m-auto z-[999]'} alt=""
                     onClick={() => setMessage(!isMessage)}/>

                {
                    isMessage && <img src="https://8.haory.top/j/j11/datanews/part1/bg2.png"
                                      className={'absolute bottom-0 left-0 right-0 m-auto z-[222]]'} alt=""
                    />
                }


                {isMessage && (<div>
                    <img src="https://8.haory.top/j/j11/datanews/part1/rightMessage.png" className={'absolute bottom-0 left-0 right-0 m-auto z-50'}
                         alt=""/>
                    <img src="https://8.haory.top/j/j11/datanews/part1/leftMessage.png" className={'absolute bottom-0 left-0 right-0 m-auto z-50'}
                         alt=""/>
                </div>)}

            </div>
            <div className="container mx-auto  pt-10 ">
                <p className={'paragraph'}>
                    “现在歧视是一个行业黑话，所有人都知道事实，但是学生们又不能（公开）说，导致越来越多后继的学生说我喜欢这个专业我来学，最后发现被骗了。我觉得企业应该直接说出来，而且不能限制性别，因为一定也有强壮的女生可以胜任，但是我仍然觉得现状有点难以改变。”这让小林对自己的专业发展前景丧失信心与期待。无独有偶，数据显示在本科毕业生中，工科女生对自己的专业认同度明显低于工科男生。
                </p>
                <div
                    className="relative w-full pt-[75%] pb-0 shadow-md mt-6 mb-3.6 overflow-hidden rounded-lg will-change-transform">
                    <iframe
                        loading="lazy"
                        className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
                        src="https://www.canva.cn/design/DAGqJNjV0sw/PyXXw0Cnq8XPw49BBuKeBg/view?embed"
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <p className={'paragraph'}>
                    高校的平等招生与企业的歧视招聘之间，看似是一道缝隙，实则是一条无法逾越的鸿沟。面对这种教育与就业无法衔接的断裂，地球物理专业的女学生往往只能做出两个方面的选择：一是围绕着升学深造，要么跨考其他理工科专业的研究生，拔高学历的同时换个
                    “名片”进入就业市场；要么继续在本专业深造，硕博毕业后留校任教。二是围绕着转岗就业，要么考公考编，要么去其他领域工作。
                </p>
                <Row>
                    <Col span={12}>
                        <div
                            className="h-[600px] bg-[url('https://8.haory.top/j/j11/datanews/part1/boy.png')]  bg-[length:500px_500px] bg-no-repeat bg-bottom bg-center">
                            <p className={'paragraph'}>
                                一是围绕着升学深造,要么跨考其他理工科专业的研究生，拔高学历的同时换个
                                “名片”进入就业市场;要么继续在本专业深造，硕博毕业后留校任教。
                            </p>
                        </div>

                        {/*<img src="https://8.haory.top/j/j11/datanews/part1/boy.png" width={500} alt=""/>*/}
                    </Col>
                    <Col span={12}>
                        <div
                            className="h-[600px] bg-[url('https://8.haory.top/j/j11/datanews/part1/girls.png')]  bg-[length:500px_500px] bg-no-repeat bg-bottom bg-center">

                            <p className={'paragraph'}>
                                二是围绕着转岗就业、要么考公考编，要么去其他领域工作。
                            </p>

                        </div>
                    </Col>
                </Row>
                <p className={'paragraph'}>
                    在这种选择框架下，小林的内心迷茫又挣扎。有时感到很疲惫，她会打电话向父母倾诉，但他们总说：“你一个女生，这专业能出来能干啥，还不如考个公务员。”小林听后深感绝望，“说真的，如果我毕业的最终目的是考公，那为什么我要选这个专业，选一个不这么难的稍微轻松一点的专业不好吗？起码不会每天推公式推得头都要秃了，然后啥都学，学一大堆东西，不知道用在哪里。”
                </p>
                <p className={'paragraph'}>
                    最后，小林没有选择考公，而是准备跨考电子信息方向的研究生，以求未来职业的保障性。这样的选择绝非个案。<span
                    className="text-[rgb(247,123,161)] cursor-pointer" onClick={() => setShowP1(!showP1)}>
                    数据显示，工科专业的女生比男生就业率低了15.3％，深造率高了12.6％。
                </span>
                </p>
                {
                    showP1 &&
                    <div className="img_center">
                        <img src="https://8.haory.top/j/j11/datanews/part1/p1.png" width={1000} alt=""/>
                    </div>
                }

                <p className={'paragraph'}>
                    然而，升学真的能提升她们的竞争力并帮助弥别性别差距吗？

                </p>
                <p className={'paragraph'}>
                    智联招聘数据显示，不同学历水平下，男女就业难度有显著差异。大专阶段女性就业难度系数比男性低0.9%，二者差距最小；硕士阶段为差距最大时期，女性就业难度比男性高6.7%，；到博士阶段二者之间的差距才略微缩小，但女性的就业难度仍比男性高出1.7%。这表明，对STEM女性而言，即便她们继续攻读研究生学位，学历优势在性别结构性不平等面前，并不总是有效的缓冲器。研究生学历优势只能相较于大专和本科学历的男性，但是对于同等学历的男性，她们的就业竞争力甚至更弱。

                </p>
                <p className={'paragraph'}>
                    如果不执着于深造，直接就业又如何？麦可思数据显示，2020年工科女性毕业半年内就业最多的五大行业中，排名第一的是专业相关度仅为32%却拥有76%就业满意度的教育领域。尽管教育行业薪资较低，涨薪幅度有限，但其晋升比例高达65%，领先多个热门行业。

                </p>
                <div
                    className="h-[500px] bg-[url('https://8.haory.top/j/j11/datanews/part1/line.png')] relative bg-[length:960px_540px] bg-no-repeat bg-bottom bg-center">

                    <img src="https://8.haory.top/j/j11/datanews/part1/jy.png"
                         className={'absolute top-[30] left-[520] left-[100] w-[400]'} alt=""/>


                    <div className={'w-[50px] h-[245px]  bottom-[130] left-[480] absolute'}>

                    </div>
                    <div className={'w-[50px] h-[235px]  bottom-[130] left-[600] absolute'}>

                    </div>
                    <div className={'w-[50px] h-[155px]  bottom-[130] left-[730] absolute'}>

                    </div>
                    <div className={'w-[50px] h-[145px]  bottom-[130] left-[855] absolute'}>

                    </div>
                    <div className={'w-[50px] h-[100px]  bottom-[130] left-[980] absolute'}>
                    </div>
                </div>
                <p className={'paragraph'}>
                    这意味着，该阶段的STEM女性不是在负重前行，就是已经离开了这条路。
                </p>
            </div>


        </div>
    )
        ;
}
