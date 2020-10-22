import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";

const MyMeme = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const openImage = (index) => {
    setModalIsOpen(!modalIsOpen);
    setCurrentIndex(index);
    setCurrentImage(props.arraymeme[index].src)
  };

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
                onClick={() => openImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal className="meme-gen-modal" isOpen={modalIsOpen}>
        <ModalHeader toggle={toggle}>Make-a-Meme</ModalHeader>
        <ModalBody>
          <div className="image-holder">
          <img
           className="image-con"
            alt={currentIndex}
            src={currentImage}
            role="presentation"

            
          />
          </div>
          <div className="meme-form">
            <FormGroup></FormGroup>
            <button
              onClick={() => console.log("1")}
              className="btn btn-primary"
            >
              Download to Device
            </button>
            <button
              onClick={() => console.log("2")}
              className="btn btn-primary"
            >
              Upload to Swarm
            </button>
          </div>
        </ModalBody>
      </Modal>
      <button
              onClick={() => console.log(props.arraymeme[currentImage].src, currentImage)}
              className="btn btn-primary"
            >
              Download to Device
            </button>
    </div>
  );
};

export default MyMeme;
