import React, { useState } from "react";
function Switch (props) {

const [roundColor, setRoundColor] = useState("gray");
   const changeValue = () => {
       console.log(props.value);
      
       (props.value==="OFF")?setRoundColor("orange"):setRoundColor("gray");
       props.changeValue();
   }

    return (
<>
    <div className= "switch1">
        <div className='bulb' style ={{backgroundColor : roundColor}}>

        </div>
        
        <button className="bttn" onClick={changeValue}>
            {props.value}
        </button>
    </div>
</>
)
}
export default Switch;
