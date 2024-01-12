import { styled } from 'styled-components';

export const Container = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.25rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s;

  a:link, a:visited, a:hover, a:active {
    color: inherit;
  }

  &:hover {
    background-color: #333333;
    color: #ffffff;
  }

  &:active {
    background-color: #555555;
    border-color: #555555;
  }

  & + li {
    margin-left: 1rem;
  }
`;