import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import MenuItem from "@/components/atom/MenuItem";


const Nav = () => {
  const router = useRouter();
  const noticePageRouter = () => {
    router.push("/notice");
  }
  const commPageRouter = () => {
    router.push("/comm");
  }
  const assignPageRouter = () => {
    router.push("/assign");
  }

  return (
    <NavWrap>
      <MenuWrap>
				<MenuItem text="공지사항" routing={noticePageRouter}/>
				<MenuItem text="커뮤니티" routing={commPageRouter}/>
				<MenuItem text="양도게시판" routing={assignPageRouter}/>
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
