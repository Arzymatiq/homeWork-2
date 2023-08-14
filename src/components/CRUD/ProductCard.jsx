import React from "react";
import { Card, Button } from "react-bootstrap";
import Like from "../Like/Like";

const ProductCard = ({ products }) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            {products.map((item) => (
                <div>
                    <Card>
                        <div
                            className="d-flex"
                            style={{
                                width: "50rem",
                                height: "80vh",
                                display: "flex",
                            }}>
                            <Card.Img
                                variant="center"
                                src={item.image}
                                width="500px"
                            />

                            <Card.Body>
                                <div style={{ width: "200px" }}>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.desc}</Card.Text>
                                    <Like />
                                </div>
                            </Card.Body>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
