import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { deleteUser, getAllUsers } from '../../actions/userAction';
import Loader from './../Loader';
import Error from './../Error';
import { AiFillDelete } from 'react-icons/ai'
// import { deletePizza } from '../../actions/pizzaAction';

const UserList = () => {
  const userState = useSelector(state => state.getAllUsersReducer)
  const { loading, error, users } = userState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      <h1>User List</h1>
      {loading && (<Loader />)}
      {error && (<Error error="Error while fetching users" />)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>USER ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><AiFillDelete
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => {
                    dispatch(deleteUser(user._id))
                  }} /> </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
