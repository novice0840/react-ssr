import * as React from "react";
import { TMDB_ORIGINAL_URL } from "../constants";
import { Link } from "react-router-dom";

function Modal({ movieDetail }) {
  const { title } = movieDetail;
  const releaseYear = movieDetail.release_date.split("-")[0];
  const bannerUrl = TMDB_ORIGINAL_URL + movieDetail.poster_path;
  const description = movieDetail.overview;
  const genres = movieDetail.genres.map(({ name }) => name).join(", ");

  return (
    <div className="modal-background active" id="modalBackground">
      <div className="modal">
        <button className="close-modal" id="closeModal">
          <Link to={"/"}>X</Link>
        </button>
        <div className="modal-container">
          <div className="modal-image">
            <img src={bannerUrl} />
          </div>
          <div className="modal-description">
            <h2>{title}</h2>
            <p className="category">
              {releaseYear} · {genres}
            </p>
            <p className="rate">
              <span>{Math.round(movieDetail.vote_average * 10) / 10}</span>
            </p>
            <hr />
            <p className="detail">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
