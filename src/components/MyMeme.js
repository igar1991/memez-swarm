import React from "react";


const MyMeme =(props)=> {
    function createMarkup() {
        console.log(`${props.arraymeme[0]}`)
        return {__html: `${props.arraymeme[0]}`};
      }
      

    return (
        <div dangerouslySetInnerHTML={createMarkup()} />
           
    )
}

export default MyMeme;