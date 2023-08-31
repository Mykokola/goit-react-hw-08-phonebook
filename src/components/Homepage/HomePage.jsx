import { NavLink } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
      <h1>Home page</h1>
    </>
  );
};
