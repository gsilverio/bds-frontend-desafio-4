import { Routes, Route } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Review from "./pages/Review";
import { myHistory } from "./util/history";
import PrivateRoute from "./components/PrivateRoute";

const Rotas = () => (
  <HistoryRouter history={myHistory}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute role={["ROLE_MEMBER"]} />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<Review />} />
      </Route>
    </Routes>
  </HistoryRouter>
);

export default Rotas;
