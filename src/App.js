// import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={()=>{console.log("I'm clicked")}} />
//     </React.Fragment>
//   );
// }



// class compornent
// import React, { Component } from "react";

// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=>{console.log("I'm clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

import React from "react";

// function compornent
const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;