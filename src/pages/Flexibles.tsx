import React from "react";
import { Aside, Container, Main, Stack } from "../compenents/layouts/Container";
import Navigation from "../compenents/navigation/Navigation";
import Header from "../compenents/header/Header";
import FlexibleList from "../compenents/flexibles/FlexibleList";
const Flexibles = () => {
  return (
    <Container>
      <Aside>
        <Navigation />
      </Aside>
      <Main>
        <Stack>
          <Header />
          <FlexibleList />
        </Stack>
      </Main>
    </Container>
  );
};

export default Flexibles;
