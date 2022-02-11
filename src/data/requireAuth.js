import { Navigate, Outlet, useLocation } from "react-router-dom";
import React from 'react'

export default function RequireAuth({ isAuth }) {
    let location = useLocation();
    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    else{
        console.log("this.props.children.name")
        return <Outlet />;

    }
}
