import { useEffect, useState } from "react";
import Brands from "./Brands";
import Categories from "./Categories";
import Products from "./Products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    function fetchInitialData() {
      fetch(
        "https://my-json-server.typicode.com/ayubsimbaa53/data-ivves/products"
      )
        .then((response) => response.json())
        .then((response) => setProducts(response));
      fetch(
        "https://my-json-server.typicode.com/ayubsimbaa53/data-ivves/Brands"
      )
        .then((response) => response.json())
        .then((response) => setBrands(response));
      fetch(
        "https://my-json-server.typicode.com/ayubsimbaa53/data-ivves/Categories"
      )
        .then((response) => response.json())
        .then((response) => setCategories(response));
    }

    fetchInitialData();
  }, []);

  useEffect(() => {
    let brandsQuery = "";
    let categoriesQuery = "";
    if (selectedBrands.length > 0) {
      selectedBrands.map(
        (selectedBrand) => (brandsQuery += "&brand=" + selectedBrand)
      );
    }
    if (selectedCategories.length > 0) {
      selectedCategories.map(
        (selectedCategory) =>
          (categoriesQuery += "&category.name=" + selectedCategory)
      );
    }
    fetch(
      `https://my-json-server.typicode.com/ayubsimbaa53/data-ivves/products?q=${searchTerm}` +
        brandsQuery +
        categoriesQuery
    )
      .then((response) => response.json())
      .then((response) => setProducts(response));
  }, [searchTerm, selectedBrands, selectedCategories]);

  function updateSelectedBrands(e) {
    if (selectedBrands.indexOf(e.target.value) > -1) {
      const updatedSelectedBrands = selectedBrands.filter(
        (selectedBrand) => selectedBrand !== e.target.value
      );
      setSelectedBrands(updatedSelectedBrands);
    } else {
      setSelectedBrands((selectedBrands) => [
        ...selectedBrands,
        e.target.value,
      ]);
    }
  }

  const updateSelectedCategories = (e) => {
    if (selectedCategories.indexOf(e.target.value) > -1) {
      const updatedSelectedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== e.target.value
      );
      setSelectedCategories(updatedSelectedCategories);
    } else {
      setSelectedCategories((selectedCategories) => [
        ...selectedCategories,
        e.target.value,
      ]);
    }
  };

  return (
    <>
      <div className="mx-4">
        <input
          type="search"
          name="search"
          placeholder="Search for tools"
          className="w-full p-4 text-sm rounded-lg bg-transparent border-solid border-2 border-black bg-white"
          onChange={(e) => setSearchTerm(e.target.value)}
          list="categories"
        />
      </div>
      <div className="mx-4">
        <Brands
          selectedBrands={selectedBrands}
          brands={brands}
          updateSelectedBrands={updateSelectedBrands}
        />

        <Categories
          selectedCategories={selectedCategories}
          categories={categories}
          updateSelectedCategories={updateSelectedCategories}
        />
      </div>

      {searchTerm.length > 0 ? (
        <div className="text-lg mt-8"> search {searchTerm} </div>
      ) : (
        ""
      )}
      <div className="mx-4">
        <Products products={products} />
      </div>
    </>
  );
}
