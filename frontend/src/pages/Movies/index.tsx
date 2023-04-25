import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import "./styles.css";
import { resquestBackend } from "../../util/requests";
import { Moviess } from "../../types/movies";
import { SpringPage } from "../../util/vendor/spring";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <>
      <div className="movies-container">
        <div className="movies-info-container">
          <div>
            <h1>Tela listagem de filmes</h1>
          </div>
          <div>
            <Link to="/movies/1">
              <p>Acessar/movies/1</p>
            </Link>
            <Link to="/movies/2">
              <p>Acessar/movies/2</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
