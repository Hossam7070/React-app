import { useContext } from "react";
import EditUser from "../components/EditUser";
import { UsersContext } from "../Modules/UserModule";

const EditUserPage = () => {
	const { editUser} = useContext(UsersContext);

	return <EditUser editUser={editUser} />;
};

export default EditUserPage;