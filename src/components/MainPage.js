import React from "react";
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";
import "../App.css";

const photos = [
  { src: "./images/dank.png" },
  { src: "./images/band.png" },
  { src: "./images/Always-Has-Been.png" },
  { src: "./images/American-Chopper-Argument.jpg" },
  { src: "./images/Batman-Slapping-Robin.jpg" },
  { src: "./images/Bernie-I-Am-Once-Again-Asking-For-Your-Support.jpg" },
  { src: "./images/Blank-Nut-Button.jpg" },
  { src: "./images/Change-My-Mind.jpg" },
  { src: "./images/Disaster-Girl.jpg" },
  { src: "./images/Distracted-Boyfriend.jpg" },
  { src: "./images/Drake-Hotline-Bling.jpg" },
  { src: "./images/Epic-Handshake.jpg" },
  { src: "./images/Evil-Toddler.jpg" },
  { src: "./images/Hide-the-Pain-Harold.jpg" },
  { src: "./images/Is-This-A-Pigeon.jpg" },
  { src: "./images/Left-Exit-12-Off-Ramp.jpg" },
  { src: "./images/Mocking-Spongebob.jpg" },
  { src: "./images/Monkey-Puppet.jpg" },
  { src: "./images/One-Does-Not-Simply.jpg" },
  { src: "./images/Roll-Safe-Think-About-It.jpg" },
  { src: "./images/Running-Away-Balloon.jpg" },
  { src: "./images/Sad-Pablo-Escobar.jpg" },
  { src: "./images/Spongebob-Ight-Imma-Head-Out.jpg" },
  { src: "./images/Two-Buttons.jpg" },
  { src: "./images/UNO-Draw-25-Cards.jpg" },
  { src: "./images/Unsettled-Tom.jpg" },
  { src: "./images/Waiting-Skeleton.jpg" },
  { src: "./images/Who-Killed-Hannibal.jpg" },
  { src: "./images/Woman-Yelling-At-Cat.jpg" },
  { src: "./images/X-X-Everywhere.jpg" }
];

