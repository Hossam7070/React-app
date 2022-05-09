import { useState ,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import { useParams } from "react-router-dom";
const EditUser = (props) => {
    const navigate = useNavigate();
    const {editUser} = props;
    const { id } = useParams();
    
    const [User, setUser] = useState({
            id: id,
             name: "",
            email: "",
            username: "",
            address:"",
            phone: "",
            website: "",
            company :{
                name:""
            },
      
    });

    const handleChange = (e) => {
		const { name, value} = e.target;
		setUser((currentUser) => ({ ...currentUser,[name]:value }));
	};
    const handleSubmit = (event) => {
		event.preventDefault();
		editUser(id,User);
		navigate('/')
	};
    return (
		<Form onSubmit={handleSubmit}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Name</Form.Label>
				<Form.Control type="text" placeholder="Enter Name" name="name" value={User.name} onChange={handleChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email Address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" name="email" value={User.email} onChange={handleChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Username</Form.Label>
				<Form.Control type="text" placeholder="Enter username" name="username" value={User.username} onChange={handleChange} />
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Address</Form.Label>
				<Form.Control type="text" placeholder="Enter address street" name="address"  value={User.address.street} onChange={handleChange} />
				<Form.Control type="text" placeholder="Enter address suite" name="address"  value={User.address.suite} onChange={handleChange} />
				<Form.Control type="text" placeholder="Enter address city" name="address"  value={User.address.city} onChange={handleChange} />
			</Form.Group>

			<input type="text" name="website" value={User.website} onChange={handleChange} />
			<input type="text" name="phone" value={User.phone} onChange={handleChange} />

			<input type="text" name="company"  value={User.company.name} onChange={handleChange} />

			<input type="submit" value="Edit User" />
		</Form>
        
        )}


export default EditUser;