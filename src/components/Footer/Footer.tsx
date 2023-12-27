import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-wrapper">
                <p className="footer__copyright">
                    Kanstantsin Hrytsuk © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}