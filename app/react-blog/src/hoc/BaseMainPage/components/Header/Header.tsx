import { FlexRow, LoginModal } from "@/components";
import { H3 } from "@/theme";
import { IconLogin, IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import styled from "styled-components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <FlexRow justifyContent="space-between" alignItems="center">
        <H3 style={{ cursor: "pointer" }}>Plog</H3>
        <FlexRow gap={15} height="30px" alignItems="center">
          <IconSearch size={25} cursor="pointer" />
          <IconLogin
            size={25}
            cursor="pointer"
            onClick={() => setIsOpen(true)}
          />
        </FlexRow>
      </FlexRow>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  padding: 20px 100px;
`;
