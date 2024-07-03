import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../utils/data.js";
import { useEffect, useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=BD&videoCategoryId=${category}&key=${API_KEY}`;

    await fetch(videoList_url)
      .then((res) => res.json)
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data?.map((item, idx) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={idx}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {value_converter(item.statistics.viewCount)} views •
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
