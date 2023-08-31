import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';

export function Register() {
    const {register,handleSubmit} = useForm({
        name:'',
        email:'',
        password:'',
        mode: 'onTouched'
    })
    const submitRegForm = data => {
        console.log(data)
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
  );
}
