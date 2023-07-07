import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { Table } from 'react-bootstrap'
import { deletePizza, getAllPizzas } from '../../actions/pizzaAction.js';
import Loader from '../../components/Loader.jsx';
import Error from '../TopBar.jsx';
import { Link } from 'react-router-dom';

const PizzasList = () => {
  const dispatch = useDispatch();
  const pizzastate = useSelector(state => state.getAllPizzaReducer)
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      {loading ? (<Loader />)
        : error ? (<Error>Error while fetching pizzas</Error>)
          : (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S/n</th>
                    <th>Pizza Name</th>
                    <th>Prices</th>
                    <th>Category</th>
                    <th>Store</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    pizzas && pizzas.map(pizza => (
                      <tr>
                        <td><img src={pizza.image} alt="logo" width="100px" height="100px" /></td>
                        <td>{pizza.name}</td>
                        <td>Small : {pizza.prices[0]["small"]}
                          <br />
                          Medium : {pizza.prices[0]["medium"]}
                          <br />
                          Large : {pizza.prices[0]["large"]}
                        </td>
                        <td>{pizza.category}</td>
                        <td>{pizza.store}</td>
                        <td>
                          <Link to={`/admin/editpizza/${pizza._id}`}>
                            <AiFillEdit style={{ cursor: 'pointer' }} />
                          </Link>
                          &nbsp;
                          <Link>
                            <AiFillDelete
                              style={{ color: 'red', cursor: 'pointer' }}
                              onClick={() => {
                                dispatch(deletePizza(pizza._id))
                              }}
                            />
                          </Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
            </div>
          )}
    </>
  );
};

export default PizzasList;
