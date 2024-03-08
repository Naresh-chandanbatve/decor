import React from "react";
import { Modal, ModalOverlay, ModalContent, Spinner } from "@chakra-ui/react";
import load from "../assets/tube-spinner.svg";

function LoadingOverlay({ isOpen }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalOverlay className="flex flex-col justify-content-center items-center">
        <ModalContent p={8} className="h-screen">
          <div className="grid h-screen items-center justify-center">
            <img src={load} height={100} width={100} className=""></img>
          </div>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}

export default LoadingOverlay;
