import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function RemoveCartItem({ handleCartItemRemove, item }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleModalYesClick = () => {
    // console.log("yes:", item.id);
    if (handleCartItemRemove(item.id)) {
      closeModal();
    }
  };

  return (
    <div>
      <button onClick={openModal}>X</button>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2>Remove item</h2>

        <div>Are you sure you want to remove {item.title} from the cart?</div>
        <button onClick={() => handleModalYesClick()}>Yes</button>
        <button onClick={closeModal}>No</button>
      </Modal>
    </div>
  );
}

export default RemoveCartItem;
