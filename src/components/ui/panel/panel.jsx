import styled from "styled-components";
import { Section } from "/src/components/styled";

const Panel = styled(Section)`
  padding: 22px 19px;
  background-color: ${(props) => props.theme.сolorFotTextWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  width: 353px;
  display: block;
`;

export default Panel;
