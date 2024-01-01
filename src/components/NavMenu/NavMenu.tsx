import { NavLink } from "react-router-dom";

export default function NavMenu() {
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to={`/`}>Home</NavLink></li>
                <li><NavLink to={`/about`}>About</NavLink></li>
                <li><NavLink to={`/contacts`}>Contacts</NavLink></li>
            </ul>
        </nav>
    );
}