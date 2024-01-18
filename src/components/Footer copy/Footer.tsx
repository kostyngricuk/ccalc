import Container from '../UI/Container/Container';
import Copyright from '../Copyright/Copyright';

export default function Footer() {
    return (
        <footer className="footer">
            <Container className='footer-wrapper'>
                <Copyright />
            </Container>
        </footer>
    );
}