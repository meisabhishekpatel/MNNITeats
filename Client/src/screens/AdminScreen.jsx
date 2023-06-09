import React from 'react';
import {Row, Col, Container, Button, ButtonGroup} from 'react-bootstrap';
import {Routes, Route} from 'react-router-dom';
import UserList from '../components/Admin/UserList';
import PizzasList from '../components/Admin/PizzasList';
import AddNewPizza from '../components/Admin/AddNewPizza';
import OrderList from '../components/Admin/OrderList';
const AdminScreen = ({history}) => {
  return (
    <>
    <Container>
      <Row>
        <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
        <Col md={4}>
        <ButtonGroup vertical style={{minHeight:"400px"}}>
      <Button onClick={() => history.push('/admin/userlist')}>All Users</Button>
      <Button onClick={() => history.push('/admin/pizzalist')}>All Pizzas</Button>

      <Button onClick={() => history.push('/admin/addnewpizza')}>Add New Pizza</Button>
      <Button onClick={() => history.push('/admin/orderlist')}>All Orders</Button>
    </ButtonGroup>
        </Col>
        <Col md={8}>
            <Routes>
                <Route path ="/admin/userlist" element={< UserList/>}/>
                <Route path ="/admin/pizzalist" element={< PizzasList/>}/>
                <Route path ="/admin/addnewpizza" element={< AddNewPizza/>}/>
                <Route path ="/admin/orderlist" element={< OrderList/>}/>
            </Routes>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default AdminScreen;
