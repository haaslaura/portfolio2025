import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import Menu from '../../components/Menu/Menu'

import logo from '../../assets/logo-site-laura-haas.svg'
import './header.css'


const Header = () => {

    const [opening, setOpening] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768)
        }
        window.addEventListener("resize", handleResize);
        // Cleaning the event listener
        return () => {
          window.removeEventListener("resize", handleResize)
        }
      }, [setIsMobile])

    return (
        <header>
            <Link to="/">
                <img
                    src={logo}
                    alt="Origami bleu et violet représentant une grue"
                    title="Laura Haas, développeuse"
                />
            </Link>
            {
                !isMobile &&
                    <div>
                        <p>Laura Haas</p>
                        <p>Développeuse JavaScript React</p>
                    </div>
            }
            <Menu></Menu>
        </header>
    )
}

export default Header