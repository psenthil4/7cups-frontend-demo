import React from "react";
import { Link, useHistory } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const history = useHistory()
  const [roomName, setRoomName] = React.useState("");
  const [userID, setUserID] = React.useState("");
  const validIds = ["listener7", "client8"]

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value);
  };

  const handleUserIDChange = (event) => {
    setUserID(event.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(!roomName) return alert("Chat ID cannot be empty")
    if(!validIds.includes(userID)) return alert("Invalid User ID,")
    history.push(`/${roomName}/${userID}`)
  }

  // const [role, setRole] = React.useState('listener');

  // const handleRoleChange = (event) => {
  //   setRole(event.target.value);
  // }

//   const Dropdown = ({ label, value, options, onChange }) => {
//   return (
//     <label>
//       {label}
//       <select value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option value={option.value}>{option.label}</option>
//         ))}
//       </select>
//     </label>
//   );
// };

  return (
    <>
      <div className="home">
        <div className="home__container">
        <h1 className="home__title">Chat Demo</h1>
          <div className="home__form">
            <form onSubmit={handleSubmit}>
              <div className="home__form-input">
                <input onChange={handleRoomNameChange} type="text" placeholder="Chat ID" />
              </div>
              <div className="home__form-input">
                <input onChange={handleUserIDChange} type="text" placeholder="User ID" />
              </div>
              <input type="submit" value="Join the chat" />
            </form>
          </div>
        </div>
      </div>
    </>
    // <div className="home-container">
    //   <div className="form">
    //     <h1 className="title">7 Cups Demo</h1>
    //   </div>
    //   <input
    //     type="text"
    //     placeholder="Chat ID"
    //     value={roomName}
    //     onChange={handleRoomNameChange}
    //     className="text-input-field"
    //   />
    //   <input
    //     type="text"
    //     placeholder="User ID"
    //     value={userID}
    //     onChange={handleUserIDChange}
    //     className="text-input-field"
    //   />
      // <Link to={`/${roomName, userID}`} className="enter-room-button">
      //   Join Chat
      // </Link>
    //   {/* <Dropdown
    //     options={[
    //       { label: 'Listener', value: 'listener' },
    //       { label: 'Client', value: 'client' },
    //     ]}
    //     value={role}
    //     onChange={handleRoleChange}
    //     className="role-dropdown"
    //   /> */}
    // </div>
  );
};

export default Home;