import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // 드롭다운 메뉴가 열려 있는지 여부 상태

  const handleMenuClick = (action) => {
    // 각 메뉴 항목 클릭 시 실행될 함수
    // action에 따라 다른 작업을 수행할 수 있습니다.
    switch (action) {
      case "createDirectory":
        // 디렉토리 생성 작업 수행
        console.log("디렉토리를 생성합니다.");
        break;
      case "createLink":
        // 링크 생성 작업 수행
        console.log("링크를 생성합니다.");
        break;
      case "createSharePage":
        // 공유 페이지 생성 작업 수행
        console.log("공유 페이지를 생성합니다.");
        break;
      default:
        break;
    }
    // 드롭다운 메뉴를 닫음
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu">
      <button className="plus-button" onClick={() => setIsOpen(!isOpen)}>
        플러스
      </button>
      {isOpen && (
        <div className="menu-items">
          <button onClick={() => handleMenuClick("createDirectory")}>
            디렉토리 생성
          </button>
          <button onClick={() => handleMenuClick("createLink")}>
            링크 생성
          </button>
          <button onClick={() => handleMenuClick("createSharePage")}>
            공유 페이지 생성
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
