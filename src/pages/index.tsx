import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../components/Loader/Loader';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

export default function Index() {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 3000);
        return () => clearTimeout(timeout);
    }, [])

    if (!isLoaded) {
        return <Loader />;
    }

    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}