import React from "react";

const Userlist = (props) => {
  return (
    <div>
      {props.displayUserList.map((userData, i) => {
        return (
          <div key={i} className="user-box">
            <h4>
              {userData.name}
              {userData.age}(years old)
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Userlist;
