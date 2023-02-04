import '../App.css';
import { useState } from 'react';
// DATA
import {projects} from '.././data/data';
import {categories} from '.././data/data';

function Board() {

  const [cardId,setCardId] = useState('');

 // *** START DRAG ITEM **
  const onStart_Drag_Item = (e,id) => {
    e.preventDefault();
    setCardId(id)
    console.log('drag item set to: ', cardId);
  }

   // *** DRAG OVER COLUMN **
   const onDrag_OverItem = (e) => {
    e.preventDefault();
    e.target.classList.add('dark-bg');
  }

  // *** DRAG LEAVE COLUMN **
  const onDrag_leaveItem = (e) => {
    e.preventDefault();
    e.target.classList.remove('dark-bg');
  }

  // *** DROP ITEM IN COLUMN **
  const onDrop_Item = (e) => {
    e.preventDefault();
    e.target.appendChild(document.getElementById(cardId));
    setCardId('');
    e.target.classList.remove('dark-bg');
  }

  return (
    <div className="projects__board">
      {
        categories.map((category,i) => 
          <div className='column' key={category} id={category} 
            onDragOver={onDrag_OverItem} 
            onDragLeave={(e) => onDrag_leaveItem(e)} 
            onDrop={(e) => onDrop_Item(e)} 
          >

            {/* EACH COLUMN TITLE */}
            <h5 className='column__header-title'>{category}</h5>


            {/* LIST ITEMS BY CATEGORY */}
            {
              projects
              .filter(project => project.category == category)
              .map((item) => 
                <div key={item.id} id={item.id} className="column__card" 
                  draggable='true' 
                  onDrag={(e) => onStart_Drag_Item(e,item.id)}>
                  <h5>{item.client}</h5>
                </div>
              )
            }

          </div>
        )
      }
    </div>
  );
}

export default Board;