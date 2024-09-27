import { Link, useParams } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id: productId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/product/${productId}`);
      console.log(data);
      setItem(data);
    };
    fetchProduct();
  }, [productId]);

  return (
    <div>
      <Link to={"/"} className="btn-light alert-dangermy-3 btn">
        Back to Home
      </Link>
      <h1>Product Detail</h1>
      <div key={item._id}>
        <Row>
          <Col md={5}>
            <Image src={item.image} alt={item.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{item.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={item.rating}
                  text={`${item.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroupItem>Price: ${item.price}</ListGroupItem>
              <ListGroupItem>Description: {item.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${item.price}</strong>
                    </Col>
                    <Col>Stock:</Col>
                    <Col>
                      <strong>
                        {item.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    disabled={!item.countInStock}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
