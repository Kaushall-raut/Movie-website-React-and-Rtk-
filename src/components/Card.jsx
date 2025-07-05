import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ data, index, trending, media_type }) => {
  const bannerImage = useSelector((state) => state.movieData.bannerImage);

  const mediaType = data.media_type ?? media_type;
  return (
    <Link
      to={"/" + mediaType + "/" + data.id}
      className="w-full min-w-[220px] max-w-[220px] rounded h-80 block overflow-hidden relative hover:scale-110 transition-all"
    >
      <img src={bannerImage + data?.poster_path} alt="Image Not Found"  className="text-center text-2xl "/>
      <div className="absolute top-4">
        {trending && (
          <div className="py-1 px-4  backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden">
            #{index + 1} Trending
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 p-2 ">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>

        <div className="text-sm text-neutral-300 flex justify-between items-center">
          <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
          <p className="bg-white px-1 rounded-full text-xs text-black py-1">
            Rating: {data?.vote_average?.toFixed(1) || "Not found" }
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
