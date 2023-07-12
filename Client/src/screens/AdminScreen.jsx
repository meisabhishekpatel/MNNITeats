import React, { useEffect } from 'react';
import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import UserList from '../components/Admin/UserList';
import PizzasList from '../components/Admin/PizzasList';
import AddNewPizza from '../components/Admin/AddNewPizza';
import OrderList from '../components/Admin/OrderList';
import { EditPizza } from '../components/Admin/EditPizza';

const AdminScreen = () => {
  const userState = useSelector(state => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem('currentUser') === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
    // eslint-disable-next-line
  }, [])
  const navigate = useNavigate();
  return (
    <>

      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={2}>
            <ButtonGroup vertical style={{ minHeight: "300px" }}>
              <Button style = {{WebkitTextFillColor:"black", backgroundColor: "#FFC529", border:"0px", borderRadius: "5px", marginBottom: "10px", marginTop: "10px"}}onClick={() => navigate('/admin/userlist')}>All Users</Button>
              <Button style = {{WebkitTextFillColor:"black", backgroundColor: "#FFC529", border:"0px", borderRadius: "5px", marginBottom: "10px", marginTop: "10px"}}onClick={() => navigate('/admin/pizzalist')}>All Pizzas</Button>

              <Button style = {{WebkitTextFillColor:"black", backgroundColor: "#FFC529", border:"0px", borderRadius: "5px", marginBottom: "10px", marginTop: "10px"}}onClick={() => navigate('/admin/addnewpizza')}>Add New Pizza</Button>
              <Button style = {{WebkitTextFillColor:"black", backgroundColor: "#FFC529", border:"0px", borderRadius: "5px", marginBottom: "10px", marginTop: "10px"}}onClick={() => navigate('/admin/orderlist')}>All Orders</Button>
            </ButtonGroup>
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="" element={<UserList />} />
              <Route path="userlist" element={<UserList />} />
              <Route path="pizzalist" element={<PizzasList />} />
              <Route path="editpizza/:pizzaId" element={<EditPizza />} />
              <Route path="addnewpizza" element={<AddNewPizza />} />
              <Route path="orderlist" element={<OrderList />} />
            </Routes>

          </Col>
        </Row>
      </Container>

    </>
  );
};

export default AdminScreen;
