import { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../context/storeContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItem, addToCart, removeFromCart, url } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img
          src={url + "/images/" + image}
          alt="food img"
          className="food-item-image"
        />
        {!cartItem[id] ? (
          <span
            className="material-symbols-outlined add"
            onClick={() => addToCart(id)}
          >
            add
          </span>
        ) : (
          <div className="food-item-counter">
            <i
              className="bi bi-dash-circle-fill red-btn"
              onClick={() => removeFromCart(id)}
            ></i>
            <p>{cartItem[id]}</p>
            <i
              className="bi bi-plus-circle-fill green-btn"
              onClick={() => addToCart(id)}
            ></i>
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className="rating-star-box">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
