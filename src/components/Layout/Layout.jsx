import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useAuth } from "hooks/index";
import { UserNav } from "components/Navigate/UserNav";
import { AuthNav } from "components/Navigate/AuthNav";
export const Layout = () => {
    const {isLoggedIn} = useAuth()
    return(
        <>
        <header>
            <nav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn?<AuthNav/> :<UserNav/> }
        </nav>
        </header>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
        </>
    )
}