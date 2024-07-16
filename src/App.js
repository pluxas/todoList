import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "./components/store/themeSlice";
import plus from "./assets/plus.svg";
import Modal from "./components/Modal";
import { addTask } from "./components/store/addTodoSlice";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [modalValue, setModalValue] = useState("");
  const [search, setSearch] = useState("");
  const theme = useSelector((state) => state.themes.mode);
  const tasks = useSelector((state) => state.tasks.task);
  const dispatch = useDispatch();


  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);


  const handleTaskClick = () => {
    if (modalValue.length != 0) {
      dispatch(addTask(modalValue));
      setOpenModal(false);
      setModalValue("");
    }
  };

  const handleThemeClick = () => {
    dispatch(changeTheme());
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  

  return (
    <div className="wrapper">
      <Header 
      search={search} 
      setSearch={setSearch} 
      handleClick={handleThemeClick} 
      />
      <div>
        {tasks.map((task) => 
          <Main task={task}/>
        )}
      </div>
      <div onClick={handleOpenModal} className="img">
        <img src={plus} alt="" />
      </div>
      <Modal
        handleCloseModal={handleCloseModal}
        openModal={openModal}
        modalValue={modalValue}
        setModalValue={setModalValue}
        handleTaskClick={handleTaskClick}
      />
    </div>
  );
}

export default App;
