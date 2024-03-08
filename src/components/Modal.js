import React, { useState, useCallback } from "react";

function Modal({ state, closeModal, onInsert }) {
  const [title, setTitle] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  const onSubmit = useCallback(
    (e) => {
      onInsert(title);
      e.preventDefault();
      setTitle("");
      closeModal();
    },
    [onInsert, title]
  );

  return state ? (
    <React.Fragment>
      <div>
        <div>
          <form onSubmit={onSubmit}>
            <div className="content">
              <h4>
                <input
                  type="text"
                  placeholder="제목을 입력하세요"
                  name="title"
                  value={title}
                  onChange={onChangeTitle}
                ></input>
              </h4>
            </div>
            <div>
              <button type="submit">
                <p>추가하기</p>
              </button>
              <button type="submit" onClick={(e) => closeModal(e)}>
                <p>닫기</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  ) : null;
}

export default Modal;
