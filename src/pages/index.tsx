import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../services/hooks';

import { deactiveteLoading } from '../services/slices/productListSlice';

import PageLayout from '../components/PageLayout/PageLayout';

import { Loader } from '../components/UI/Loader/Loader';

export default function Index() {
    const dispatch = useAppDispatch();
    const productList = useAppSelector((state) => state.productList);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(deactiveteLoading());
        }, 3000);
        return () => clearTimeout(timeout);
    }, [dispatch])

    return (
        <PageLayout isOnlyContent={productList.isLoading}>
            {
                productList.isLoading ?
                    <Loader />
                :
                    <Outlet />
            }
        </PageLayout>
    );
}