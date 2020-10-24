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
  { src: "./images/X-X-Everywhere.jpg" },
  { src: "./img/10-Guy.jpg" },
  { src: "./img/Aaaaand-Its-Gone.jpg" },
  { src: "./img/Afraid-To-Ask-Andy.jpg" },
  { src: "./img/Am-I-The-Only-One-Around-Here.jpg" },
  { src: "./img/And-everybody-loses-their-minds.jpg" },
  { src: "./img/And-Just-Like-That.jpg" },
  { src: "./img/Angry-Baby.jpg" },
  { src: "./img/Awkward-Moment-Sealion.jpg" },
  { src: "./img/Back-In-My-Day.jpg" },
  { src: "./img/Bad-Luck-Brian.jpg" },
  { src: "./img/Bender.jpg" },
  { src: "./img/Bird-Box.jpg" },
  { src: "./img/Buddy-Christ.jpg" },
  { src: "./img/But-Thats-None-Of-My-Business.jpg" },
  { src: "./img/Chubby-Bubbles-Girl.jpg" },
  { src: "./img/Conspiracy-Keanu.jpg" },
  { src: "./img/Cool-Cat-Stroll.jpg" },
  { src: "./img/Cute-Cat.jpg" },
  { src: "./img/Darti-Boy.jpg" },
  { src: "./img/Deadpool-Surprised.jpg" },
  { src: "./img/DJ-Pauly-D.jpg" },
  { src: "./img/Doge.jpg" },
  { src: "./img/Dont-You-Squidward.jpg" },
  { src: "./img/Dr-Evil-Laser.jpg" },
  { src: "./img/Evil-Plotting-Raccoon.jpg" },
  { src: "./img/Face-You-Make-Robert-Downey-Jr.jpg" },
  { src: "./img/First-World-Problems.jpg" },
  { src: "./img/Gollum.jpg" },
  { src: "./img/Grandma-Finds-The-Internet.jpg" },
  { src: "./img/Grumpy-Cat-Not-Amused.jpg" },
  { src: "./img/Grumpy-Cat.jpg" },
  { src: "./img/Guy-Holding-Cardboard-Sign.jpg" },
  { src: "./img/Heres-Johnny.jpg" },
  { src: "./img/I-Bet-Hes-Thinking-About-Other-Women.jpg" },
  { src: "./img/I-Should-Buy-A-Boat-Cat.jpg" },
  { src: "./img/Ill-Just-Wait-Here.jpg" },
  { src: "./img/Imagination-Spongebob.jpg" },
  { src: "./img/Impossibru-Guy-Original.jpg" },
  { src: "./img/Jack-Sparrow-Being-Chased.jpg" },
  { src: "./img/Kevin-Hart.jpg" },
  { src: "./img/Laughing-Leo.png" },
  { src: "./img/Laughing-Men-In-Suits.jpg" },
  { src: "./img/Leonardo-Dicaprio-Cheers.jpg" },
  { src: "./img/Look-At-Me.jpg" },
  { src: "./img/Marvel-Civil-War-1.jpg" },
  { src: "./img/Me-And-The-Boys.jpg" },
  { src: "./img/Money-Money.jpg" },
  { src: "./img/Mr-Krabs-Blur-Meme.jpg" },
  { src: "./img/Mugatu-So-Hot-Right-Now.jpg" },
  { src: "./img/Pepperidge-Farm-Remembers.jpg" },
  { src: "./img/Persian-Cat-Room-Guardian.jpg" },
  { src: "./img/Philosoraptor.jpg" },
  { src: "./img/Picard-Wtf.jpg" },
  { src: "./img/Rick-and-Carl.jpg" },
  { src: "./img/Ron-Burgundy.jpg" },
  { src: "./img/Satisfied-Seal.jpg" },
  { src: "./img/See-Nobody-Cares.jpg" },
  { src: "./img/Shrek-Cat.jpg" },
  { src: "./img/Skeptical-Baby.jpg" },
  { src: "./img/Sparta-Leonidas.jpg" },
  { src: "./img/Spongegar.jpg" },
  { src: "./img/Star-Wars-No.jpg" },
  { src: "./img/Star-Wars-Yoda.jpg" },
  { src: "./img/Success-Kid.jpg" },
  { src: "./img/Surprised-Koala.jpg" },
  { src: "./img/Table-Flip-Guy.jpg" },
  { src: "./img/That-Would-Be-Great.jpg" },
  { src: "./img/The-Most-Interesting-Man-In-The-World.jpg" },
  { src: "./img/Third-World-Skeptical-Kid.jpg" },
  { src: "./img/Third-World-Success-Kid.jpg" },
  { src: "./img/Too-Damn-High.jpg" },
  { src: "./img/Uncle-Sam.jpg" },
  { src: "./img/Unpopular-Opinion-Puffin.jpg" },
  { src: "./img/You-Were-The-Chosen-One-Star-Wars.jpg" }
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

  uploadToSwarm = () => {
    const self=this
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
      canvas.toBlob(function (blob) {
        var formData = new FormData();
        formData.append("file", blob, "image.jpg");
        const url = "https://gateway.ethswarm.org/files";
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((data) => data.json())
          .then((data) => {
              self.props.setMeme(
                      "https://gateway.ethswarm.org/files/"+data.reference
                    );
            
          });
      }, "image/jpeg");
    };
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
        <Modal className="meme-gen-modal" isOpen={this.state.modalIsOpen} toggle={this.toggle}>
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
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MainPage;
