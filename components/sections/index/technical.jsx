// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

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
					title="Innovative design"
					preTitle=""
					subTitle="Powered by ₿itcoin Network"
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="DECENTRALIZED PEG"
							icon={[ 'fat', 'chart-network' ]}
							copy="At its heart, ₿lockCity presents a pioneering approach. It enables digital assets to be pegged to Bitcoin's foundational layer-1 (BTC) or layer-2 (STX). This dual capability ensures that assets benefit from the unparalleled security of Bitcoin while also leveraging the flexibility and efficiency of the Stacks layer, ensuring transaction finality through the Bitcoin network.
"
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="ON-CHAIN IV (INTRISTIC VALUE)" 
							copy="Digital assets on our protocol are endowed with a decentralized market value signified by on-chain IV that is beyond manipulation by any user or the protocol itself, governed solely by Bitcoin layer-1. This mechanism offers a distinct advantage: as the value of Bitcoin increases, so does the market value & borrowing power of your digital asset."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="ON-CHAIN INTRISTIC VALUE" 
							copy="₿lockCity is solidifying its position as the decentralized layer for online passive income. By merely holding assets enables you to sustain a long Bitcoin position and conveniently hedge it by borrowing against your asset at a 0% interest rate. We are poised to set a new standard in Bitcoin asset utilization and yield generation."
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
	{ key: 'photoshop', 	name: 'Digital Assets', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Design', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'Clarity', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Community', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Safe', 			type: 'fas' },
	{ key: 'list-music',	name: 'Transactions', 			type: 'fas' },
	{ key: 'aftereffects',	name: 'NFT', 		type: 'devicon' },
	{ key: 'premierepro',	name: 'Ordinals', 		type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'Stacks', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'Clarity', 			type: 'devicon' },
]