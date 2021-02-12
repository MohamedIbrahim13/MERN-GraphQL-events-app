import { Link } from "react-router-dom";

import { useFirebase } from 'react-redux-firebase';

const SigninLink = ({profile}) => {
  const firebase = useFirebase();
  return (
    <>
      <Link className="p-2 link-secondary" to="/events">
        Events
      </Link>
      <Link className="p-2 link-secondary" onClick={firebase.logout}>
        Logout
      </Link>
    </>
  );
};

export default SigninLink;
