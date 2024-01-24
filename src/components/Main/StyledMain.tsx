import styled from "styled-components";
import { scrollbar } from "../../services/styled/mixins";

export const StyledMain = styled.main`
    height: calc(100vh - 85px - 60px);
    ${scrollbar({})}
    overflow: hidden;
`