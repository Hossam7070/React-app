
import { Button, Modal, ListGroup } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import {Link} from 'react-router-dom'
import { useState} from "react";
import logo from '../assets/avatar-1577909_960_720.webp'

const UserCard = (props) => {
    const { name, email, id, address, username, phone, website, company } = props
    console.log(props)
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log('hii')

    return <>
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <div
                    style={{ height: "10vh" }}
                >
                    <Button variant="primary" onClick={handleShow}>
                        Show User Info
                    </Button>
                </div>
                <Modal show={showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt=""
                                src={logo}
                            /></Figure>
                        <ListGroup>
                            <ListGroup.Item>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Email:</div>
                                    {email}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Phone:</div>
                                    {phone}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Username:</div>
                                    {username}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item><div className="ms-2 me-auto">
                                <div className="fw-bold">website:</div>
                                {website}
                            </div></ListGroup.Item>
                            <ListGroup.Item>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Company:</div>
                                    {company.name}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Address:</div>
                                    {address.street} St {address.suite} {address.city}
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
            <td>{email}</td>
            <td>{address.street} St {address.suite} {address.city}</td>
            <td>
                <Link to={`/edit/${id}`}>
                <Button variant="secondary">Edit</Button>
                </Link>
            </td>
            <td>
                <Button variant="secondary">Delete</Button>
            </td>
        </tr>

    </>
}


export default UserCard;