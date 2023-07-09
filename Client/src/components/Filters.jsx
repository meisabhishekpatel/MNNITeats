import React, { useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterPizza } from "../actions/pizzaAction";
import "../App.css";

const Filters = () => {
    const [searchkey, setsearchkey] = useState("");
    const [category, setcategory] = useState("all");
    const dispatch = useDispatch();
    return (
        <div className="p-4  mt-4"  >
            <Form >
                <Row  >
                    <Col>
                        <Form.Control
                            style={{ backgroundColor: "#FFC529", border: "solid black", textAlign: "center", WebkitTextFillColor: "gray", fontWeight: "bold", fontFamily: "cursive"}}
                            value={searchkey}
                            onChange={(e) => setsearchkey(e.target.value)}
                            placeholder="Search Item"

                        />
                    </Col>
                    <Col>
                        <select

                            style={{ backgroundColor: "#FFC529", border: "solid black", WebkitTextFillColor: "gray", fontWeight: "bold", fontFamily: "cursive"}}
                            className="form-select"
                            value={category}
                            onChange={(e) => setcategory(e.target.value)}
                        >
                            <option style={{ color: "#FFC529", textAlign: "center" }}>All</option>
                            <option style={{ color: "#FFC529", textAlign: "center" }}>Veg</option>
                            <option style={{ color: "#FFC529", textAlign: "center" }}>Non-Veg</option>
                            <option style={{ color: "#FFC529", textAlign: "center" }}>Beverages</option>
                        </select>
                    </Col>
                    <Col>
                        <Button style={{ backgroundColor: "#FFC529", border: "solid black", textAlign: "center", WebkitTextFillColor: "black", fontWeight: "bold", fontFamily: "cursive" }}
                            onClick={() => {
                                dispatch(filterPizza(searchkey, category));
                            }}
                        >
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Filters;