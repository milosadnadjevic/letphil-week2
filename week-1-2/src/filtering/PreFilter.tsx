import ProblemCard from "../components/ProblemCard";

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: true },
    { id: 2, name: "Pen", inStock: false },
    { id: 3, name: "Backpack", inStock: true },
  ];
  const ProductItem = (product) => {
    return <p>{product.name}</p>
  }
const inStockProducts = products.filter(product => product.inStock === true)


  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
     
    </ProblemCard>
  );
};
