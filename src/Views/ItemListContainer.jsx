import React, { Fragment } from "react";
import ItemListComponent from "../Components/ItemListComponent/ItemListComponent";
import useFetch from "../Utils/useFetch";
import { useParams} from "react-router-dom"

const BASE_URL = "https://fakestoreapi.com/products";

const ItemListContainer = (props) => {
  const {id:category} = useParams();

  const [data, loading] = useFetch(category ? `${BASE_URL}/category/${category}` : BASE_URL);
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <ItemListComponent data={item}/>
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ItemListContainer;
