import React from 'react';
import "./App.scss";
import { Container, Section } from 'rbx';
import Header from "./components/header";

const App = () => (
  <div>
    <Header />
    <Section>
      <Container>
        One Bit Food
      </Container>
    </Section>
  </div>
)

export default App;
