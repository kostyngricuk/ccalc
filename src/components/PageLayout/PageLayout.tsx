import { ReactNode } from 'react';

import { NavLink } from 'react-router-dom';

import { LogoSVG } from '../../assets/icons';

import './PageLayout.scss';

type PageLayoutProps = {
    isOnlyContent?: boolean,
    children: ReactNode
}

export default function PageLayout({
    isOnlyContent = false,
    children
}: PageLayoutProps) {
    return (
        <>
            {
                !isOnlyContent &&
                <header className='header'>
                    <div className='container header-wrapper'>
                        <NavLink to='/' aria-label='Go home' className='header__logo'>
                            <img src={LogoSVG} alt="Logo" />
                        </NavLink>
                        <nav className="header__menu">
                            <ul>
                                <li><NavLink to={`/`}>Home</NavLink></li>
                                <li><NavLink to={`/about`}>About</NavLink></li>
                                <li><NavLink to={`/contacts`}>Contacts</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            }
            <main className='main'>
                <div className="container main-wrapper">
                    { children }
                </div>
            </main>
            {
                !isOnlyContent &&
                <footer className="footer">
                    <div className="container footer-wrapper">
                        <p className="footer__copyright">
                            Kanstantsin Hrytsuk © {new Date().getFullYear()}
                        </p>
                    </div>
                </footer>
            }
        </>
    );
}