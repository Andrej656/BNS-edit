import FeaturedProject from '../../blocks/projects/featured';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block';

import css from '../../../styles/sections/projects/featured.module.scss';
import content from '../../../content/projects/featured.json';

export default function FeaturedProjects() {
    return (
        <Section classProp={css.hasBg}>
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title={
                        <h2 style={{ background: 'linear-gradient(to right, orange, blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Plan ₿
                        </h2>
                    }
                    preTitle=""
                    subTitle={
                        <h3 style={{ background: 'linear-gradient(to right, orange, blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Permissionless & Non-Custodial
                        </h3>
                    }
                />
                {content.map((data, index) => {
                    return (
                        <FeaturedProject content={data} index={index} key={index} />
                    );
                })}
            </Container>
            <div className={css.bgContainer}>
                <span className={css.orbitalBg}>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
                    <span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
                </span>
                <span className={css.afterGlowBg}></span>
            </div>
        </Section>
    );
}
