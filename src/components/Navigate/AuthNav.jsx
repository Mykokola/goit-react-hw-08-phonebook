import { useAuth } from 'hooks/index';
import { logOut } from 'redux/auth/operation';
import { useDispatch } from 'react-redux';
import { AuthBlock } from './Nav.styled';
import { NavLink } from 'react-router-dom';
export const AuthNav = () => {
  const { user } = useAuth();
  const {email} = user
    const dispatch = useDispatch()
  return (
    <>
      <NavLink to="/contacts">contacts </NavLink>
      <AuthBlock>
        <p>{email}</p>
        <button onClick={() => dispatch(logOut())}>Logout</button>
      </AuthBlock>
    </>
  );
};
