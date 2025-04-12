import React, { useState } from "react";
import Modal from "../../../../../components/UI/Modal/Modal";

interface CapabilityDevelopmentModalProps{
    children: React.ReactNode
}

const CapabilityDevelopmentModal = ({children}: CapabilityDevelopmentModalProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = () => {
        console.log("[Capability Development Modal] Button Clicked")
        setIsOpen(!isOpen)
    }
    return ( 
        <>
        <Modal isOpen={isOpen} onClose={onClickHandler}>
            Some Content for modal
        </Modal>
        <div onClick={onClickHandler}>
            {children}
        </div>
        </>
     );
}
 
export default CapabilityDevelopmentModal;