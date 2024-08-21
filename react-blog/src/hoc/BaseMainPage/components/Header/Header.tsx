import { FlexRow, IconWrap } from "@/components";
import { H3 } from "@/theme";
import { LoginOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <FlexRow justifyContent="space-between" alignItems="center">
        <H3 style={{ cursor: "pointer" }}>Plog</H3>
        <FlexRow gap={15} height="30px" alignItems="center">
          <IconWrap icon={<SearchOutlined />} size={20} />
          <IconWrap icon={<LoginOutlined />} size={20} />
        </FlexRow>
      </FlexRow>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
`;
