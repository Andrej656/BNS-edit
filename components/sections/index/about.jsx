// Core packages
import Image from 'next/image';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block';
import SectionGridBg from '../../blocks/section.grid.block';

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block';
import CopyBlock from '../../blocks/about.copy.block';

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

// Define methods array
const methods = [
    { key: 'planet-moon', name: 'User Research', type: 'fad' },
    { key: 'qrcode', name: 'Digital Strategy', type: 'fad' },
    { key: 'window', name: 'Design Systems', type: 'fad' },
    { key: 'cubes', name: 'Product Strategy', type: 'far' },
    { key: 'layer-plus', name: 'Brand Strategy', type: 'fad' },
    { key: 'solar-system', name: 'Operations', type: 'fad' },
];

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
    return (
        <Section classProp={about.section}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="About Us"
                    preTitle="BLOCKCITY"
                    subTitle="We're excited to announce our support for the upcoming Nakamoto release! You'll have the opportunity to lend your dormant Layer1 Bitcoins in a trustless way, earning yields in Layer1 Bitcoin that can potentially grow over time."
                />
                <section className={about.content}>
                    <div className={about.image}>
                        <img src="/img/bitcoin.jpg" alt="Bitcoin"/>
                        {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
                    </div>
                    <div className={about.copy}>
                        <CopyBlock 
                            title="INVEST SMART EARN PASSIVELY"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={['fat', 'ear-listen']}
                            copy="Lend your dormant Layer1 Bitcoin in our lending pool and earn yields, secure an instant loan at 0% interest using your ordinal and HODL to earn yields in Layer1 Bitcoin"
                        />
                        <div className="">
                            <BadgesBlock
                                title="HODL, EARN, LEARN AND BORROW" 
                                containerClass={about.container}
                                list={methods} 
                                fullContainer="fullContainer"
                                block="methods" 
                                icon="fingerprint"
                                copy="Secure an instant loan at 0% interest using your ordinal, lend your dormant Layer1 Bitcoin in our lending pool and earn yields and HODL to earn yields in Layer1 Bitcoin"
                                headerIcon={about.icon}
                            />
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}
