import { Link } from "react-router-dom";

const SignoutLink = () => {
  return (
    <>
      <Link className="p-2 link-secondary" to="/register">
        Register
      </Link>
      <Link className="p-2 link-secondary" to="/login">
        Login
      </Link>
    </>
  );
};

export default SignoutLink;
