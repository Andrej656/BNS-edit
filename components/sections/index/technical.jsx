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

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
    return (
        <Section classProp={`${about.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Innovative Design"
                    
                    preTitle=""
                    subTitle="Powered by ₿itcoin Network"
                />
                <section className={`${about.content} ${about.container}`}>
                    <div className={about.copy}>
                        <CopyBlock
                            title="BNS Renewals"
                            icon={['fat', 'chart-network']}
                            copy=" Renewals (all TLD’s) – different TLD’s need to be renewed at different times for instance, new .btc names expire in 5 years, but .id names expire in 1 year/12 months.
                            Renewal alerts – alerts that can be sent to a users email address provided in the manage section. They could upload a CSV of all their names to get real-time alerts on their expiry.
                            "
                            iconClass={about.icon}
                            containerClass={about.container}
                        />
                        <BadgesBlock
                            title="BNS Managment System"
                            copy="The ability to create a profile, add your email for alerts & upload the BNS names you want to be alerted on their expiry,  add your BTC address to your BNS name (sending/receiving BTC currently only compatible with Leather), add your Nostr, update your Zonefile, Renewal, Transfer & Revoke options, all with slick UI/UX."
                            list={software}
                            block="software"
                            fullContainer="fullContainer"
                            icon="grid-2-plus"
                            containerClass={about.container}
                            headerIcon={about.icon}
                        />
                        <BadgesBlock
                            title="REST API"
                            copy="The BNS REST API simplifies the integration of BNS functionality into applications, allowing developers to interact with the BNS naming system programmatically. By providing a simple and intuitive interface, the API enables seamless interaction with BNS, unlocking its full potential for developers and users alike."
                            list={tech}
                            block="tech"
                            fullContainer="fullContainer"
                            icon="laptop-code"
                            containerClass={about.container}
                            headerIcon={about.icon}
                        />
                    </div>
                    <div className={`${about.image} ${about.technicalSvg}`}>
                        <Image src="/img/frame.svg" width={800} height={1300} alt="" />
                    </div>
                </section>
            </Container>
            {/* <SectionGridBg gridSize={4}/> */}
        </Section>
    )
}

const software = [
    { key: 'photoshop', name: 'Digital Assets', type: 'devicon' },
    { key: 'figma', name: 'Design', type: 'devicon' },
    { key: 'vscode', name: 'Clarity', type: 'devicon' },
    { key: 'mailbox', name: 'Community', type: 'fas' },
    { key: 'computer-mouse', name: 'Safe', type: 'fas' },
    { key: 'list-music', name: 'Transactions', type: 'fas' },
    { key: 'aftereffects', name: 'Renewals', type: 'devicon' },
    { key: 'premierepro', name: 'BNS', type: 'devicon' },
]

const tech = [
    { key: 'javascript', name: 'JavaScript', type: 'devicon' },
    { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
    { key: 'react', name: 'React', type: 'devicon' },
    { key: 'nextjs', name: 'NextJS', type: 'devicon' },
    { key: 'html5', name: 'HTML5', type: 'devicon' },
    { key: 'css3', name: 'CSS3', type: 'devicon' },
    { key: 'sass', name: 'SASS', type: 'devicon' },
    { key: 'git', name: 'Git', type: 'devicon' },
    { key: 'mysql', name: 'Stacks', type: 'devicon' },
    { key: 'mongodb', name: 'Clarity', type: 'devicon' },
]
