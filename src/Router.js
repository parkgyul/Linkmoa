import {
  HashRouter as Router,
  Redirect,
  Route,
  Routes,
} from "react-router-dom";
import Navigation from "./Navigation";
import Login from "./Login";
const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/" element={<Home />}></Route>
          </>
        ) : (
          <Route exact path="/" element={<Login />}></Route>
        )}
        <Redirect from="*" to="/" />
      </Routes>
    </Router>
  );
};

export default AppRouter;
