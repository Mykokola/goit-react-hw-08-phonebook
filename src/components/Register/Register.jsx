import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerAuth } from 'redux/auth/operation';
export function Register() {
  const dispatch = useDispatch()
    const {register,handleSubmit} = useForm({
        name:'',
        email:'',
        password:'',
        mode: 'onTouched'
    })
    const submitRegForm = data => {
        const {name,email,password} = data
      dispatch(registerAuth({
        name,
        email,
        password
      }))
    }
  return (
    <>
      <form onSubmit={handleSubmit(submitRegForm)}>
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            name='name'
            className="form-control"
            {...register('name')}
          />
        </div>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
