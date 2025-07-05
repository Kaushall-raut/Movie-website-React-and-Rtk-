import { IoClose } from "react-icons/io5";
import { video } from "../Api/Axios";

import { useEffect, useState } from "react";

const Video = ({ data, close, media_type }) => {
  const [videoData, setVideoData] = useState([]);

  const fetchVideo = async () => {
    const res = await video(media_type, data);
    setVideoData(res);
    console.log(videoData);
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <section className=" fixed bg-neutral-900 top-0 right-0 bottom-0  left-0 z-40  opacity-100 flex justify-center items-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded  z-50 relative">
        <button
          onClick={close}
          className="absolute -right-1 -top-5 text-3xl z-50"
        >
          <IoClose />
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoData[0]?.key}`}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default Video;
