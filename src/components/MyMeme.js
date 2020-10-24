import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";

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
    setCurrentImage(props.arraymeme[index].src);
  };

  const copyLink = (link) => {
    navigator.clipboard.writeText(link).then(
      function () {},
      function () {}
    );
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
      <Modal isOpen={modalIsOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>My-Meme</ModalHeader>
        <ModalBody>
          <img alt={currentIndex} src={currentImage} role="presentation" />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => props.deleteMeme(currentImage)}>
            Delete
          </Button>
          <Button color="success" onClick={() => copyLink(currentImage)}>
            Copy link
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyMeme;
