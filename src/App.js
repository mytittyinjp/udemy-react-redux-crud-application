import React from "react";

// function compornent
const App = () => {
  const profiles = [
    {name: "Taro", age: "10"},
    {name: "Hanako", age: "5"},
    {name: "NoName"},
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User key={index} name={profile.name} age={profile.age}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I'm {props.name}, and {props.age} years old.</div>
}

User.defaultProps = {
  age : 1
}

export default App;