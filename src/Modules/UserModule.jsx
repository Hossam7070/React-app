import { useState, useEffect, useMemo, createContext, useCallback } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users"
import EditUser from "../pages/EditUser"
import AddUser from "../pages/AddNewUser"

export const UsersContext = createContext();

const UserModule = () => {
	console.log('hii')
	const [users, setUsers] = useState();

	const addUser = (user) => {

		setUsers((currentUsers) => [
			...currentUsers,
			{ ...user, id: currentUsers.length + 1 },
		]);
	};

	const editUser = useCallback((userId, edited) => {
		let user = users.find(
			usr => usr.id === +userId
		)
		setUsers((currentUsers) => [
			currentUsers[user] = edited,

			...currentUsers.filter(user => user.id !== +userId)
		].sort((a, b) => {
			return (a.id - b.id);
		})
		)

			;

	}, [users])


	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
			setUsers(res.data);
		})
	}, []);





	const contextValue = useMemo(
		() => ({
			users,
			addUser,
			editUser
		}),
		[users, editUser]
	);


	return (
		<UsersContext.Provider value={contextValue}>
			<Routes>
				<Route index element={<Users />} />
				<Route path="add" element={<AddUser />} />
				<Route path="edit/:id" element={<EditUser />} />
			</Routes>
		</UsersContext.Provider>
	)
}




export default UserModule;