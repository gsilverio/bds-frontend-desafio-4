import { useContext, useEffect } from "react";
import {
  getTokenData,
  isAuthhenticated,
  removeAuthData,
} from "../../util/requests";
import "./styles.css";
import { Link } from "react-router-dom";
import { myHistory } from "../../util/history";
import { AuthContext } from "../../AuthContext";

const Navbar = () => {
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthhenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogOutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    //NAO HAVER NAVEGACAO DO LINK
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    myHistory.replace("/");
  };

  const handleLogInClick = (event: React.MouseEvent<HTMLAnchorElement>) => {};

  return (
    <>
      <div className="bg-primary navbar-container">
        <Link to="/">
          <h3>MovieFlix</h3>
        </Link>
        <div className="log-container">
          {authContextData.authenticated ? (
            <Link to="/" onClick={handleLogOutClick}>
              <h3>LOGOUT</h3>
            </Link>
          ) : (
            <Link to="/" onClick={handleLogInClick}>
              <h3>LOGIN</h3>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
