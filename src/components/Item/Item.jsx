import "./Item.css";
import { ItemBuy } from "../ItemBuy/ItemBuy";
import { ItemImage } from "../ItemImage/ItemImage";

export const Item = ({product}) => {
  return (
    <div className="item">
      <div className="item-details">
        <ItemImage image={product.img} />
        <span className="item-title">{product.name}</span>
        <div className="item-buy">
          <ItemBuy product={product} />
        </div>
      </div>
    </div>
  );
};
