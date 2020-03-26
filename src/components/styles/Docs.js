import styled from '@emotion/styled';

export const StyledHeading = styled('h1')`
  font-size: 32px;
  line-height: 1.5;
  font-weight: 500;
  border-left: 4px solid #a8b400;
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${props => props.theme.colors.heading};
`;

export const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: red;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

export const StyledMainWrapper = styled.div`
  max-width: 750px;
  color: ${props => props.theme.colors.text};

  a {
    transition: color 0.15s;
    color: ${props => props.theme.colors.link};
  }

  code {
    border: 1px solid #ede7f3;
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 0.9375em;

    background: ${props => props.theme.colors.background};
  }

  @media (max-width: 767px) {
    padding: 0 15px;
  }
`;
