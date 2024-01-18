import { ReactNode } from 'react';

import Container from '../UI/Container/Container';

import './Main.scss';

type PageLayoutProps = {
    children: ReactNode
}

export default function Main({
    children
}: PageLayoutProps) {
    return (
        <main className="Main">
            <Container className='Main__wrapper'>
                { children }
            </Container>
        </main>
    );
}