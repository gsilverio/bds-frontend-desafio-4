import "./styles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="bg-primary navbar-container">
        <Link to="/">
          <h3>MovieFlix</h3>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
