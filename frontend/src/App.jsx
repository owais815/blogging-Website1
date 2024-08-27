import { Route, Routes } from "react-router-dom";
// import { Navigate } from "react-router-dom";
import Login from "./userAuthentication/Login";
import Signup from "./userAuthentication/Signup";
import Home from "./userAuthentication/Home";
import { useState, useEffect } from "react";

// import RefreshHandler from "./userAuthentication/RefreshHandler";

import { useLocation } from "react-router-dom";

import Loader from "./adm/common/Loader";
import PageTitle from "./adm/components/PageTitle";
import Calendar from "./adm/pages/Calendar";
import Chart from "./adm/pages/Chart";
// import ECommerce from "./adm/pages/Dashboard/ECommerce";
import FormElements from "./adm/pages/Form/FormElements";
import FormLayout from "./adm/pages/Form/FormLayout";
import Profile from "./adm/pages/Profile";
import ProfileSettings from "./adm/pages/ProfileSettings";
import Tables from "./adm/pages/Tables";
import SignIn from "./adm/pages/Authentication/SignIn";
import SignUp from "./adm/pages/Authentication/SignUp";
import Alerts from "./adm/pages/UiElements/Alerts";
import Buttons from "./adm/pages/UiElements/Buttons";
import DefaultLayout from "./adm/layout/DefaultLayout";
import BlogEditor from "./adm/pages/Form/BlogEditor";
import Blogs from "./adm/pages/Blogs";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  // const PrivateRoute = ({ element }) => {
  //   return isAuthenticated ? element : <Navigate to="/login" />;
  // };

  return loading ? (
    <Loader />
  ) : (
    <div>
      {/* <RefreshHandler setIsAuthenticated={seetIsAuthenticated} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="dashboard"
            element={
              <>
                <PageTitle title="User Dashboard" />
                <Profile />
              </>
            }
          />

          <Route
            path="calendar"
            element={
              <>
                <PageTitle title="Calendar" />
                <Calendar />
              </>
            }
          />
          <Route
            path="profile"
            element={
              <>
                <PageTitle title="Profile" />
                <Profile />
              </>
            }
          />
          <Route
            path="forms/form-elements"
            element={
              <>
                <PageTitle title="Form Elements" />
                <FormElements />
              </>
            }
          />
          <Route
            path="forms/form-layout"
            element={
              <>
                <PageTitle title="Form Layout" />
                <FormLayout />
              </>
            }
          />
          <Route
            path="forms/BlogEditor"
            element={
              <>
                <PageTitle title="Blog Editor" />
                <BlogEditor />
              </>
            }
          />
          <Route
            path="tables"
            element={
              <>
                <PageTitle title="Tables" />
                <Tables />
              </>
            }
          />
          <Route
            path="ProfileSettings"
            element={
              <>
                <PageTitle title="Profile Settings" />
                <ProfileSettings />
              </>
            }
          />
          <Route
            path="chart"
            element={
              <>
                <PageTitle title="Basic Chart" />
                <Chart />
              </>
            }
          />
          <Route
            path="ui/alerts"
            element={
              <>
                <PageTitle title="Alerts" />
                <Alerts />
              </>
            }
          />
          <Route
            path="ui/buttons"
            element={
              <>
                <PageTitle title="Buttons" />
                <Buttons />
              </>
            }
          />
          <Route
            path="auth/signin"
            element={
              <>
                <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignIn />
              </>
            }
          />
          <Route
            path="auth/signup"
            element={
              <>
                <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <SignUp />
              </>
            }
          />
        </Route>

        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
