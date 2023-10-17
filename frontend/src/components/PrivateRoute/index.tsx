import { Navigate, Outlet } from "react-router-dom";
import { Role, isAuthhenticated } from "../../util/requests";

export type Props = {
  role?: Role[];
};

const PrivateRoute = ({ role = [] }: Props) => {
  return isAuthhenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
