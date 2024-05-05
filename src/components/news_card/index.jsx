import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";
import { DisLike, Like } from "../../assets/svgs";
const index = ({
  author,
  title,
  imageUrl,
  description,
  url,
  publishedAt,
  sourceName,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
    setDisliked(false);
  }
  const handleDisLike = () => {
    setDisliked(!disliked);
    setLiked(false);
  }
  return (
    <div className="news-card flex  py-1 bg-[var(--tw-dark-bg)] gap-4 flex-col xl:w-[calc(100%/4-15px)] lg:w-1/4 md:w-[calc(100%/3-15px)] sm:w-[calc(100%/2-15px)] rounded-md">
      <div className="news-card-image text-center">
        {
          imageUrl ? <img src={imageUrl} alt="" className="w-full rounded-md" /> : <div className="mx-auto mt-12 text-xl">No Image</div>
        }
      </div>
      <div className="news-card-body flex flex-col gap-4 px-2">
        <div className="flex flex-row justify-between items-center">
          <span className="px-3 py-2 bg-gray-800 rounded-xl ">
            {sourceName}
          </span>
          <span className="rounded-md italic"> {publishedAt}</span>
        </div>
        <NavLink
          to={url}
          target="_blank"
          className={"font-bold text-lg underline"}
        >
          <h1>{title}</h1>
        </NavLink>
        <p className="text-[12px] font-medium first-letter:uppercase text-gray-300">
          {description}
        </p>
        <div className="like-dislike flex flex-row justify-between px-0">
          <button onClick={handleLike} className={`like text-lg ${liked ? "active text-red-500" : ""}`}>
            <Like active={liked} />
          </button>
          <button onClick={handleDisLike} className={`dislike text-lg ${disliked ? "active text-red-600" : ""}`}>
            <DisLike active={disliked} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
