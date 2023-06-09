import React from "react";
import { AiOutlineRetweet, AiFillHeart } from "react-icons/ai";
import { BsFillShareFill } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";

function VideoCom(props) {
  const { data } = props;

  return (
    <div className="flex justify-center flex-col mx-72">
      <h2 className="font-bold text-3xl">
        <ImTwitter className="text-sky-500" />
        Twitter Component
      </h2>
      {data.map((item, index) => (
        <div
          key={index}
          className="m-2 relative snap-start mr-1 mb-5 flex flex-col justify-center items-center"
        >
          <img
            src={item.url}
            autoPlay={true}
            controls
            className="object-fill rounded-lg w-[513px] h-[513px]"
            alt={item.channel}
          />
          <div className="flex w-[480px]">
            <p className="font-semibold">{item.channel}</p>
            <p>{item.description}..</p>
            <p>Song: {item.song}</p>
          </div>

          <div className="flex justify-center space-x-10 mt-5">
            <p className="items-center text-rose-500 flex">
              <AiFillHeart /> {item.likes}
            </p>
            <p className="items-center text-green-500 flex">
              <AiOutlineRetweet /> {item.messages}
            </p>
            <p className="items-center text-blue-500 flex">
              <BsFillShareFill /> {item.shares}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoCom;
