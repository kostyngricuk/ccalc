import styled from "styled-components";

const StyledModal = styled.div`
    position: fixed;
    z-index: 4;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-white);
    border: 1px solid #000;
    box-shadow: 0 0 0 100vw rgba(0,0,0,0.65);
    padding: 40px;
    width: calc(100% - 30px);
    max-width: 600px;
`;

export default StyledModal;
