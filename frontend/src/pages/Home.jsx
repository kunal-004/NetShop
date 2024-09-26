import { Row, Col } from "react-bootstrap";
import { products } from "../data/product";
import Product from "../components/Product";

const Home = () => {
  return (
    <>
      <Row>
        <h1>Product List</h1>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Home;
