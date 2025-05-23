import { useEffect, useState } from "react";
import profilePic from "../../assets/portrait-laura-haas.jpg";
import "./presentation.css";
import Button from "../../components/Button/Button";

import { HashLink as Link } from 'react-router-hash-link';


const Presentation = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [setIsMobile])


    return (
        <section id="presentation">
            <div className="section-content">
                <div id="presentation__title">
                    <h1>Développeuse front-end {isMobile && <br/>}JavaScript / React</h1>
                    <h2>Qui suis-je ?</h2>
                </div>
                
                <div id="presentation__content">
                    <img src={profilePic} alt="" />
                    <div id="presentation__text">
                        <p>
                            Passionnée par la technologie depuis l'enfance, je termine en 2025 un parcours de reconversion pour devenir développeuse. Un vrai challenge, après 10&nbsp;ans à accompagner des entreprises dans leur communication et leur marketing !
                        </p>
                        <p>
                            J'aime la dimension technique et la logique sous-jacente des projets informatiques, mais aussi le lien créé avec les utilisateurs : ce sont eux qui sont au cœur de nos réflexions et de nos objectifs.
                        </p>
                        <p>
                            Mon parcours m'a conduite à conjuguer créativité et technique. Soucieuse de l'accessibilité de mes réalisations, je souhaite mettre mes compétences au service d'une équipe dynamique et de projets porteurs de sens.
                        </p>
                        <p>
                            Mon objectif aujourd'hui : progresser continuellement pour vous aider à anticiper les enjeux technologiques de demain !
                        </p>
                        <div id="presentation__button-container">
                            <Button
                                as={Link}
                                to="/#contact-section"
                                text="Prenons contact"
                            />
                            <Button
                                as={Link}
                                to="/#skills-section"
                                text="Mes compétences"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presentation