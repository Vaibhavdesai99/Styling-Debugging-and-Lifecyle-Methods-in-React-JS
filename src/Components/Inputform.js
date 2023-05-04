import React, { useState } from "react";

import "./Inputform.css";
import Userlist from "./Userlist";

const Inputform = () => {
  const [userName, SetUserName] = useState("");
  const [userAge, SetUserAge] = useState("");
  const [onscreen, SetOnScreen] = useState([]);
  const [isvalid, SetIsvalid] = useState(true);
  const [validAge, Setvalidage] = useState(true);

  const addusername = (e) => {
    if (e.target.value.trim().length > 0) {
      SetIsvalid(true);
    }
    SetUserName(e.target.value);
  };

  const adduserage = (e) => {
    if (e.target.value.trim().length > 0) {
      SetIsvalid(true);
      if (e.target.value < 1) {
        Setvalidage(false);
      } else {
        Setvalidage(true);
      }
    }

    SetUserAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userInfo = {
      name: userName,
      age: userAge,
    };
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      SetIsvalid(false);
      return;
    }

    SetOnScreen([...onscreen, userInfo]);
    SetUserName("");
    SetUserAge("");
  };

  const dismissHandler = () => {
    SetIsvalid(true);
  };

  const ageDismisshandler = () => {
    Setvalidage(true);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="User_InputBox">
          <div className="User_info">
            <div className="UserName">
              <label>Username</label>
              <input
                type="text"
                onChange={addusername}
                value={userName}
              ></input>
            </div>
            <div className="UserAge">
              <label>Age</label>
              <input
                type="number"
                onChange={adduserage}
                value={userAge}
              ></input>
            </div>
            <div className="btn">
              <button type="submit">ADD User</button>
            </div>
          </div>
        </div>
      </form>
      <div className="user-container">
        {isvalid ? null : (
          <div className="invalid-input">
            Invalid input, please add username and age.
            <button onClick={dismissHandler}>OK</button>
          </div>
        )}
        {validAge ? null : (
          <div className="invalid-Age">
            Invalid Age (Age should be {">"}0)
            <button onClick={ageDismisshandler}>OK</button>
          </div>
        )}
        <Userlist displayUserList={onscreen} />
      </div>
    </>
  );
};

export default Inputform;
