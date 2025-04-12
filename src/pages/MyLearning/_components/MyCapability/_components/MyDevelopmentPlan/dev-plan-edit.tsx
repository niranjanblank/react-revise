import React, { useState } from "react";
import Modal from "../../../../../../components/UI/Modal/Modal";

interface DevPlanEditModalProps{
    children: React.ReactNode
}
const DevPlanEditModal = ({children}: DevPlanEditModalProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }
    return ( 
        <>
        <Modal isOpen={isOpen} onClose={onClickHandler}>
            Edit Development Plan Here
        </Modal>
        <div onClick={onClickHandler}>
            {children}
        </div>
        </>
     );
}
 
export default DevPlanEditModal;