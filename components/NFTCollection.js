import React, { useEffect, useState } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";
import { ethers } from "ethers";
import Link from "next/link";
const NFTCollection = (props) => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <Fade>
      <td className=" flex flex-row align-middle">
        <img
          className="w-8 h-8 rounded-full inline-block"
          src={props.collection.image_url}
        ></img>
        <h1 className="text-white hover:text-green-300 text-xs ml-3  pt-2 text-left overflow-ellipsis">
          {props.collection.name.slice(0, 16)}
        </h1>
      </td>
      <td className=" align-middle">
        <p className="text-white hover:text-green-300">
          Ξ{Math.round(props.collection.stats.floor_price * 100) / 100}
        </p>
        {/* <p className="text-gray-400 text-xs">${parseInt(((props.collection.stats.floor_price) * props.ethPrice))}</p> */}
      </td>
      <td className=" align-middle">
        <p className="text-white hover:text-green-300">
          Ξ {Math.round(props.collection.stats.average_price * 100) / 100}
        </p>
        {/* <p className="text-gray-400 text-xs">${parseInt(((props.collection.stats.average_price) * props.ethPrice))}</p> */}
      </td>
      <td className=" align-middle">
        <p className="text-white hover:text-green-300">
          Ξ
          {(
            Math.round(props.collection.stats.one_day_volume * 100) / 100
          ).toLocaleString()}
        </p>
        {/* <p className="text-gray-400 text-xs">${parseInt(((props.collection.stats.one_day_volume) * props.ethPrice))}</p> */}
      </td>
      <td className=" align-middle">
        <p className="text-white hover:text-green-300">
          {Math.round(props.collection.stats.one_day_sales * 100) / 100}
        </p>
        {/* <p className="text-gray-400 ">${parseInt(((props.collection.stats.one_day_sales) * props.ethPrice))}</p> */}
      </td>
      <td className=" align-middle">
        <p className="text-white hover:text-green-300">
          Ξ
          {(
            Math.round(
              props.collection.stats.total_supply *
                props.collection.stats.average_price *
                100
            ) / 100
          ).toLocaleString()}
        </p>
        {/* <p className="text-gray-400 text-xs">${parseInt(Math.round((props.collection.stats.total_supply * props.collection.stats.average_price) * 100) / 100 * props.ethPrice)}</p> */}
      </td>
      <td className=" align-middle">
        {props.collection.stats.one_day_change >= 0 ? (
          <p className="text-white text-sm bg-primary text-center hover:text-green-300 rounded-2xl h-8 p-2">
            {Math.round(props.collection.stats.one_day_change * 100) / 100}%
          </p>
        ) : (
          <p className="bg-danger text-white text-center text-sm rounded-2xl h-8 p-2">
            {Math.round(props.collection.stats.one_day_change * 100) / 100}%
          </p>
        )}
      </td>
    </Fade>
  );
};

export default NFTCollection;
