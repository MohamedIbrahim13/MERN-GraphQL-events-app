import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
//import BookingPage from "./components/BookingPage";
import EventPage from "./components/EventPage";
import { useSelector } from "react-redux";
import { useFirebaseConnect, useFirestoreConnect } from "react-redux-firebase";

const usersQuery = { path: "users" };
const userQuery = {
  collection: "users",
};
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
 
});
function App() {
  useFirebaseConnect(() => [usersQuery]);
  useFirestoreConnect(() => [userQuery]);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const errMessage = useSelector((state) => state.auth.authError);
  const profile = useSelector((state) => state.firebase.profile);
  //console.log(profile);
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Navbar userId={userId} profile={profile} />
        <Switch>
          <Route exact path="/" render={() => <Home userId={userId} />} />
          <Route
            path="/register"
            render={() => <SignUp userId={userId} errMessage={errMessage} />}
          />
          <Route
            path="/login"
            render={() => <Login userId={userId} errMessage={errMessage} />}
          />
          <Route
            path="/events"
            render={() => <EventPage profile={profile} userId={userId} />}
          />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
