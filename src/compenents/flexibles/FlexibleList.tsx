import React, { useState } from "react";
import styled from "styled-components";
import { GridCard, StackRow } from "../layouts/Container";
import Button from "@atlaskit/button";
import Dialog from "../modal/Dialog";
import FlexibleForm from "../form/FlexibleForm";
import CardFlexible from "../Card/CardFlexible";

const FlexibleList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  console.log("===========> ", open);

  return (
    <>
      <Dialog
        title="Ajouter un flexible ou raccord"
        isOpen={open}
        handleModal={setOpen}
        OkTextButton="Ajouter"
        isForm={true}
      >
        <FlexibleForm handleModal={setOpen} OkTextButton="Ajouter" />
      </Dialog>
      <FlexibleListContainer>
        <StackRow posX="space-between" posY="center">
          <h2>FLEXIBLE ET RACCORDS</h2>
          <Button appearance="primary" onClick={() => setOpen(!open)}>
            Nouveau
          </Button>
        </StackRow>
        <GridCard>
          {/* <CardFlexible />
          <CardFlexible />
          <CardFlexible />
          <CardFlexible />
          <CardFlexible /> */}
        </GridCard>
      </FlexibleListContainer>
    </>
  );
};

const FlexibleListContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const FlexibleListHeader = styled.div``;

export default FlexibleList;