const initialState = {
  toptext: "",
  bottomtext: "",
  isTopDragging: false,
  isBottomDragging: false,
  topY: "10%",
  topX: "50%",
  bottomX: "50%",
  bottomY: "90%",
};

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImage: 0,
      modalIsOpen: false,
      currentImagebase64: null,
      ...initialState,
    };
  }

  openImage = (index) => {
    const image = photos[index];
    const base_image = new Image();
    base_image.src = image.src;
    const base64 = this.getBase64Image(base_image);
    this.setState((prevState) => ({
      currentImage: index,
      modalIsOpen: !prevState.modalIsOpen,
      currentImagebase64: base64,
      ...initialState,
    }));
  };

  toggle = () => {
    this.setState((prevState) => ({
      modalIsOpen: !prevState.modalIsOpen,
    }));
  };

  changeText = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  getStateObj = (e, type) => {
    let rect = this.imageRef.getBoundingClientRect();
    const xOffset = e.clientX - rect.left;
    const yOffset = e.clientY - rect.top;
    let stateObj = {};
    if (type === "bottom") {
      stateObj = {
        isBottomDragging: true,
        isTopDragging: false,
        bottomX: `${xOffset}px`,
        bottomY: `${yOffset}px`,
      };
    } else if (type === "top") {
      stateObj = {
        isTopDragging: true,
        isBottomDragging: false,
        topX: `${xOffset}px`,
        topY: `${yOffset}px`,
      };
    }
    return stateObj;
  };

  handleMouseDown = (e, type) => {
    const stateObj = this.getStateObj(e, type);
    document.addEventListener("mousemove", (event) =>
      this.handleMouseMove(event, type)
    );
    this.setState({
      ...stateObj,
    });
  };

  handleMouseMove = (e, type) => {
    if (this.state.isTopDragging || this.state.isBottomDragging) {
      let stateObj = {};
      if (type === "bottom" && this.state.isBottomDragging) {
        stateObj = this.getStateObj(e, type);
      } else if (type === "top" && this.state.isTopDragging) {
        stateObj = this.getStateObj(e, type);
      }
      this.setState({
        ...stateObj,
      });
    }
  };

  handleMouseUp = (event) => {
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.setState({
      isTopDragging: false,
      isBottomDragging: false,
    });
  };

  convertSvgToImage = () => {
    const svg = this.svgRef;
    let svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "canvas");
    const svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)))
    );
    img.onload = function () {
      canvas.getContext("2d").drawImage(img, 0, 0);
      const canvasdata = canvas.toDataURL("image/png");
      const a = document.createElement("a");
      a.download = "meme.png";
      a.href = canvasdata;
      document.body.appendChild(a);
      a.click();
    };
  };

  uploadToSwarm = ()=>{
    const svg = this.svgRef;
    let svgData = new XMLSerializer().serializeToString(svg);
    //console.log(svgData);
    const formData = new FormData();
    //formData.append("meme.jpg", svgData);
    //const converted = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)))
    
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)))
    );

    console.log(img)
    formData.append("file", new Blob([img],{type: 'image/png'}), 'meme.png');
    
    const url = "https://gateway.ethswarm.org/files";
     fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(data=>data.json())
    .then(data=>{
      console.log(data.reference);
      // result url: https://gateway.ethswarm.org/files/cd661574c2d25f3e561cd9cc20fe04b142fc92e1a5b34bdd03922cbf38205c20
      setTimeout(_=>{
        fetch('https://gateway.ethswarm.org/files/'+data.reference)
      .then(data=>data.text())
      .then(data=>{
        this.props.setMeme(data);
        console.log(data)
      })
      },15000);
    });
  };

  getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/png");
    return dataURL;
  }

  render() {
    const image = photos[this.state.currentImage];
    const base_image = new Image();
    base_image.src = image.src;
    let wrh = base_image.width / base_image.height;
    let newWidth = 400;
    console.log(base_image.width, base_image.height);
    let newHeight = newWidth / wrh;
    console.log(newWidth, newHeight);
    const textStyle = {
      fontFamily: "Impact",
      fontSize: "50px",
      textTransform: "uppercase",
      fill: "#FFF",
      stroke: "#000",
      userSelect: "none",
    };

    return (
      <div>
        <div className="main-content">
          <div className="content">
            {photos.map((image, index) => (
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
        </div>
        <Modal className="meme-gen-modal" isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggle}>Make-a-Meme</ModalHeader>
          <ModalBody>
            <svg
              id="svg_ref"
              height={newHeight}
              width={newWidth}
              ref={(el) => {
                this.svgRef = el;
              }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <image
                ref={(el) => {
                  this.imageRef = el;
                }}
                xlinkHref={this.state.currentImagebase64}
                height={newHeight}
                width={newWidth}
              />
              <text
                style={{
                  ...textStyle,
                  zIndex: this.state.isTopDragging ? 4 : 1,
                }}
                x={this.state.topX}
                y={this.state.topY}
                dominantBaseline="middle"
                textAnchor="middle"
                onMouseDown={(event) => this.handleMouseDown(event, "top")}
                onMouseUp={(event) => this.handleMouseUp(event, "top")}
              >
                {this.state.toptext}
              </text>
              <text
                style={textStyle}
                dominantBaseline="middle"
                textAnchor="middle"
                x={this.state.bottomX}
                y={this.state.bottomY}
                onMouseDown={(event) => this.handleMouseDown(event, "bottom")}
                onMouseUp={(event) => this.handleMouseUp(event, "bottom")}
              >
                {this.state.bottomtext}
              </text>
            </svg>

            <div className="meme-form">
              <FormGroup>
                <Label for="toptext">Top Text</Label>
                <input
                  className="form-control"
                  type="text"
                  name="toptext"
                  id="toptext"
                  placeholder="Add text to the top"
                  onChange={this.changeText}
                />
              </FormGroup>
              <FormGroup>
                <Label for="bottomtext">Bottom Text</Label>
                <input
                  className="form-control"
                  type="text"
                  name="bottomtext"
                  id="bottomtext"
                  placeholder="Add text to the bottom"
                  onChange={this.changeText}
                />
              </FormGroup>
              <button
                onClick={() => this.convertSvgToImage()}
                className="btn btn-primary"
              >
                Download to Device
              </button>
              <button
                onClick={() => this.uploadToSwarm()}
                className="btn btn-primary"
              >
                Upload to Swarm
              </button>
              <button
                onClick={() => this.props.setMeme(<h1>Mememe3</h1>)}
                className="btn btn-primary"
              >
                Upload to Swarm
              </button>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MainPage;
