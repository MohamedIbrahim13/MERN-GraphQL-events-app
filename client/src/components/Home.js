import { useSelector } from "react-redux";
import { Link ,Redirect } from "react-router-dom";
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";

const usersQuery = {path: "users"};

const Home = ({userId}) => {
  //console.log('ID',userId);
  if(!userId) return <Redirect to='/login'/>
  return (
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">
            Title of a longer featured blog post
          </h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
          <p className="lead mb-0">
            <Link to="#" className="text-white fw-bold">
              Continue reading...
            </Link>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 font-italic border-bottom">
            From the Firehose
          </h3>

          <article className="blog-post">
            <h2 className="blog-post-title">Sample blog post</h2>
            <p className="blog-post-meta">
              January 1, 2014 by <Link to="#">Mark</Link>
            </p>

            <p>
              This blog post shows a few different types of content that’s
              supported and styled with Bootstrap. Basic typography, images, and
              code are all supported.
            </p>
            <hr />
            <p>
              Cum sociis natoque penatibus et magnis{" "}
              <Link to="#">dis parturient montes</Link>, nascetur ridiculus mus.
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
              vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
              consectetur purus sit amet fermentum.
            </p>
            <blockquote>
              <p>
                Curabitur blandit tempus porttitor.{" "}
                <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
              </p>
            </blockquote>
            <p>
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
              mattis consectetur purus sit amet fermentum. Aenean lacinia
              bibendum nulla sed consectetur.
            </p>
            <h2>Heading</h2>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
              ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </article>

          <nav className="blog-pagination" aria-label="Pagination">
            <Link className="btn btn-outline-primary" to="#">
              Older
            </Link>
            <Link
              className="btn btn-outline-secondary disabled"
              to="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Newer
            </Link>
          </nav>
        </div>

        <div className="col-md-4">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">
              Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
              mattis consectetur purus sit amet fermentum. Aenean lacinia
              bibendum nulla sed consectetur.
            </p>
          </div>

          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li>
                <Link to="#">GitHub</Link>
              </li>
              <li>
                <Link to="#">Twitter</Link>
              </li>
              <li>
                <Link to="#">Facebook</Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
