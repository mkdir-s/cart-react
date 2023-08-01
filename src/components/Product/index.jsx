import "./style.scss";
import priceFormatter from './../../utils/priceFormatter';

import Count from "../Count";
import ButtonDelete from "../ButtonDelete";

const Product = ({
  product,
  deleteProduct,
  increase,
  decrease,
  changeValue,
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt="Apple MacBook Air 13" />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          id={id}
          changeValue={changeValue}
        />
      </div>
      <div className="product__price">
        {priceFormatter(priceTotal)} руб.</div>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default Product;
