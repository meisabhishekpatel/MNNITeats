import React from 'react';
import { Row, Col, Container, Button, ButtonGroup } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import UserList from '../components/Admin/UserList';
import PizzasList from '../components/Admin/PizzasList';
import AddNewPizza from '../components/Admin/AddNewPizza';
import OrderList from '../components/Admin/OrderList';
import { useNavigate } from 'react-router-dom';

const AdminScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
          <Col md={4}>
            <ButtonGroup vertical style={{ minHeight: "400px" }}>
              <Button onClick={() => navigate('/admin/userlist')}>All Users</Button>
              <Button onClick={() => navigate('/admin/pizzalist')}>All Pizzas</Button>
              <Button onClick={() => navigate('/admin/addnewpizza')}>Add New Pizza</Button>
              <Button onClick={() => navigate('/admin/orderlist')}>All Orders</Button>
            </ButtonGroup>
          </Col>
          <Col md={8}>
            <Routes>
              <Route path='' element={<UserList />} />
              <Route path="userlist" element={< UserList />} />
              <Route path="pizzalist" element={< PizzasList />} />
              <Route path="addnewpizza" element={< AddNewPizza />} />
              <Route path="orderlist" element={< OrderList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminScreen;
