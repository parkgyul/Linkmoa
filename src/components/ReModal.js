import React, { useState, useCallback, useEffect } from "react";

function ReModal({ state, data, onRemove, onUpdate, closeModal }) {
  const [title, setTitle] = useState(data.title);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  });

  useEffect(() => {
    console.log(title);
    setTitle(data.title);
  }, [data]);

  const handleUpdate = useCallback((e) => {
    onUpdate(data.id, {
      title,
    });
    e.preventDefault();

    closeModal();
  });

  return state ? (
    <React.Fragment>
      <div>
        <div>
          <h1></h1>
          <form onSubmit={handleUpdate}>
            <br />
            <h4>
              <input
                type="text"
                placeholder="제목을 입력하세요"
                name="title"
                value={title}
                onChange={onChangeTitle}
              ></input>
            </h4>

            <div>
              <button type="submit">
                <p>수정하기</p>
              </button>
              <button type="button" onClick={() => onRemove(data.id)}>
                <p>삭제하기</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  ) : null;
}
export default ReModal;
