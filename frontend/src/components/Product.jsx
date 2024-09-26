import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      <Card className="my-3 p-3 rounded flex-fill" key={product._id}>
        <Link to={`product/${product._id}`}>
          <Card.Img
            src={product.image}
            alt={product.title}
            variant="top"
            className="card-img-top"
          />
        </Link>
        <Card.Body className="d-flex flex-column">
          <Link to={`product/${product._id}`}>
            <Card.Title as={"div"} className="flex-grow-1 product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>

          <Card.Text as={"div"}>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>

          <Card.Text as={"h3"}>₹{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
