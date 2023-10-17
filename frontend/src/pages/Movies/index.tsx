import { useState, useEffect, useCallback } from "react";
import "./styles.css";
import Select from "react-select";
import { Genrer } from "../../types/genres";
import { resquestBackend } from "../../util/requests";
import { AxiosRequestConfig } from "axios";
import { Moviess } from "../../types/movies";
import { stringify } from "querystring";
import MovieList from "../../components/MovieList";
import Pagination from "../../components/Pagination";
import { SpringPage } from "../../types/spring";

const Movies = () => {
  //Custom Styles do Select para mudar diretamente o style do Style
  const customStyles = {
    singleValue: (provided: any) => ({
      ...provided,
      color: "#e1e1e1",
    }),
  };

  const [selectCategories, setSelectCategories] = useState<Genrer[]>([]);
  const [selectMovies, setSelectMovies] = useState<SpringPage<Moviess>>();
  const [selectedGenrer, setSelectedGenrer] = useState<Number>(1);

  const getGenrer = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      url: "/genres",
      withCredentials: true,
    };
    resquestBackend(config).then((response) => {
      setSelectCategories(response.data);
    });
  }, []);

  const getMovies = useCallback(
    (pageNumber: number) => {
      const params: AxiosRequestConfig = {
        method: "GET",
        url: `/movies`,
        withCredentials: true,
        params: {
          genreId: selectedGenrer,
          page: pageNumber,
          size: 4,
        },
      };
      resquestBackend(params).then((response) => {
        setSelectMovies(response.data);
      });
    },
    [selectedGenrer]
  );

  useEffect(() => {
    getMovies(0);
    getGenrer();
  }, [getMovies, getGenrer]);
  return (
    <>
      <div className="movies-container">
        <div className="movies-info-container">
          <div className="crud-select base-card">
            <Select
              styles={customStyles}
              onChange={(x) => {
                setSelectedGenrer(x?.id as number);
                getMovies(0);
              }}
              options={selectCategories}
              defaultValue={{ id: 1, name: "Comédia" }}
              getOptionLabel={(genrer: Genrer) => genrer.name}
              getOptionValue={(genrer: Genrer) => String(genrer.id)}
              isClearable
              classNamePrefix="prefix-crud-select"
            />
          </div>
          <div className="row">
            {selectMovies?.content.map((movie) => {
              return <MovieList movie={movie} key={movie.id} />;
            })}
          </div>
        </div>
        <div className="pagination-container">
          <Pagination
            pageCount={selectMovies ? selectMovies.totalPages : 0}
            range={3}
            onChange={getMovies}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
