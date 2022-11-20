import React, { useState } from "react";
import { connect } from "react-redux";
import { acitonCreators } from "./store";

const Home = ({ toDos, addToDo }) => {
  // console.log(rest);
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    addToDo(text);
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(acitonCreators.addToDo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//getCurrentState를 통해서 state를 가져오고 싶음 component인 Home과 함께
//connect는 Home으로 보내는 props에 추가될 수 있도록 허용해줌.
//이제 내 home component는 props를 가지게 되었는데 react-router로부터 받았고 하나의 props만 있음. (toDos)
//그리고 이때 함수 이름은 mapStateToProps여야한다고 공식문서에 나와있는데 이것은 Redux state로부터 home(component)에 prop으로써 전달한다는 말
//이제 <ul></ul>사이에 todo를 render할 수 있음.
