import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useAuth } from "hooks/index";
import { NavLink } from 'react-router-dom';
import { UserNav } from "components/Navigate/UserNav";
import { AuthNav } from "components/Navigate/AuthNav";
import { Header,HeaderNav } from "./Layout.styled";

export const Layout = () => {
    const {isLoggedIn} = useAuth()
    return(
        <>
        <Header>
            <HeaderNav>
          <NavLink to="/">Home</NavLink>
          {isLoggedIn?<AuthNav/> :<UserNav/> }
        </HeaderNav>
        </Header>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
        </>
    )
}