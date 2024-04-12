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
    { key: 'planet-moon', name: 'HODL', type: 'fad' },
    { key: 'qrcode', name: 'Compound', type: 'fad' },
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
                    title={
                        <h2 style={{ background: 'linear-gradient(to right, orange, blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            About ₿lockCity
                        </h2>
                    }
                    preTitle=""
                    subTitle="A decentralized protocol that supercharges your digital assets by anchoring them to Bitcoin layer-1 BTC or layer-2 STX. This dual functionality empowers your assets to generate monthly passive income just by holding them in a non-custodial wallet. It harnesses the potential of decentralized finance through stacking pools, lending pools, layer-2 smart contracts and utilizing the Proof of Transfer (POX) consensus mechanism"
                    style={{ fontWeight: '300' }}
                />
                <section className={about.content}>
                    <div className={about.image}>
                        <img src="/img/bitcoin.jpg" alt="Bitcoin" />
                        {/* <Image src="/img/family-photo.jpg" width={Permissionless & Non-Custodial600} height={800}/> */}
                    </div>
                    <div className={about.copy}>
                        <CopyBlock
                            title="COMMUNITY DRIVEN"
                            containerClass={about.container}
                            iconClass={about.icon}
                            icon={['fat', 'ear-listen']}
                            copy="We are committed to inclusivity. Every creator and collector utilizing our platformaa, regardless of their portfolio size, has the opportunity to earn a share of the protocol's profits based on their total value locked (TVL) contribution"
                        />
                        <div className="">
                            <BadgesBlock
                                title="PROTOCOL SECURITY"
                                containerClass={about.container}
                                list={methods}
                                fullContainer="fullContainer"
                                block="methods"
                                icon="fingerprint"
                                copy="We are committed to establishing a platform that offers security and benefits to all users. ₿lockCity operates on the foundation of Bitcoin layer-2 and is safeguarded by Bitcoin layer-1, thereby guaranteeing the protection of both the assets and the associated passive income."
                                headerIcon={about.icon}
                            />
                        </div>
                    </div>
                </section>
            </Container>
        </Section>
    );
}
