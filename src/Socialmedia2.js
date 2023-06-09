import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BsFillShareFill, BsFacebook } from "react-icons/bs";
import { FaCommentAlt } from "react-icons/fa";

function ShortsCom(props) {
  const { data } = props;

  return (
    <div className="flex justify-center flex-col mx-72">
      <h2 className="font-bold text-3xl">
        <BsFacebook className="text-blue-500" />
        Facebook Component
      </h2>
      {data.map((item, index) => (
        <div
          key={index}
          className="m-2 relative snap-start mr-1 mb-5 flex flex-col justify-center items-center"
        >
          <div className="">
            <p className="font-semibold">{item.channel}</p>
            <p>{item.description}..</p>
            <p>Song: {item.song}</p>
          </div>
          <img
            src={item.url}
            autoPlay={true}
            controls
            alt={item.channel}
            className="object-fill w-[513px] h-[513px]"
          />

          <div className="flex justify-center space-x-10 mt-5">
            <p className="items-center text-blue-500 flex">
              <AiFillLike /> {item.likes}
            </p>
            <p className="items-center text-green-500 flex">
              <FaCommentAlt /> {item.messages}
            </p>
            <p className="items-center text-yellow-500 flex">
              <BsFillShareFill /> {item.shares}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShortsCom;
