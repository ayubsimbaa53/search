import { React } from "react";



export default function ProductCard({ product }) {
  return (
  
    


        <><div className="w-full border-red-200 gap-4 border-slate-500 rounded-[6px] bg-white p-4 shadow-sm dark:bg-[#131B2D] dark:text-white">
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
        LICENSE:{" "}
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



     
    </div><br></br></>


      
  );
}
