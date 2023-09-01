import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/index';
import { logOut } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
export const AuthNav = () => {
  const { email } = useAuth();
    const dispatch = useDispatch()
  return (
    <>
      <div>
        <p>{email}</p>
        <button onClick={() => dispatch(logOut())}>Logout</button>
      </div>
      <NavLink to="/contacts">contacts </NavLink>
    </>
  );
};
