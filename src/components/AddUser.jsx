import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap'

const AddNewUser = (props) => {
	const { addUser } = props;
	const [newUser, setNewUser] = useState({
		name: "",
		email: "",
		username: "",
		address:"",
		phone: "",
		website: "",
		company :"",
	});
	console.log(newUser);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value} = e.target;
		if (name === "company") {
			setNewUser((currentUser) => ({ ...currentUser,[name]:{"name":value} }));
		}else if (name==="street"||name === "suite"||name==="city"){
			setNewUser((currentUser) => ({...currentUser, address: { ...currentUser.address,[name]:value}}))
			
			
		}else
		setNewUser((currentUser) => ({ ...currentUser,[name]:value }));
	};
	
	
	const handleSubmit = (event) => {
		event.preventDefault();
		addUser(newUser);
		navigate('/')
	};



	// useEffect(() => {
	// 	inputEl.current?.focus();
	// }, []);

	return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter Name" name="name" value={newUser.name} onChange={handleChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email Address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" name="email" value={newUser.email} onChange={handleChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="Enter username" name="username" value={newUser.username} onChange={handleChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Address</Form.Label>
				<Form.Control type="text" placeholder="Enter address street" name="street"  value={newUser.address.street} onChange={handleChange} />
				<Form.Control type="text" placeholder="Enter address suite" name="suite"  value={newUser.address.suite} onChange={handleChange} />
				<Form.Control type="text" placeholder="Enter address city" name="city"  value={newUser.address.city} onChange={handleChange} />
			</Form.Group>

			<input type="text" name="website" value={newUser.website} onChange={handleChange} />
			<input type="text" name="phone" value={newUser.phone} onChange={handleChange} />

			<input type="text" name="company"  value={newUser.company.name} onChange={handleChange} />

			<input type="submit" value="Add User" />
		</Form>
	);
};

export default AddNewUser;


// name, email, id, address, username, phone, website, company