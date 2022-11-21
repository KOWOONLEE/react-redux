import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const id = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(id));

  return (
    <>
      <h4>Detail</h4>
      {toDo?.text}
      Created at: {toDo?.id}
    </>
  );
};
function mapDispatchToProps(state, ownProps) {
  return { toDos: state };
}
export default connect(mapDispatchToProps)(Detail);
