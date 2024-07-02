import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'features/Loader'

import Header from 'features/Header'
import Main from 'features/Main'
import Footer from 'features/Footer'

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
        <Header/>
        <Main>
          <Outlet />
        </Main>
        <Footer/>
      </>
    ) : <Loader />;
}
