import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';
import { useCurrentUserQuery } from 'redux/contacts/operation';
export const useAuth = () => {
 let token =  localStorage.getItem('persist:auth') ? JSON.parse(localStorage.getItem('persist:auth')).token:null
  let isLoggedIn = useSelector(selectIsLoggedIn);
  const {data} =  useCurrentUserQuery()
  let isRefreshing = useSelector(selectIsRefreshing);
  let user = useSelector(selectUser);
   if(token&&token !== 'null'){
     isLoggedIn = true
     isRefreshing = false
     user = {...data}
 }
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
