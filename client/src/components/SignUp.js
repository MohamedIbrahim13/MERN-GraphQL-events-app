import { useRef } from "react";
import { Redirect } from "react-router-dom";
import { useFirebase } from "react-redux-firebase";

const SignUp = (props) => {
  const email = useRef();
  const password = useRef();

  const firebase = useFirebase();

  const { userId, errMessage } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .createUser(
        { email: email.current.value, password: password.current.value },
        {
          email: email.current.value,
          username: email.current.value,
          join_time: firebase.firestore.FieldValue.serverTimestamp(),
        }
      )
      .catch((err) => console.log(err.message));
  };

  //console.log(userId,errMessage);

  if (userId) return <Redirect to="/" />;
  return (
    <main className="form-signin text-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center h3 mb-3 fw-normal">Please Register</h1>
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
          Register
        </button>
        <div className="text-center mt-3 text-danger">
          {errMessage ? <p>{errMessage}</p> : null}
        </div>
        <p className="text-center mt-5 mb-3 text-muted">&copy; 2020-2021</p>
      </form>
    </main>
  );
};

export default SignUp;
