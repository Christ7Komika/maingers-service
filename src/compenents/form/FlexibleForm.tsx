import React, { useState } from "react";
import { Form, FormGroup } from "./Form";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button/standard-button";
import { ButtonGroup } from "./Button";

type Props = {
  NoTextButton?: string;
  OkTextButton?: string;
  handleModal: Function;
};

const FlexibleForm = ({ NoTextButton, OkTextButton, handleModal }: Props) => {
  const [name, setName] = useState<null | string>(null);
  const [color, setColor] = useState<null | undefined | string>(null);
  const [image, setImage] = useState<null | File>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      name: name,
      color: color,
      image: image,
    };
  };

  return (
    <Form onSubmit={(e) => submit(e)} encType="multipart/form-data">
      <FormGroup>
        <label htmlFor="name">Nom du flexible ou raccord</label>
        <Textfield
          id="name"
          label="name"
          placeholder="Entre le nom du flexible ou raccord"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            let target = e.target as HTMLInputElement;
            setName(target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="name">Nom du flexible ou raccord</label>
        <Select
          inputId="color-field"
          className="single-select"
          classNamePrefix="react-select"
          options={colors}
          placeholder="Veuillez choisir une couleur"
          onChange={(e) => setColor(e?.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="name">Nom du flexible ou raccord</label>
        <Textfield
          id="name"
          label="name"
          type="file"
          placeholder="Entre le nom du flexible ou raccord"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            let target = e.target as HTMLInputElement;
            if (target.files) {
              setImage(target.files[0]);
            }
          }}
        />
      </FormGroup>
      <ButtonGroup>
        <Button appearance="subtle" onClick={() => handleModal(false)}>
          {NoTextButton ? NoTextButton : "Annuler"}
        </Button>

        <Button appearance="primary" autoFocus type="submit">
          {OkTextButton}
        </Button>
      </ButtonGroup>
    </Form>
  );
};

const colors = [
  { label: "Bleu", value: "dodgerblue" },
  { label: "Bleu Acier", value: "steelblue" },
  { label: "Bleu Ardoise", value: "slateblue" },
  { label: "Brique", value: "firebrick" },
  { label: "Cramoisi", value: "crimson" },
  { label: "Orange", value: "darkorange" },
  { label: "Marron", value: "maroon" },
  { label: "Rouge", value: "red" },
  { label: "Vert", value: "seagreen" },
  { label: "Violet", value: "darkslateblue" },
];

export default FlexibleForm;
