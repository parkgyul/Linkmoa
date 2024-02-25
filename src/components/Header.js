import React, { useState } from "react";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  return (
    <header
      isToggled={isToggled}
      userToggled={userToggled}
      id="header"
      role="banner"
    >
      <div
        className="toggle"
        onClick={() => {
          setIsToggled(!isToggled);
        }}
      ></div>
    </header>
  );
};

export default Header;
