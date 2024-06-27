import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '@components/Loader'

import Header from '@components/Header'
import Main from '@components/Main'
import Footer from '@components/Footer'

export default function Index() {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return isLoaded ? (
      <>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </>
    ) : <Loader />;
}
