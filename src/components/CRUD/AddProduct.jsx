import React, { useState } from "react";
import { Container, Button, Col, Form } from "react-bootstrap";

const AddProduct = ({ addProduct }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [desc, setDesc] = useState("");

    let productsObj = {
        title,
        price,
        image,
        desc,
    };

    return (
        <>
            <Container>
                <Col style={{ margin: "50px" }}>
                    <Form.Control
                        type="url"
                        placeholder="product img"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Col>

                <Col style={{ margin: "50px" }}>
                    <Form.Control
                        type="text"
                        placeholder="product title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Col>

                <Col style={{ margin: "50px" }}>
                    <Form.Control
                        type="number"
                        placeholder="product price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Col>
                <Col style={{ margin: "50px" }}>
                    <Form.Control
                        type="text"
                        placeholder="product desc"
                        onChange={(e) => setDesc(e.target.value)}
                    />
                </Col>

                <Col style={{ margin: "50px" }}>
                    <Button
                        variant="dark"
                        onClick={() => {
                            addProduct(productsObj);
                        }}>
                        Add Product
                    </Button>
                </Col>
            </Container>
        </>
    );
};

export default AddProduct;
