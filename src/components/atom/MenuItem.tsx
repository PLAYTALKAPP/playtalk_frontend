type MenuItemProps = {
	style?: string;
	text: string;
	routing?: ()=> void;
}

const MenuItem = ({style, text, routing}: MenuItemProps) => {
	return(
		<span className={style} onClick={routing}>{text}</span>
	)
}

export default MenuItem;