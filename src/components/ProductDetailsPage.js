import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetailsPage() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/ayubsimbaa53/data-ivves/products/${id}`
    )
      .then((response) => response.json())
      .then((response) => setProduct(response));
  }, []);

  return (
    <><div className="px-4 mt-10">
      <Link
        className="shadow-lg bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 py-2 px-4 rounded-md text-white text-lg"
        to="/"
      >
        <span className="text-lg ">Back</span>
      </Link>
      
        </div>
        <br></br>
    
    
    <div className="flex w-full flex-col gap-4  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
       
          
        

        <div className="w-full rounded-[6px] bg-white p-4 shadow-sm dark:bg-[#131B2D] dark:text-white">
        <h4 className="text-base font-semibold">
            ENTITY:{" "}
            <span className="font-normal">
              {product.ENTITY}
            </span>
          </h4>
          <h4 className="text-base font-semibold">
            TOOL-NAME:{" "}
            <span className="font-normal">
            {product.NAME}
            </span>
          </h4>
          <h4 className="text-base font-semibold">
            FOCUS:{" "}
            <span className="font-normal">
            {product.FOCUS}
            </span>
          </h4>
          <h4 className="text-base font-semibold">
          DESCRIPTION:{" "}
            <span className="font-normal">
            {product.DESCRIPTION}
            </span>
          </h4>
          <h4 className="mt-1 text-base font-semibold">
            REQUIREMENTS:{" "}
            <span className="font-normal">
            {product.REQUIREMENTS}
            </span>
          </h4>
          <h4 className="mt-1 text-base font-semibold">
          RESTRICTIONS:{" "}
            <span className="font-normal">
            {product.RESTRICTIONS}
            </span>
          </h4>
          <h4 className="mt-1 text-base font-semibold">
          LICENCE:{" "}
            <span className="font-normal">
            {product.LICENSE}
            </span>
          </h4>
          <h4 className="mt-1 text-base font-semibold">
          INTEGRATION:{" "}
            <span className="font-normal">
            {product.INTEGRATION}
            </span>
          </h4>
          
            
            
           
          </div>

          
      </div></>
  );
}
