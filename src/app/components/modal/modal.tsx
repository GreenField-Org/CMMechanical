"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    return (
      <>
        <Button variant="shadow" onClick={() => setShowModal(true)}>Contact Us</Button>
        {showModal && createPortal(
          <dialog open onClose={() => setShowModal(false)} className="bg-white" />,
          document.body
        )}
      </>
    );
  }