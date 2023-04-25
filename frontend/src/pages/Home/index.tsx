import "./styles.css";
import { ReactComponent as MovieFlix } from "../../assets/images/movieflix-front.svg";

import Login from "./Login";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="image-home">
          <div className="text-home">
            <h1>Avalie Filmes</h1>
            <p>Diga o que voce achou do seu filme favorito</p>
          </div>
          <div className="image-container">
            <MovieFlix />
          </div>
        </div>
        <Login />
      </div>
    </>
  );
};

export default Home;
