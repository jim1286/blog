import { FlexRow, LoginModal } from "@/components";
import { H3 } from "@/theme";
import { IconLogin } from "@tabler/icons-react";
import { useState } from "react";
import { Container } from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <FlexRow justifyContent="space-between" alignItems="center">
        <H3 style={{ cursor: "pointer" }}>Plog</H3>
        <IconLogin size={25} cursor="pointer" onClick={() => setIsOpen(true)} />
      </FlexRow>
      <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Container>
  );
};

export default Header;
