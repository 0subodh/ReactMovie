import React from "react";

const Hero = () => {
  const movieStyle = {
    backgroundImage: `url('https://www.omdbapi.com/src/poster.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div>
      <nav className="bg-dark py-3 text-danger fixed-top">
        <h2 className="container">Movie World</h2>
      </nav>
      <div
        className="hero d-flex justify-content-center align-items-center text-light"
        style={movieStyle}
      >
        <div>
          <div className="form-center">
            <div className="text-center text-light">
              <h1>Search Millions of Movies</h1>
              <p>
                Find about the movie more in details before watching them ...
              </p>
            </div>
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Movie by Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
