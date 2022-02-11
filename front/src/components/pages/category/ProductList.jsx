import { ProductCard } from '../product/ProductCard';

export const ProductsList = (props) => {
  const { products } = props;

  return (
    <div className='productList'>
      {products.map((product) => (       
        <ProductCard product={product} />
      ))}
    </div>
  );
};
