import { useRef } from "react";
import { useFirebase } from "react-redux-firebase";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const firebase = useFirebase();
  const { userId, errMessage } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .login({ email: email.current.value, password: password.current.value })
      .catch((err) => console.log(err.message));
  };
  if (userId) return <Redirect to="/" />;
  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center h3 mb-3 fw-normal">Please Login</h1>
        <label htmlFor="inputEmail" className="visually-hidden">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          ref={email}
          className="form-control"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          ref={password}
          className="form-control"
          placeholder="Password"
          required
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <div className="text-center mt-3 text-danger">
          {errMessage ? <p>{errMessage}</p> : null}
        </div>
        <p className="text-center mt-5 mb-3 text-muted">&copy; 2020-2021</p>
      </form>
    </main>
  );
};

export default Login;
