import React from 'react'
import { Outlet } from 'react-router-dom';
import {NavBar, Footer} from '@components';

function PublicLayout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default PublicLayout