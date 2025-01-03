import { FlexRow, LoginModal, LogoutModal, SignUpModal } from "@/components";
import { BSS, H3 } from "@/theme";
import { IconKeyOff, IconLogin } from "@tabler/icons-react";
import { useState } from "react";
import { Container } from "./styles";
import { useGetUserQuery } from "@/queries";
import { Popover } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const getUser = useGetUserQuery();
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  return (
    <Container>
      <FlexRow justifyContent="space-between" alignItems="center">
        <H3
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Plog
        </H3>
        {getUser.data ? (
          <Popover content={<BSS>로그아웃</BSS>}>
            <IconKeyOff
              size={25}
              cursor="pointer"
              onClick={() => setLogoutModalOpen(true)}
            />
          </Popover>
        ) : (
          <Popover content={<BSS>로그인</BSS>}>
            <IconLogin
              size={25}
              cursor="pointer"
              onClick={() => setLoginModalOpen(true)}
            />
          </Popover>
        )}
      </FlexRow>
      <LogoutModal
        isOpen={logoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
      />
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenSignUpModal={() => {
          setSignUpModalOpen(true);
        }}
      />
      <SignUpModal
        isOpen={signUpModalOpen}
        onClose={() => setSignUpModalOpen(false)}
      />
    </Container>
  );
};

export default Header;
