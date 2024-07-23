import { IconType } from "react-icons";

interface AuthSocialButtonProps {
	Icon: IconType;
	onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = (props) => {
	return (
		<button
			type="button"
			onClick={props.onClick}
			className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-500 hover:bg-gray-50 focus:outline-offset-0"
		>
			{<props.Icon />}
		</button>
	);
};

export default AuthSocialButton;
