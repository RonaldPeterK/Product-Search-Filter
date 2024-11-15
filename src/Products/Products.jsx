import React, { useState } from "react";
import "./Products.css";
import Card from "../components/Card";
import ProductsJ from "../db/products.json";

function Products() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(ProductsJ);
  const filterResult = (catItem) => {
    const result = ProductsJ.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  }

  return (
    <>

      {/* Search and Filter */}

      <div className="container ">
        <div className="row justify-content-around d-flex mt-5">
          <div className="col-sm-3">
            <input
              type="text"
              placeholder="Search Products Here..."
              className="form-control border-success border-2 text-success rounded-3"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/*   DropDown Button   */}

          <div className="dropdown col-sm-3 text-end mt-3 mt-sm-0">
            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
              Category
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => setData(ProductsJ)}>All</button></li>
              <li><hr class="dropdown-divider"></hr></li>
              <li><button className="dropdown-item" onClick={() => filterResult('T-Shirts')}>T-Shirts</button></li>
              <li><button className="dropdown-item" onClick={() => filterResult('Trousers')}>Trousers</button></li>
              <li><button className="dropdown-item" onClick={() => filterResult('Watches')}>Watches</button></li>
              <li><button className="dropdown-item" onClick={() => filterResult('Footwear')}>Footwear</button></li>
              <li><button className="dropdown-item" onClick={() => filterResult('Shirts')}>Shirts</button></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Product Mapping and Filter */}

      <div className="container py-4">
        <div className="row">
          {
            data.filter((product) => {
              return search.toLowerCase() === '' ? product
                : product.name.toLowerCase().includes(search)
            })
              .map(product => {
                return (
                  <div className="col-lg-3 p-4" key={product._id}>
                    <Card
                      img={product.img}
                      name={product.name}
                      category={product.category}
                      price={product.price}
                      description={product.description}
                      review={product.review}
                      stock={product.stockQuantity}
                    />
                  </div>
                );
              }
              )
          }
        </div>
      </div>

    </>
  )
}
export default Products;