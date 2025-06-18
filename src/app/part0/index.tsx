import {Row, Col} from 'antd';

export default function Part0() {
    return (
        <div>
            <div className="cover" style={{
                backgroundImage: `url( '/part0/cover.png' )`
            }}>
            </div>
            <div className="container mx-auto  pt-10">
                <Row className='h-[420px]'>
                    <Col span={12}>
                        <div className='relative'>
                            <img src="https://8.haory.top/j/j11/datanews//part0/1.png" className='absolute top-0 left-[10px] z-40' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/2.png" className='absolute top-0 left-[10px] z-30' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/3.png" className='absolute top-0 left-[10px] z-20' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/4.png" className='absolute top-0 left-[10px] z-10' width={960}
                                 height={540} alt=""/>
                            <img src="https://8.haory.top/j/j11/datanews//part0/5.png" className='absolute top-0 left-[10px] z-0' width={960}
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


        </div>
    );
}
