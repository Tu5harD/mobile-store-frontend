import ProductDetailsCaroous from "@/components/ProductDetailsCaroous";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";
import ReactMarkdown from "react-markdown";
import { fetchDataFromApi } from "@/utils/api";
import { AiOutlineHeart } from "react-icons/ai";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const maxResult = 3;
const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError , setShowError] = useState(false);
  const dispatch = useDispatch()

  const p = product?.data?.[0]?.attributes;
  const notify = () => {
    toast.success('🦄 Success. Check Your Cart!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
      
  }

  const error = ()=>{
    toast.error('🦄 Stoarge selection is required!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  return (
    <div className=" w-full md:py-20">

      <Wrapper>
        <ToastContainer/>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full">
            <ProductDetailsCaroous images={p.image.data} />
          </div>
          <div className=" flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>
            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>
            {/* Product SubTitle */}
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* Product Size Range */}
            <div className=" mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Storage</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>

              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p.size.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-medium ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } 
                    ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>

              {/* Show Error */}

              { showError && <div className=" text-red-600 mt-2">
                Stoarge selection is required{error()}
              </div> }

            </div>

            {/* Button */}
            <button className=" py-4 w-full rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:opacity-75 mb-3" onClick={()=>{
              if(!selectedSize){
                setShowError(true);
                document.getElementById("sizesGrid").scrollIntoView({block:"center",behavior:"smooth"})
              }else{
                dispatch(addToCart( {
                  ...product?.data?.[0],
                  selectedSize,
                  oneQuntityPrice : p.price,
                }))
                notify();
              }
            }}>
              Add to Cart
            </button>
            <button className=" py-4 w-full flex justify-center items-center gap-2 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 hover:opacity-75 mb-3">
              WhishList <AiOutlineHeart size={20} />
            </button>

            <div>
              <div className=" text-lg font-bold mb-5">Product Details</div>
              <div className=" markdown text-md mb-5">
                <ReactMarkdown>
                {p.description}
                </ReactMarkdown>
                
              </div>
              
            </div>
          </div>
        </div>
        <RelatedProduct products={products}/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
