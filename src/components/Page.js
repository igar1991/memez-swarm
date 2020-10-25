import React from "react";


const Page =(props)=> {
    return (
        <div className="content">
            {props.photos.map((image, index) => (
              <div className="image-holder" key={image.src}>
                <img
                  className="image-con"
                  alt={index}
                  src={image.src}
                  onClick={() => this.openImage(index)}
                  role="presentation"
                />
              </div>
            ))}
          </div>
    )

}

export default Page;