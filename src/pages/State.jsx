// state - state is only for class component.

// statefull component - class component
// stateless  component - function component  ----> interview Question

// state in class component

// import React, { Component } from 'react'

// class State extends Component {
//     state = {
//         name : "vishnu" ,
//         count : 0
//     }
//     handleIncrement = ()=>{
//         this.setState({
//             count : this.state.count + 1
//         }
//         )
//     }

//     handleDecrement = ()=>{
//         if (this.state.count > 0){
//             this.setState({
//                 count : this.state.count - 1
//             }
//             )
//         }
//     }
//   render() {
//     console.log("re-render");
//     return (
//        <>
//        <h2>state in class component </h2>
//        <h1>Count : {this.state.count}</h1>
//        <button onClick={this.handleIncrement}>Increment</button>
//        <button onClick={this.handleDecrement}>Decrement</button>
//        </>
//     )
//   }
// }


 

// import React, { useState } from 'react'

// function State() {
//     const [count, setcount] = useState(0)
    
//   return (
//     <>
//          <h2> State in Function component </h2>
//          <h1> Count : {count}  </h1>
//          <button onClick={()=> setcount(count+1)}>Increment</button>
//          <button onClick={()=> { if (count>0) {
//             setcount(count-1)
//          } } }>Decrement</button>
//       </>
//   )
// }

// export default State


// import { useState } from "react";
// const State = () => {
//   const [count, setcount] = useState(0);


//   const handleCount = () =>{
//       setcount(count+1)
//   }
//   return (
//     <>
//       <h4>State using React-Hooks</h4>
//       <h1>Count : {count}</h1>
//       <button onClick={handleCount}>Increment</button>
//       {/* <button onClick={() => setcount(count + 1)}>Increment</button> */}
//       <button
//         onClick={() => {
//           if (count > 0) {
//             setcount(count - 1);
//           }
//         }}
//       >
//         Decrement
//       </button>
//     </>
//   );
// };
// export default State


import React from 'react'

 const State = ()=> {
    const [count, setcount] = useState(0);
  return (
     <>
          <h2> State in Function component </h2>
          <h1> Count : {count}  </h1>
          <button onClick={()=> setcount(count+1)}>Increment</button>
          <button onClick={()=> { if (count>0) {
            setcount(count-1)
         } } }>Decrement</button>
      
     </>
  )
}

export default State