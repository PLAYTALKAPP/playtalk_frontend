import { styled } from "styled-components";
import { PiTicketFill } from "react-icons/pi";
import { useRouter } from "next/router";
import MenuItem from "@/components/atom/MenuItem";

const Header = () => {
	// tailwind.css 적용
	const router = useRouter();
	const indexPageRouter = () => {
		router.push("/");
	}
	const loginPageRouter = () => {
		router.push("/login");
	}
	const joinPageRouter = () => {
		router.push("/join");
	}

  return (
    <HeaderWrap>
      <Logo onClick={indexPageRouter}>
        <PiTicketFill />
        <span className="text-xl font-bold">PlayTalk</span>
      </Logo>
      <Menu>
				<MenuItem text="LOGIN" routing={loginPageRouter}/>
				<MenuItem style="ml-3" text="회원가입" routing={joinPageRouter}/>
      </Menu>
    </HeaderWrap>
  );
};

export default Header;


const HeaderWrap = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
`;

const Menu = styled.div`
	cursor:pointer;
`;

const Logo = styled.div`
  font-size: 30px;
  display: flex;
	align-items: center;
	color: #613ace;
	cursor: pointer;
`;
