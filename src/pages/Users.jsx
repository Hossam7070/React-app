import { useContext } from "react";
import User from "../components/userCard"
import {UsersContext} from "../Modules/UserModule"
import {Table,Dropdown} from "react-bootstrap"

const Users = () => {
	const {users} =
		useContext(UsersContext);

    return <>
    <div>
    <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="/add" active>
        Add new user
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    <Table >
    <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Profile</th>
      <th>Email</th>
      <th>Address</th>
      <th>EDIT</th>
      <th>DELETE</th>
    </tr>
  </thead>
  <tbody>
  
				{users ? (
					users.map((user) => (
						
						<User  className="col-6"  key={user.id} {...user} />
					))
				) : (
					<tr></tr>
				)}
                 </tbody>
			</Table>
            </div>
    </>

};

export default Users;