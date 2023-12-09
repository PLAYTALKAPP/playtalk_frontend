const commonButtonStyle = {
	border: "none",
	borderRadius: "5px",
	padding: "10px",
	cursor: "pointer"
}
const styles = {
  done: {
    color: "#333",
    border: "1px solid #613ace",
		backgroundColor: "#fff"
  },
  regist: {
    backgroundColor: "#613ace",
    color: "#ececec",
    border: "none",
  },
  cancel: {
    backgroundColor: "red",
    color: "#fff",
    border: "none",
  },
  default: {
    backgroundColor: "#ececec",
    color: "#333",
    border: "none",
  },
};

type ButtonProps = {
  text: string;
	size?: string;
  variant?: keyof typeof styles; // styles 객체의 key 를 타입으로 갖는다. // done | regist | cancel | default
  routing?: () => void;
};

const Button = ({ text, size, variant = "default", routing }: ButtonProps) => {
	const buttonClassName = `${size}`
	// tailwind 버튼사이즈
	// w-20 // w-40
	// 50% : w-2/4  // 40% : w-2/5
  return (
    <div>
      <button className={buttonClassName} style={{ ...commonButtonStyle, ...styles[variant] }} onClick={routing}>
        {text}
      </button>
    </div>
  );
};


Button.defaultProps = { // props 를 넘기지 않았을때, undefined 일때 props 기본값 설정
  variant: "default",
	size: 'w-32'
};

export default Button;