import { useAppSelector, useAppDispatch } from './../../app/hooks';

import { deactiveteLoading } from '../../app/slices/productListSlice';

import './Main.css';
import { useEffect } from 'react';

export default function Main() {
    const dispatch = useAppDispatch();
    const productList = useAppSelector((state) => state.productList);

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(deactiveteLoading());
        }, 3000);
        return () => clearTimeout(timeout);
    }, [dispatch])

    return (
        <main className='main'>
            <div className="container main-wrapper">
                {
                    productList.isLoading ?
                        <p>Loading ...</p>
                    :
                        <p>Content</p>
                }
            </div>
        </main>
    );
}