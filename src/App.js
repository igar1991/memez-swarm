import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainRoute from "./components/MainRoute";
import {
  UploadFileComponent,
  LoginComponent,
  ListFilesComponent,
  LoadFilesComponent,
} from "fairdrive-protocol";

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

const App = () => {
  const [password, setPassword] = useState(null);
  const [files, setFiles] = useState(null);
  const [file, setFile] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openFilesList, setOpenFilesList] = useState(false);
  const [openSaveFile, setOpenSaveFile] = useState(false);
  const [uploadRes, setUploadRes] = useState(false);

  const page1arr=photos.slice(0,35);
  const page2arr=photos.slice(35,71);
  const page3arr=photos.slice(71,104);

  const [arraymeme, setArraymeme] = useState([])

  const setMeme =(a)=>{
    const array = [{src: a}, ...arraymeme]
    setArraymeme(array)
    console.log(arraymeme)
    localStorage.setItem('meme',JSON.stringify(array))
  }

  const deleteMeme = (meme)=> {
    const array = arraymeme.filter(item=>item.src !==  meme )
    setArraymeme(array)
    console.log(arraymeme)
    localStorage.setItem('meme',JSON.stringify(array))
    console.log(meme)
    
  }
  useEffect(() => {
    if(localStorage.getItem('meme')) {
       setArraymeme(JSON.parse(localStorage.getItem('meme')))
      

    }
    console.log(localStorage.getItem('meme'))
    console.log(photos.length)

  },[]);

  return (
    <div>
       <LoginComponent
            setUserPassword={setPassword}
            podName={"MemeZzz"}
          ></LoginComponent>

          {password && (
        <LoadFilesComponent
          password={password}
          setFiles={setFiles}
        ></LoadFilesComponent>
      )}

      {files && files.map(item=>{
        console.log(item);
      })}
      <NavBar />
      <MainRoute page1arr={page1arr} page2arr={page2arr} page3arr={page3arr} photos={photos} arraymeme={arraymeme} setMeme={setMeme} deleteMeme={deleteMeme} />

    </div>
  );
};

export default App;
