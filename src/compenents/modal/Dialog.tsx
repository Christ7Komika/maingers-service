import { useCallback, useState } from "react";
import Button from "@atlaskit/button/standard-button";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTransition,
} from "@atlaskit/modal-dialog";

const boldStyles = {
  fontWeight: "bold",
};

type Props = {
  title: string;
  children: JSX.Element;
  NoTextButton?: string;
  OkTextButton?: string;
  isOpen: boolean;
  isForm?: boolean;
  handleModal: Function;
};

const Dialog = ({
  title,
  children,
  NoTextButton,
  OkTextButton,
  isOpen,
  handleModal,
  isForm,
}: Props) => {
  return (
    <ModalTransition>
      {isOpen && (
        <Modal onClose={() => handleModal(false)} shouldScrollInViewport={true}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            {!isForm && (
              <>
                <Button appearance="subtle" onClick={() => handleModal(false)}>
                  {NoTextButton ? NoTextButton : "Annuler"}
                </Button>
                {OkTextButton ? (
                  <Button
                    appearance="primary"
                    onClick={() => handleModal(false)}
                    autoFocus
                  >
                    {OkTextButton}
                  </Button>
                ) : (
                  ""
                )}
              </>
            )}
          </ModalFooter>
        </Modal>
      )}
    </ModalTransition>
  );
};

export default Dialog;
