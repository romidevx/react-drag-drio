import './newItemModal.css';

function NewItemModal({handleModalStatus}) {
  
  function handleForm(e){
    e.preventDefault();

    let newProject = {
      id:          e.target.client.value.slice(0,3).toUpperCase() + Math.floor(Math.random() * 999),
      clientName:  e.target.client.value,
      description: e.target.description.value,
      category:    'todo'
    }

    console.log(newProject);
    handleModalStatus();
  }

  return (
    <div className='newItem__container-modal'>
      <div className="newItem__modal">

        <h3>New Project</h3>

        <form id='form' onSubmit={handleForm}>
          <input type="text" name='client' placeholder='enter client name' required/>
          <textarea name="description" id="" cols="30" rows="10" placeholder='enter description'></textarea>
          
          <div className="modal__buttons">
            <button className='btn__save'>Save</button>
            <button className='btn__close-modal' onClick={handleModalStatus}>Cancel</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default NewItemModal;