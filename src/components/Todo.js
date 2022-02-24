import { useState } from "react"

import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props){

    const [modalIsOpen, setModalIsOpen] = useState(false)

    function handleDelete(){
        setModalIsOpen(true)
    }

    function handleClose(){
        setModalIsOpen(false)
    }

    return(
        <div className='card'>
            <h2>{props.text}</h2>
            <div>
                <button className='btn' onClick={handleDelete}>Delete</button>
            </div>
            {modalIsOpen && <Modal onCancel={handleClose} onConfirm={handleClose}/>}
            {modalIsOpen && <Backdrop onCancel={handleClose}/>}
        </div>
    )

}

export default Todo;