import { FlexRow, LoginModal, LogoutModal } from "@/components";
import { H3 } from "@/theme";
import { IconKeyOff, IconLogin } from "@tabler/icons-react";
import { useState } from "react";
import { Container } from "./styles";
import { useGetUserQuery } from "@/queries";

const Header = () => {
  const getUser = useGetUserQuery();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);

  return (
    <Container>
      <FlexRow justifyContent="space-between" alignItems="center">
        <H3 style={{ cursor: "pointer" }}>Plog</H3>
        {getUser.data ? (
          <IconKeyOff
            size={25}
            cursor="pointer"
            onClick={() => setLogoutModalOpen(true)}
          />
        ) : (
          <IconLogin
            size={25}
            cursor="pointer"
            onClick={() => setLoginModalOpen(true)}
          />
        )}
      </FlexRow>
      <LogoutModal
        isOpen={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </Container>
  );
};

export default Header;
