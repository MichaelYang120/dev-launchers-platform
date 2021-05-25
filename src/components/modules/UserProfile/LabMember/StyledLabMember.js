import styled from "styled-components";

import theme from "../../../../styles/theme.js";

export const Portal = styled.div`
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > * {
    padding: 5px;
  }
  padding: 15px 0;
  border: 1px solid black;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  border-bottom: 0.15rem solid black;
`;

export const SignUpButton = styled.button`
  margin-bottom: 50px;
  width: 70%;
  cursor: pointer;
  font-weight: bold;
  font-family: ${theme.fonts.headline};
  color: ${theme.colors.NEUTRAL_1};
  /* background-color: ${theme.colors.ACCENT_4}; */
  border: none;
  border: 0.2rem solid ${theme.colors.NEUTRAL_1};
  min-height: 5rem;
  font-size: 1.5rem;

  &:hover {
    color: ${theme.colors.NEUTRAL_1};
    border-color: ${theme.colors.ACCENT_2};
  }
`;

//Hi, this is a comment from Gautham