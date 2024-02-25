import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  //상태 변화를 기록하기 위함.
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const navigate = useNavigate(); // useNavigate 훅을 사용

  const handleInputId = (e) => {
    setInputId(e.target.value);
  }; // e : 이벤트 객체 - 이벤트가 발생하면, 이벤트가 발생한 요소의 현재값(사용자가 입력한 값)으로 inputId 상태 업데이트.

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    console.log("login 버튼을 클릭함.");
  };

  const onClickRegister = () => {
    navigate("/Register");
  };

  const onNaverLogin = () => {
    window.location.href = "http://localhost:8080/login/oauth2/code/naver";
  };
  const onGoogleLogin = () => {
    window.location.href = "http://localhost:8080/login/oauth2/code/google";
  };
  const getData = () => {
    fetch("http://localhost:8080/login/oauth2/code/google", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        alert(data);
      })
      .catch((error) => alert(error));
  };
  console.log("login 실행중");
  return (
    <div>
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
          onSubmit={onClickLogin}
        >
          <h2>로그인</h2>
          <label>UserName</label>
          <input type="text" value={inputId} onChange={handleInputId} />
          <label>Password</label>
          <input type="password" value={inputPw} onChange={handleInputPw} />
          <br />
          <button type="submit">Login</button>
          {/*<Link to="/register"> 회원가입</Link>*/}
          <button type="button" onClick={onClickRegister}>
            회원가입
          </button>
          <br />
          <br />
          <a href="https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code">
            카카오로그인
          </a>
          <button onClick={onNaverLogin}>NAVER LOGIN</button>
          <button onClick={onGoogleLogin}>GOOGLE LOGIN</button>
          <button onClick={getData}>Get Data</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
