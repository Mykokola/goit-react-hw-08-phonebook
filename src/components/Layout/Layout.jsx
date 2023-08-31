import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
export const Layout = () => {
    return(
        <>
        <header>
            <nav>
          <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        </nav>
        </header>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
        </>
    )
}