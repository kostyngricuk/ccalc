import Container from '../UI/Container/Container';
import Copyright from '../Copyright/Copyright';

import { StyledFooter } from './StyledFooter';

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <Copyright />
            </Container>
        </StyledFooter>
    );
}