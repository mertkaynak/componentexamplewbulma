import React from "react";

const Test = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={image}
            style={{
              maxHeight: "250px",
            }}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default Test;
