import SigninLink from "./SigninLink";
import SignoutLink from "./SignoutLink";
import {Link} from 'react-router-dom';

const usersQuery = {path: "users"};
const Navbar = ({ userId,profile }) => {
  const links = userId ? <SigninLink profile={profile} /> : <SignoutLink />;
  //console.log(profile);
  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link className="link-secondary" to="#">
                Subscribe
              </Link>
            </div>
            <div className="col-4 text-center">
              <Link className="blog-header-logo text-dark" to="/">
                Easy Booking
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <Link className="link-secondary" to="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </Link>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">{links}</nav>
        </div>
      </div>
    </>
  );
};



export default Navbar;
