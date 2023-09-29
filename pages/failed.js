import Wrapper from "@/components/Wrapper";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
const Failed = () => {
  return (
    <div className=" min-h-[750px] lg:min-h-[750px] flex items-center ">
      <Wrapper>
        <div className=" flex justify-center items-center my-5 md:my-20">
          <Image
            src="/failed.avif"
            width={300}
            height={300}
            className="w-[300px] md:w-[500px]"
          />
        </div>
        <div className=" max-w-[600px] rounded-lg p-5 border border-black mx-auto flex flex-col items-center">
          <div className=" text-2xl font-bold">Payment Failed</div>
          <div className=" text-base mt-5">
            {" "}
            For any product related query, drop an email to
          </div>
          <div className=" flex flex-row justify-center items-center gap-1 md:gap-5 max-w-[600px]">
            <AiOutlineMail width={20} />
            <Link href="/" className=" underline">
              {" "}
              shoponlinecontact@shop.com
            </Link>
          </div>
          <Link
            href="/"
            className=" font-bold mt-5 text-white py-4 px-5 active:scale-95 bg-black rounded-full"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Failed;
