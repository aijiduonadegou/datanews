"use client";
import {useEffect, useState} from "react";


export default function Part13() {

    // 图片路径数组（根据实际项目调整路径）
    const images = [
        'https://8.haory.top/j/j11/datanews/part3/cover1.png',
        'https://8.haory.top/j/j11/datanews/part3/cover2.png',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

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
                    在婚育之后，STEM女性面临“职业向下流动”的风险，这一威胁并非源于其技术能力的不足，而是生育与技术岗位结构性要求之间的冲突。技术岗位通常具有高度的连续性、协作密集性、人员稳定性以及与经济效益紧密挂钩的特征。然而，女性的生育行为会不可避免地导致工作中断、协作退出以及影响产出，这使得她们与技术岗位原有的运作逻辑不再契合。
                </p>
                <p className={'paragraph'}>
                    在婚育之后，STEM女性面临“职业向下流动”的风险，这一威胁并非源于其技术能力的不足，而是生育与技术岗位结构性要求之间的冲突。技术岗位通常具有高度的连续性、协作密集性、人员稳定性以及与经济效益紧密挂钩的特征。然而，女性的生育行为会不可避免地导致工作中断、协作退出以及影响产出，这使得她们与技术岗位原有的运作逻辑不再契合。
                </p>

                <p className={'paragraph'}>
                    赵琳就是按此方式被聘入的女性之一，刚毕业就进入沈阳工业泵制造有限公司的她表示：“很幸运，但也很痛苦”。目前赵琳所在的项目只有她一位女性，男女比例为11:1，她的生理和生活需求被视为一种“额外成本”——企业需要为她单独设置卫生间、洗浴间及配套的生活工作设施，这使她更易被贴上“特殊”和“麻烦”的标签。
                </p>

                <p className={'paragraph'}>
                    工程本身强调体力劳动和高度流动性，被默认是更适合男性的工作环境，因此男性相对女性是“性价比高的用工成本”，是好用的牛马；而女性则被视作“额外且可压缩的支出”，在资源有限、追求效率最大化的环境中会被排除。所以工程领域的采掘/冶炼以及石油/石化成为男性求职者竞争优势最高的两个行业。
                </p>

            </div>
        </div>
    );
};
