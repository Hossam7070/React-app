import { useContext } from "react";
import AddUser from "../components/AddUser";
import { UsersContext } from "../Modules/UserModule";

const AddUserPage = () => {
	const { addUser} = useContext(UsersContext);

	return <AddUser addUser={addUser}/>;
};

export default AddUserPage;
