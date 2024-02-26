import React, { useState, useRef, useCallback } from "react";
import { PlusSquareFilled } from "@ant-design/icons";
import Modal from "./Modal";
import ReModal from "./ReModal";
import plus from "./more.png";
import folder from "./folder.png";
function Main() {
  const [memos, setMemos] = useState([
    {
      id: 0,
      title: "제목1",
    },
  ]);
  const [modalState, setModalState] = useState(false);
  const [reModalState, setReModalState] = useState(false);
  const [clickmemo, setClickmemo] = useState({
    id: "",
    title: "",
  });

  const openModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  // CREATE
  const nextId = useRef(1);
  const onInsert = useCallback(
    (title) => {
      const memo = {
        id: nextId.current,
        title,
      };
      setMemos(memos.concat(memo));
      nextId.current += 1;
    },
    [memos]
  );

  //re모달창 열기 (READ)
  const openReModal = (id) => {
    setClickmemo({
      id: id,
      title: memos[id].title,
    });
    setReModalState(true);
  };
  const closeReModal = () => {
    setReModalState(false);
  };
  //DELETE
  const onRemove = useCallback(
    (id) => {
      closeReModal();
      setMemos(memos.filter((memo) => memo.id !== id));
    },
    [memos]
  );

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
