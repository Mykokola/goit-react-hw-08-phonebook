import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logInAuth } from 'redux/auth/operation';
import { currentUser } from 'redux/auth/operation';

export function Login() {
  
    const dispatch = useDispatch()

    const {register,handleSubmit} = useForm({
        email:'',
        password:'',
        mode: 'onTouched'
    })
    const handleLogin = data => {
        const {email,password} = data
        dispatch(logInAuth({
            email,
            password
        }))
    }
    return ( 
        <>
         <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
          name='email'
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register('email')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
          name='password'
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register('password')}
          />
        </div>
        {/* <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </>
    )
}