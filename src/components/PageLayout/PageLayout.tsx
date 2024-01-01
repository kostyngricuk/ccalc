import { ReactNode } from 'react';

import NavMenu from '../NavMenu/NavMenu';
import Copyright from '../Copyright/Copyright';
import Logo from '../Logo/Logo';

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
                        <Logo />
                        <NavMenu />
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
                        <Copyright />
                    </div>
                </footer>
            }
        </>
    );
  }