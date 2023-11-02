import React from "react";
import Title from "../components/Title";
// Styled component imp
import styled from "styled-components";
import { ButtonStyle } from "./ButtonStyle";

const UserList = styled.ul`
  padding: 0;
  margin: 0;

  & li:nth-child(even) {
    /* background: red; */
    background: #eee;
    &:hover {
      background: #cccc;
    }
  }
`;

const UserListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  & span {
    font-weight: bold;
  }
`;
const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  margin-right: 10px;
`;

export default function StyledComponent() {
  return (
    <div>
      <Title text="Styled Component" />

      {/* Styled component Ex: 1 */}
      <UserList>
        <UserListItem>
          <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" />
          <span>John Doe</span>
        </UserListItem>
        <UserListItem>
          <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" />
          <span>John Doe</span>
        </UserListItem>
        <UserListItem>
          <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" />
          <span>John Doe</span>
        </UserListItem>
        <UserListItem>
          <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" />
          <span>John Doe</span>
        </UserListItem>
        <UserListItem>
          <UserAvatar src="https://avatars.githubusercontent.com/u/36979420?v=4" />
          <span>John Doe</span>
        </UserListItem>
      </UserList>
      <ButtonStyle primary>Click</ButtonStyle>
      <ButtonStyle>Click</ButtonStyle>
    </div>
  );
}
