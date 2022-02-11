import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Outlet {...rest} render={props => {
        
        if (Object.keys(props.user).length === 0) {
            // not logged in so redirect to login page with the return url
            console.log("1.alan")
            return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(props.user.role) === -1) {
            // role not authorised so redirect to home page
            console.log("2.alan")
            return <Navigate to={{ pathname: '/'}} />
        }
        console.log("3.alan")
        // authorised so return component
        return <Component {...props} />
    }} />
)