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
    { key: 'planet-moon', name: 'Renew', type: 'fad' },
    { key: 'qrcode', name: 'Trade', type: 'fad' },
    { key: 'window', name: 'Lend', type: 'fad' },
    { key: 'cubes', name: 'Borrow', type: 'far' },
    { key: 'layer-plus', name: 'Earn', type: 'fad' },
    { key: 'solar-system', name: 'Protocol', type: 'fad' },
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
            <Container spacing={['verticalXXXLrg']} style={{ fontFamily: 'CalibreLight' }}>
                <SectionTitle
                    title="About ₿NS"
                    preTitle=""
                    subTitle="BNS One is all-in-one platform for BNS investors to be able to register, renew, manage, make/accept offers on their BNS names and much more, all in one place."
                    style={{ fontWeight: '300' }}
                />
                <section className={about.content}>
                    <div className={about.image}>
                        <img src="/img/bnsimg.jpg" alt="Bitcoin" />
                        {/* <Image src="/img/family-photo.jpg" width={Permissionless & Non-Custodial600} height={800}/> */}
                    </div>
                    <div className={about.copy}>
                        <CopyBlock
                            title="COMMUNITY DRIVEN"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={['fat', 'ear-listen']}
                            copy="In the BNS Community there are people who have 100’s and even 1000’s of BNS names, but difficult to determine how many holders we have. We do however know roughly how many BNS names individuals hold based on a Poll that was done on X on 18th July 2023 "
                        />
                        <div className="">
                            <BadgesBlock
                                title="PROTOCOL SECURITY"
                                containerClass={about.container}
                                list={methods}
                                fullContainer="fullContainer"
                                block="methods"
                                icon="fingerprint"
                                copy="We are committed to establishing a platform that offers security and benefits to all users. ₿NS operates on the foundation of Bitcoin layer-2 and is safeguarded by Bitcoin layer-1, thereby guaranteeing the protection of both the assets and the associated passive income."
                                headerIcon={about.icon}
                            />
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}
