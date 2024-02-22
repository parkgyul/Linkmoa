import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  const HandleInputUserName = (e) => {
    setUserName(e.target.value);
  };
  const HandleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const HandleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const HandleInputConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const HandleInputPhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
  };
  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onClickSubmit}
      >
        <h2>회원가입</h2>
        <label>Username</label>
        <input type="text" value={UserName} onChange={HandleInputUserName} />
        <label>Email</label>
        <input type="email" value={Email} onChange={HandleInputEmail} />
        <label>Password</label>
        <input
          type="password"
          value={Password}
          onChange={HandleInputPassword}
        />
        <label>ConfirmPassword</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={HandleInputConfirmPassword}
        />
        <label>전화번호</label>
        <input
          type="tel"
          value={PhoneNumber}
          onChange={HandleInputPhoneNumber}
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Register;
