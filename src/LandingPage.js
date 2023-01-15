import React from "react";
import css from "./landingPage.module.css";
const LandingPage = () => {
  const products = [
    {
      id: 121221211121122121,
      name: "Product 1",
      price: 100,
      description: "This is product 1",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 121221211121122122,
      name: "Product 2",
      price: 200,
      description: "This is product 2",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 121221211121122123,
      name: "Product 3",
      price: 300,
      description: "This is product 3",
      image: "https://picsum.photos/200/300",
    },
    {
      id: 121221211121122124,
      name: "Product 4",
      price: 400,
      description: "This is product 4",
      image: "https://picsum.photos/200/300",
    },
  ];
  const handleBuy = (product) => {
    console.log(product);
  };
  return (
    <div className={css.productContainer}>
      {products.map((product) => {
        return (
          <div key={product.id} className={css.card}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.name} />
            <br />
            <button type="button" onClick={() => handleBuy(product)}>
              Buy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default LandingPage;
