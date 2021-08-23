import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export const DisplayProduct = () => {
  const { products, removeProducts } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-4">
      {products.length > 0 ? (
        <>
          {products.map((product) => (
            <ListGroupItem className="d-flex" key={product.id}>
              <strong>{product.name}</strong>
              <div className="ml-auto">
                <Link
                  className="btn btn-warning mr-1"
                  to={`/update/${product.id}`}
                >
                  Update
                </Link>
                <Button
                  onClick={() => removeProducts(product.id)}
                  color="danger"
                >
                  Delete
                </Button>
              </div>
            </ListGroupItem>
          ))}
        </>
      ) : (
        <h4 className="text-center">No Products</h4>
      )}
    </ListGroup>
  );
};

// import React from "react";

// function displayProduct() {
//   const handleAddToCart = () => {
//     props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
//   };

//   return (
//     <div className="product-content">
//       <h3>Products</h3>
//       <div className="product-image">
//         <img src={product.image} alt="product"></img>
//       </div>
//       <div className="product-info">
//         <ul>
//           <li>
//             <h4>{product.name}</h4>
//           </li>
//           <li>
//             Price: $<b>{product.price}</b>
//           </li>
//           <li>
//             Size: <b>{product.size}</b>
//           </li>
//           <li>
//             Color: <b>{product.color}</b>
//           </li>
//           <li>
//             Quantity: <b>{product.quantity}</b>
//           </li>
//           <li>
//             Description:
//             <div>{product.description}</div>
//           </li>
//           <li>
//             <button onClick={handleAddToCart} className="button primary">
//               Add to Cart
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

export default DisplayProduct;
