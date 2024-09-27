import { Row, Col } from "react-bootstrap";
// import { products } from "../data/product";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchdata();
  }, [products]);

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
