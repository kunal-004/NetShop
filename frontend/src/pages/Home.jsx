import { Row, Col } from "react-bootstrap";
import { products } from "../data/product";

const Home = () => {
  return (
    <>
      <Row>
        <h1>Product List</h1>
        {products.map((product) => {
          return (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <h3>{product.name}</h3>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
