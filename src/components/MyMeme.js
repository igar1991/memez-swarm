import React from "react";

const MyMeme = (props) => {

  return (
    <div>
      <div className="main-content">
        <div className="content">
          {props.arraymeme.map((image, index) => (
            <div className="image-holder" key={image.src}>
              <img
                className="image-con"
                alt={index}
                src={image.src}
                role="presentation"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMeme;
