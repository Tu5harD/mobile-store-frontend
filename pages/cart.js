import CartItems from "@/components/CartItems";
import Wrapper from "@/components/Wrapper";
import { data } from "autoprefixer";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const subtotal = useMemo(()=>{
    return cartItems.reduce((total,val)=> total + val.attributes.price, 0)
  },[cartItems])
  return (
    <div className=" w-full md:my-20">
      {cartItems.length > 0 && (
        <Wrapper>
          {/* Heading Section Start*/}
          <div className=" text-center max-w-[800px] mx-auto md:mt-0">
            <div className=" text-[20px] md:text-[34px] mb-5 font-semibold">
              Shoping Cart
            </div>
          </div>
          {/* Heading Section End*/}

          {/* Cart Section Part Start*/}
          <div className=" flex flex-col md:flex-row gap-12 py-10">
            {/* Left Div */}
            <div className=" flex-[2]">
              <div className=" text-lg font-bold">
                Cart Items
                {cartItems.map((item) => (
                  <CartItems 
                  key={item.id } data={item}
                  />
                ))}
                {/* <CartItems />
                <CartItems /> */}
              </div>
            </div>
            {/* Right Div */}
            <div className=" flex-[1] ">
              <div className=" text-lg font-bold sticky top-[50px]">
                Summary
                <div className=" p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className=" flex justify-between">
                    <div className=" uppercase text-md md:text-lg font-medium text-black">
                      Subtotal
                    </div>
                    <div>RS {subtotal}</div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam et dolore voluptate repellendus porro voluptates
                    veniam, fugit facilis ipsam iusto nisi, quo similique
                    provident mollitia pariatur fugiat autem quia. Sed.
                  </div>
                </div>
                {/* Button */}
                <button className=" py-4 w-full rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 hover:opacity-75 mb-3">
                  Checkout
                </button>
              </div>
            </div>
          </div>
          {/* Cart Section Part End*/}
        </Wrapper>
      )}

      {cartItems.length == 0 && (
        <Wrapper>
          {/* Empty Screen Page */}

          <div className=" flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className=" w-[300px] md:w-[500px]"
            />
            <span className=" text-xl font-bold">Your cart is empty</span>
            <span className=" text-center mt-4">
              Looks like you have not added anything in your cart.
              <br />
              Go ahead and explore top categories.
            </span>
            <Link
              href="/"
              className=" py-4 px-8 rounded-full text-white text-lg bg-black font-medium transition-transform active:scale-95 my-5 hover:opacity-75"
            >
              Continue Shopping
            </Link>
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default Cart;
