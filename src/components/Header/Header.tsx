import { LogoSVG } from '../../assets/icons';

import './Header.css';

export default function Header() {
    return (
        <header className='header'>
            <div className='container header-wrapper'>
                <a href='/' aria-label='Go to home page' className='header__logo'>
                    <img src={LogoSVG} alt="Logo" />
                </a>
                <div className="header__menu">
                    <ul>
                        <li><a href='/'>Home Page</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}