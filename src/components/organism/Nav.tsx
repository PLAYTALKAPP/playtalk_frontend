import { useEffect, useState } from "react";
import styled from "styled-components";
import MenuItem from "@/components/atom/MenuItem";

const Nav = () => {
  return (
    <NavWrap>
      <MenuWrap>
				<MenuItem text="공지사항"/>
				<MenuItem text="커뮤니티"/>
				<MenuItem text="양도게시판"/>
      </MenuWrap>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const MenuWrap = styled.div`
  cursor: pointer;
  margin: auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
