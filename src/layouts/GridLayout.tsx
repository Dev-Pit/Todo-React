import Aside from "../components/Aside";
import TodoList from "../components/TodoList";

const GridLayout = () => {
  return (
    <div className="lg:mx-16 md:mx-10 mx-5 my-5 grid grid-cols-3 gap-3 lg:gap-5">
      <Aside />
      <TodoList />
    </div>
  );
};

export default GridLayout;
