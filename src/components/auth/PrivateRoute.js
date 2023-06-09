import React from 'react'
// import { Route } from 'react-router-dom'
import Home from '../../pages/Home'

const PrivateRoute = ({component: Component}) => {
  return (
        <>
            <Home />
            <Component />   
        </>
  )
}

export default PrivateRoute