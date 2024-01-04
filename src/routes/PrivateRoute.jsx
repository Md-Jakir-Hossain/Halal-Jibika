import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "../components/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase/firebase.init";

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoutes;
