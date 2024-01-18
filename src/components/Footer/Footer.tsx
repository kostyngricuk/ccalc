import Container from '../UI/Container/Container';
import Copyright from '../Copyright/Copyright';

import './Footer.scss';

export default function Footer() {
    return (
        <footer className="Footer">
            <Container className='Footer__wrapper'>
                <Copyright />
            </Container>
        </footer>
    );
}