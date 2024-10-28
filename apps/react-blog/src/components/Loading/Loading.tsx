import React from "react";
import { Container, Spinner } from "./styles";

interface Props {
  isLoading: boolean;
}

const Loading: React.FC<Props> = ({ isLoading }) => {
  return (
    <Container isLoading={isLoading}>
      <Spinner />
    </Container>
  );
};

export default Loading;
