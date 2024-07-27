import getUser from "../actions/getUser";
import Sidebar from "../components/sidebar/Sidebar";
import UsersList from "./components/UsersList";

const UsersLayout = async ({ children }: { children: React.ReactNode }) => {
	const users = await getUser();
	return (
		<Sidebar>
			<div className="h-full">
				<UsersList items={users} />
				{children}
			</div>
			;
		</Sidebar>
	);
};

export default UsersLayout;
