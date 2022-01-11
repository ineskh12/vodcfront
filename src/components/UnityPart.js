import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Alert from 'react-bootstrap/Alert'


const unityContext = new UnityContext({
  loaderUrl: "/VOLTS_7/Build/VOLTS.loader.js",
  dataUrl: "/VOLTS_7/Build/VOLTS.data",
  frameworkUrl: "/VOLTS_7/Build/VOLTS.framework.js",
  codeUrl: "/VOLTS_7/Build/VOLTS.wasm",
webglContextAttributes:{
  preserveDrawingBuffer:true
}

}

);


 


function UnityPart() {

  
  const [isCharacterCustom, setIsCharacterCustom] = React.useState(false);
  const [nom, setNom] = React.useState();
  const [NameOfTheSpace, setNameOfTheSpace] = React.useState("");
  const [SkinColor, setSkinColor] = React.useState(0);
 
  React.useEffect(function () {
    
    unityContext.on("CharacterCustom", function (NameOfTheSpace, SkinColor) {
  
      setIsCharacterCustom(true);   
      setNameOfTheSpace(NameOfTheSpace);
      setSkinColor(SkinColor);
      //console.log(NameOfTheSpace)
    
    alert('test')
    },
  
    );
   
    
  
  }, []);
 
  return (
    <div className="App">
 <br/>
  

<div >

{isCharacterCustom === true && <p>{`codingSchool  character has been added! ${NameOfTheSpace}  ${SkinColor} points`}</p>} 
   
      <Unity  style={{
        height: "auto",
        width: "80%",
        border: "2px solid white",
       
      }} unityContext={unityContext} />

      
  
    </div>
    </div>
  );
}



export default UnityPart;


