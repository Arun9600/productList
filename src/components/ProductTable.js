import ProductCategory from "./ProductCategory";
import ProductDatas from "./ProductDatas";
let ProductTable = ({ products, search, stocks }) => {
  let datas = [];
  let empty = null;
  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(search.toLowerCase()) === -1) {
      return;
    }
    if (stocks && !product.stocked) {
      return;
    }
    if (product.category !== empty) {
      datas.push(
        <ProductCategory category={product.category} key={product.category} />
      );
    }
    datas.push(<ProductDatas product={product} key={product.name} />);
    empty = product.category;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{datas}</tbody>
      </table>
    </>
  );
};

export default ProductTable;
