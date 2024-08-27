import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function RefreshHandler({ setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (
        location.pathname === "/" ||
        location.pathname === "/login" ||
        location.pathname === "/signup"
      ) {
        navigate("/home", { replace: true });
      } else if (location.state && location.state.from) {
        navigate(location.state.from, { replace: true });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
}

export default RefreshHandler;
 