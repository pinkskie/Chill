import { useState } from "react";
import { Modal } from "./Modal";

export default {
  title: "UI/Modal",
  component: Modal,
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal" withPortal={false}>
      <p>This is the content inside the modal.</p>
    </Modal>
  );
};

export const WithPortal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Modal with Portal"
      withPortal={true}
    >
      <p>This is the content inside the modal with a portal.</p>
    </Modal>
  );
};
