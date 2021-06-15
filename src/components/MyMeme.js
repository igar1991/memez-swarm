import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import bg from "../bg.png";
import axios from "axios";
import qs from "querystring";
import bee from "../bee.png";

const host = "https://api.fairos.io/v0/";

const getDirectory = async (payload) => {
  const { password } = payload;
  try {
    const openPod = await axios({
      baseURL: host,
      method: "POST",
      url: "pod/open",
      data: qs.stringify({ password: password, pod: "Fairdrive" }),
      withCredentials: true,
    });

    let data = { dir: "/" };

    const response = await axios({
      baseURL: host,
      method: "GET",
      url: "dir/ls",
      params: data,
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

const MyMeme = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);
  let blobFile;

  const [files, setFiles] = useState(null);

  async function loadDirectory() {
    try {
      const res = await getDirectory({
        directory: "/",
        password: props.password,
      });

      const arr = res.entries.filter((i) => i.content_type.includes("image"))
      setFiles(arr);
      console.log(arr);
      getDirectory({
        directory: "/",
        password: props.password,
      });
    } catch (e) {
      console.log(e);
    }
  }

  const filePreview = async (file) => {
    try {
      const downloadFile = await axios({
        baseURL: host,
        method: "POST",
        url: "file/download",
        data: qs.stringify({ file: file }),
        responseType: "blob",
        withCredentials: true,
      });
      return downloadFile.data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    loadDirectory();
    console.log(files)
  }, []);

  const toggle = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const openImage = async (index) => {
    if(files[index].name) {
      blobFile = window.URL.createObjectURL(
        await filePreview("/" + files[index].name)
      );
      setModalIsOpen(!modalIsOpen);
    setCurrentIndex(index);
    setCurrentImage(blobFile);
    }else {
      console.log("noname", files[index].name)
    }
    
  };

  return (
    <div>
      <div
        className="titleS"
        style={{ backgroundImage: `url(${bg})`, width: "100%" }}
      >
        <div className="titleDiv">
          <p>My meme bees</p>
        </div>
      </div>
      <div className="main-content">
        <div className="content">
          {files ? (
            files.map((image, index) => {
              return (
                <div className="image-holder" key={index}>
                  <img
                    className="image-con"
                    alt={index}
                    src={bee}
                    role="presentation"
                    onClick={() => openImage(index)}
                  />
                  <h3>Meme #{++index}</h3>
                </div>
              );
            })
          ) : (
            <h1 className="titleS">Loading bees...</h1>
          )}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>My-Meme</ModalHeader>
        <ModalBody>
          <img alt={currentIndex} src={currentImage} role="presentation" />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default MyMeme;
