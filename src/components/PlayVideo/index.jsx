import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best channel to learn web development</h3>
      <div className="play-video-info">
        <p>1825 views • 1 day ago</p>
        <div className="">
          <span>
            <img src={like} alt="like" />
            145
          </span>
          <span>
            <img src={dislike} alt="dislike" /> 20
          </span>
          <span>
            <img src={share} alt="share" /> Share
          </span>
          <span>
            <img src={save} alt="save" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="jack" />
        <div>
          <p>Jack Smith</p>
          <span>1.04M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe Jack Smith to watch more tutorials</p>
        <hr />
        <h4>158 Comments</h4>
        <div className="comment">
          <img src={user_profile} alt="user" />
          <div>
            <h3>
              Jack Smith <span>1 day ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>10</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user" />
          <div>
            <h3>
              Jack Smith <span>1 day ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>10</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user" />
          <div>
            <h3>
              Jack Smith <span>1 day ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>10</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user" />
          <div>
            <h3>
              Jack Smith <span>1 day ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>10</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user" />
          <div>
            <h3>
              Jack Smith <span>1 day ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>10</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src={user_profile} alt="user" />
          <div>
            <h3>
              Jack Smith <span>1 day ago</span>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="comment-action">
              <img src={like} alt="like" />
              <span>10</span>
              <img src={dislike} alt="dislike" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
