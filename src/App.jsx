import { useState } from "react";
import "./App.css";

// COMPONENTS
import Board from './components/board/board';
import Header from "./components/head/header";
import NewItemModal from "./components/newItemModal/newItemModal";

export default function App() {

  const [show_NewItemModal,setShow_NewItemModal] = useState(false)

  function handleModalStatus(){
    setShow_NewItemModal(!show_NewItemModal)
  }

  return (
    <div className="app">
      <Header handleModalStatus={handleModalStatus}/>
      <Board />
      
      {show_NewItemModal && <NewItemModal handleModalStatus={handleModalStatus}/>}
    </div>
  );
}
