import React, { useState, useRef, useCallback } from "react";
import { PlusSquareFilled } from "@ant-design/icons";
import Modal from "./Modal";
import ReModal from "./ReModal";
import plus from "./more.png";
import folder from "./folder.png";
function Main() {
  const [memos, setMemos] = useState([]);
  const [modalState, setModalState] = useState(false);
  const [reModalState, setReModalState] = useState(false);
  const [clickmemo, setClickmemo] = useState({
    id: "",
    title: "",
  });

  const openModal = () => {
    setModalState((prevState) => !prevState);
  };

  const closeModal = () => {
    setModalState(false);
  };

  // CREATE
  const nextId = useRef(0);
  const onInsert = useCallback(
    (title) => {
      const memo = {
        id: nextId.current, // 다음 인덱스를 현재 메모의 ID로 사용
        title,
      };
      setMemos((prevMemos) => [...prevMemos, memo]); // 기존 메모 배열에 새로운 메모를 추가
      nextId.current += 1; // 다음 인덱스 증가
    },
    [] // 이 함수는 메모 배열이 변경될 때만 새로 생성되어야 하므로 의존성 배열은 비워둠.
  );

  //re모달창 열기 (READ)
  const openReModal = (id) => {
    setClickmemo({
      id: id,
      title: memos[id].title,
    });
    setReModalState((prevState) => !prevState);
  };
  const closeReModal = () => {
    setReModalState(false);
  };
  //DELETE
  const onRemove = useCallback((id) => {
    closeReModal(); // 열려있는 ReModal 닫기
    setMemos(
      (
        prevMemos // 이전 메모 상태를 업데이트하는 함수 호출
      ) =>
        prevMemos
          .filter((memo) => memo.id !== id) // 삭제할 메모를 제외한 나머지 메모들을 필터링하여 새 배열 생성
          .map((memo, index) => ({
            // 각 메모에 대해 새로운 배열을 생성하고 ID를 재조정
            ...memo, // 이전 메모의 내용을 그대로 유지
            id: index, // 새로운 인덱스 할당
          }))
    );
  }, []);

  //UPDATE
  const onUpdate = useCallback(
    (id, change_memo) => {
      closeReModal();
      setMemos(
        memos.map((memos, index) =>
          index === id ? { id, ...change_memo } : memos
        )
      );
    },
    [memos]
  );

  return (
    <div>
      <div>
        <br />
        <br />
        <table>
          <tbody>
            <td>
              <div onClick={openModal}>
                <img
                  src={plus}
                  alt="플러스"
                  style={{ width: "100px", height: "100px", padding: 20 }}
                />
              </div>
            </td>
            <td>
              {memos.map((memo) => (
                <td
                  onClick={() => openReModal(memo.id)}
                  style={{ padding: 20, textAlign: "center" }}
                >
                  <div>
                    <img
                      src={folder}
                      alt="folder"
                      style={{ width: "100px", height: "100px", padding: 5 }}
                    />
                    <h2 style={{ margin: 0 }}>{memo.title}</h2>
                  </div>
                </td>
              ))}
            </td>
          </tbody>
        </table>
        <main>
          <Modal
            state={modalState}
            closeModal={closeModal}
            onInsert={onInsert}
          />
          <ReModal
            state={reModalState}
            closeModal={closeReModal}
            data={clickmemo}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        </main>
      </div>
    </div>
  );
}

export default Main;
