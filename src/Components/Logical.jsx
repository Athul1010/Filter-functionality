//--------------------(Program 1: single input tags background color changes with 3 buttons)--------------------//

// import React, { useState } from 'react'

// const Logical = () => {
//     const [show, setShow] = useState('active');
//     const handleColor = () => {
//         if (show === 'active') {
//             return "red"
//         } else if (show == 'inactive') {
//             return "green"
//         } else {
//             return "grey"
//         }
//     }

//     return (
//         <div>
//             <h1 style={{ color: handleColor()}}>Status:{show}</h1>
//             <button onClick={()=>setShow('active')}>Red</button>
//             <button onClick={()=>setShow('inactive')}>Green</button>
//             <button onClick={()=>setShow('unknown')}>Grey</button>
//         </div>
//     )
// }

// export default Logical


//--------------(Program 2: three input tags background color changes with corresponding 3 buttons)----------------//

// import React, { useState } from "react";

// const ColorChanger = () => {
//   // State to store background colors for each input field
//   const [inputColors, setInputColors] = useState(["white", "white", "white"]);

//   // Function to handle color change for a specific input field
//   const handleColorChange = (index, color) => {
//     const newColors = [...inputColors];
//     newColors[index] = color; // Update color for the specific input
//     setInputColors(newColors);
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           style={{
//             backgroundColor: inputColors[0], // Set background color for this input
//             padding: "8px",
//             borderRadius: "4px",
//           }}
//         />
//         <button onClick={() => handleColorChange(0, "red")}>Red</button>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <input
//           type="text"
//           style={{
//             backgroundColor: inputColors[1], // Set background color for this input
//             padding: "8px",
//             borderRadius: "4px",
//           }}
//         />
//         <button onClick={() => handleColorChange(1, "green")}>Green</button>
//       </div>
//       <div style={{ marginTop: "10px" }}>
//         <input
//           type="text"
//           style={{
//             backgroundColor: inputColors[2], // Set background color for this input
//             padding: "8px",
//             borderRadius: "4px",
//           }}
//         />
//         <button onClick={() => handleColorChange(2, "grey")}>Grey</button>
//       </div>
//     </div>
//   );
// };

// export default ColorChanger;



//----------------(Program 4: title changes based on 3 buttons)-------------------//

// import React from 'react'
// import { useState } from 'react'

// const Logical = () => {
//   const [role, setRole] = useState("")
  
//   let handleChange = () =>{
//     if (role==="admin") {
//       return <h2>Admin panel</h2>
//     } else if (role === "user") {
//       return <h2>user panel</h2>
//     } else {
//       return <h2>guest panel</h2>
//     }
//   }

//   return (
//     <div>
      
//       {handleChange()}
//       <button onClick={()=>setRole('admin')}>Admin</button>
//       <button onClick={()=>setRole('user')}>User</button>
//       <button onClick={()=>setRole('none')}>Guest</button>
//     </div>
//   )
// }

// export default Logical



//----------------------(Program 5:  Conditional Styling with Boolean true or false Values )-----------------------//
// import React, { useState } from 'react';
// import './ButtonStyles.css'; =================> "css styling kodukkanam"

// const HighlightButton = () => {
//   const [isHighlighted, setIsHighlighted] = useState(false);

//   return (
//     <button
//       className={isHighlighted ? 'highlight' : 'normal'}
//       onClick={() => setIsHighlighted(!isHighlighted)}
//     >
//       {isHighlighted ? 'Highlighted' : 'Normal'}
//     </button>
//   );
// };

// export default HighlightButton;


// CSS styling is given below,

// .highlight {
//     background-color: yellow;
//     color: black;
//   }
  
//   .normal {
//     background-color: lightgray;
//     color: black;
//   }
  

//---------------------------------------------//

//-------------------(Program:6 button click aakkumbo ella 3 ne top il ulla number num red color varan)-------------------------//

//jsx file
//------------

// import React, { useState } from 'react'
// import '../Styles/Test.css'

// const Test = () => {
//     const items = [10,55,3,42,21,3,7,88,3,10]
//     const [color, setColor] = useState(false)

//     return (
//     <div>
//       {items.map((x, index)=>(
//         <div>
//             <h1 className={ color && index+1 < items.length && items[index+1]===3 ? 'one':'two'}>{x}</h1>
            
//         </div>
//       ))}
//       <button onClick={()=>setColor(!color)}>Add Red</button>
//     </div>
//   )
// }

// export default Test

//CSS file
//-------------

// .one{
//     color: red;
// }

//-------------------(Program:6 button click aakkumbo ella 3 ne top il ulla number num red color varan)-------------------------//


//-------------------(icons index value anusarich add aakunnu)------------------------//

// import React from 'react';
// import { FaAndroid, FaApple, FaWindows } from 'react-icons/fa';

// const Test = () => {
//   const items = ['Android', 'iOS', 'Windows'];

//   return (
//     <div>
//       {items.map((item, index) => (
//         <div key={index}>
//           {index === 0 ? (<FaAndroid size={30} color="green" />)
          
//           : index === 1 ? (<FaApple size={30} color="gray" />)

//           : (<FaWindows size={30} color="blue" />)
//         }
//           <p>{item}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Test;


//------------------------------(Odd and even index value nokki button name and alert message)-------------------------//



//-----------------------------(click cheyyumbol blue color varan)---------------------------------------------//

// import React, { useState } from 'react';
// import '../Styles/Test.css';

// const Test = () => {
//   const [selectedIndex, setSelectedIndex] = useState(false);
//   const items = ['Android', 'iOS', 'macOS', 'Windows', 'tvOS', 'fireOS'];

//   return (
//     <div>
//       {items.map((x, index) => (
//         <div key={index}>
//           <p
//             className={index === selectedIndex ? 'blue-color' : ''} // class name aaya "blue-color" ne color blue kodukkuka
//             onClick={() => setSelectedIndex(index+1)} // Add click event
//           >
//             {index === 2 ? `${x}: special one` : x}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Test;


//CSS FILE,

// p {
//     cursor: pointer; /* Show pointer on hover */
//     transition: color 0.3s ease;
//   }
  
//   /* Highlight style for selected p tag */
//   .blue-color {
//     color: blue; /* Apply blue color to selected p tag */
//   }

//-----------------------------(click cheyyumbol blue color varan)---------------------------------------------//


//----------------------------(button click aakumbol 3 enna number ne mukalil ulla numbers red aakm )----------//

// import React, { useState } from 'react'
// import '../Styles/Test.css'

// const Test = () => {
//     const items = [10,55,3,42,21,3,7,88,3,10]
//     const [color, setColor] = useState(false)

//     return (
//     <div>   
//       {items.map((x, index)=>(
//         <div>
//             <h1 className={ color && index+1 < items.length && items[index+1]===3 ? 'one':'two'}>{x}</h1>

//         </div>
//       ))}
//       <button onClick={()=>setColor(!color)}>Add Red</button>
//     </div>
//   )
// }

// export default Test

//css file
//--------
// .one{
//     color: red;
//   }
//   .two{
//     color: green;
//   }


//----------------------------( button click aakumbol 3 enna number ne mukalil ulla numbers red aakm )----------//



//----------------------------(addyam green color then paragraphil click aakiyal red color)--------------------------------//

// import React, { useState } from 'react'

// const Test = () => {
//   const [value, setValue] = useState(false)
  
//   return (
//     <div>
//       <p style={{color: value ? 'red' : 'green'}} onClick={()=>setValue(!value)}>Hello</p>
//     </div>
//   )
// }

// export default Test

//----------------------------(addyam green color then paragraphil click aakiyal red color)--------------------------------//


//----------------------------(input tag il type cheyyunna number anusarich condition kanikkan)-----------------------------//
import React, { useState } from 'react'

const Test2 = () => {
    
    const [data, setData] = useState('');
    const handleChage = (value) => {
        const numValue = Number(value);
        if (numValue < 0) {
            setData('negative number')
        } else if (numValue % 2 === 0) {
            setData('even number')
        } else {
            setData('Odd number')
        }
    }
    return (
        
        <div>
            <input type="number" onChange={(e) => handleChage(e.target.value)} />
            {data && <p>{data}</p>}
        </div>
    )
}

export default Test2