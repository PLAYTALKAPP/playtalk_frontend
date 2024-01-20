import styled from "styled-components";
/*
  done : 등록, 로그인, 파일첨부 등의 버튼 
  cancel : 취소 , 삭제 버튼 (+이메일 인증등의 중요 인증확인 버튼)
  default : 그 외 버튼
 */
const styles = {
  done: { 
    backgroundColor: "#613ace",
    color: "#fff",
    border: "none",
  },
  cancel: {
    backgroundColor: "#E0475B",
    color: "#fff",
    border: "none",
  },
  default: {
    backgroundColor: "#fff",
    color: "#666",
    border: "1px solid #DCDCDC",
  },
};

const hoverColors = {
    done: "#9376E6",  
    cancel: "#EC7181", 
    default: "#F6F5FF"
}

type HoverColors = typeof hoverColors;

const StyledButton = styled.button<{ variant?: keyof HoverColors }>`
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
  background-color: ${({ variant }) => styles[variant||"default"].backgroundColor};
  color: ${({ variant }) => styles[variant||"default"].color};
  border:${({ variant }) => styles[variant||"default"].border};
  &:hover {
    background-color: ${({ variant }) => hoverColors[variant || "default"]};
  }`
;


type ButtonProps = {
  text: string;
  size?: string;
  variant?: keyof typeof styles; // styles 객체의 key 를 타입으로 갖는다. // done | regist | cancel | default
  onClick?: () => void;
};

const Button = ({ text, size, variant = "default", onClick }: ButtonProps) => {
    const buttonClassName = `${size}`
    // tailwind 버튼사이즈
    // w-20 // w-40
    // 50% : w-2/4  // 40% : w-2/5
  return (
    <div>
       <StyledButton variant={variant} className={buttonClassName} onClick={onClick}>{text}</StyledButton>
    </div>
  );
};


Button.defaultProps = { // props 를 넘기지 않았을때, undefined 일때 props 기본값 설정
  variant: "default",
    size: 'w-32'
};

export default Button;