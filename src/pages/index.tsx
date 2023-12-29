import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../app/hooks';

import { deactiveteLoading } from '../app/slices/productListSlice';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';

export default function RootPage() {
    const dispatch = useAppDispatch();
    const productList = useAppSelector((state) => state.productList);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(deactiveteLoading());
        }, 3000);
        return () => clearTimeout(timeout);
    }, [dispatch])

    if (productList.isLoading) {
        return (
            <Main>
                <p>Loading ...</p>
            </Main>
        );
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