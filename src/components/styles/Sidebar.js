import styled from '@emotion/styled';

export const Sidebar = styled('aside')`
  width: 100%;
  border-right: 1px solid #e1dedd;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 24px;
  position: sticky;
  top: 0;

  background: ${props => props.theme.colors.background};

  .rightSideTitle {
    color: ${props => props.theme.colors.text};
  }

  .rightSideBarUL li a {
    color: ${props => props.theme.colors.text};
  }

  @media only screen and (max-width: 50rem) {
    width: 100%;
    position: relative;
  }
`;

export const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props}>
        {props.children}
      </a>
    </li>
  );
})`
  list-style: none;

  a {
    // color: #675c53;
    // text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${props => 2 + (props.level || 0) * 1}rem;
    // display: block;
    // position: relative;

    &:hover {
      color: ${props => props.theme.colors.link} !important;
    }

    ${props =>
      props.active &&
      `
      color: ${props => props.theme.colors.link}
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`;
