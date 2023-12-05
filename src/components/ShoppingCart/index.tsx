import React from "react";
import "./styles.css";
import { RootState, actions, useAppSelector } from "../../store/root.store";
import { authorData } from "../../services/authorData";
import { genreData } from "../../services/genreData";
import { Link, useNavigate } from "react-router-dom";
import { CartEntity } from "../../store/cart/cart.entity";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state: RootState) => state.cart.cart);

  const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const getAuthor = (id: number) => {
    const findAuthor = authorData.find((item) => item.id === id);
    return findAuthor?.name;
  };

  const getGenre = (id: number) => {
    const findGenre = genreData.find((item) => item.id === id);
    return findGenre?.name;
  };

  const addProdcutToCart = async (cartData: CartEntity) => {
    await actions.cart.productAdd(cartData);
  };

  const removeProductFromCart = async (id: number) => {
    await actions.cart.productDelete(id);
  };

  const onBookClick = (id: number) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                className="cart-item-img"
                src={item.cover_image}
                alt="book-cover-alt"
                onClick={() => onBookClick(item.id)}
              />
              <div>
                <h4>{item.title}</h4>
                <p className="cart-item-desc">{item.describe}</p>
                <p>
                  <b>Author: </b>
                  {getAuthor(item.author_id)}
                </p>
                <p>
                  <b>Genre: </b>
                  {getGenre(item.genre_id)}
                </p>
                <b>Price: ${item.price}</b>
                <div className="cart-item-action-handlers">
                  <button
                    className="item-actions-button"
                    onClick={() => addProdcutToCart(item)}
                  >
                    +
                  </button>
                  <p>{item.qty}</p>
                  <button
                    className="item-actions-button"
                    onClick={() => removeProductFromCart(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>
            Cart is Empty! Visit <Link to={"/books"}>Books</Link> to shop!
          </p>
        )}
      </div>
      <div className="cart-summary">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
