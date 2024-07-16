import styles from "./Main.module.scss";
import { deleteTask } from "../store/addTodoSlice";
import trash from '../../assets/trash.svg'
import { useDispatch } from "react-redux";

const Main = ({task}) => {
  const dispatch = useDispatch()


  const handleDeleteTask = () => {
    dispatch(deleteTask(task))
  }

  return (
    <main className={styles["main"]}>
      <div className={styles["main__todos"]}>
        <img onClick={handleDeleteTask} src={trash} alt="" />
        <p className={styles["main__text"]}>{task}</p>
      </div>
    </main>
  );
};

export default Main;
