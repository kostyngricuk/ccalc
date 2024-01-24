import { ReactNode } from 'react';

import Container from '../UI/Container/Container';

import './Main.scss';

export default function Main({
    children
}: {
    children: ReactNode
}) {
    return (
        <main className="Main">
            <Container className='Main__wrapper'>
                { children }
            </Container>
        </main>
    );
}