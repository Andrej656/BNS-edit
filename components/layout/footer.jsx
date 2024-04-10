import React, { useState, useEffect } from 'react';
import Container from '../structure/container';
import css from '../../styles/structure/footer.module.scss'; // Make sure the correct CSS module is imported
import content from '../../content/footer.json';
import settings from '../../content/_settings.json';

export default function Footer() {
    const [gitHubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch(settings.portfolio.repo_api)
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <footer className={css.container}> {/* Make sure correct CSS class is used here */}
            <Container spacing={['verticalXXLrg', 'bottomLrg']}>
                <section className={css.sections}>
                    <ul className={css.thanks}>
                        <li>
                            <h4>Acknowledgments</h4>
                        </li>
                        {content.acknowledgments.map(({ person, link, note }, index) => {
                            return (
                                <li key={index}>
                                    <a href={link} rel="noreferrer" target="_blank">
                                        {person}
                                    </a>
                                    <p>{note}</p>
                                </li>
                            );
                        })}
                    </ul>
                   
                    <ul className={css.socialList}> {/* Make sure correct CSS class is used here */}
                        <li>
                            <h4></h4>
                        </li>
                        {content.social.map(({ url, icon }, index) => {
                            return (
                                <li key={index}>
                                    <a href={url} rel="noreferrer" target="_blank">
                                        <i className={`fab fa-${icon}`}style={{ height: '4rem', width: '4rem' }} /> {/* Make sure Font Awesome class is used here */}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <section className={css.github}>
                    <a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
                        <h5>{settings.portfolio.forkthis}</h5>
                    </a>
                </section>
            </Container>
            <canvas id="gradient-canvas" className={''} data-transition-in></canvas>
        </footer>
    );
}
