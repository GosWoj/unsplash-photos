import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Photo = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <article className="photo">
      <a href={regular} className="photo">
        <img src={regular} alt={alt_description} />
      </a>
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>
            {likes} <FaRegHeart className="icon-like" />
          </p>
        </div>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
