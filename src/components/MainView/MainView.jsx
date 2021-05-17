import Player from "../Player/Player";
import Comments from "../Comments/Comments";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const MainView = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-2">
        <Player
          className="col"
          key={props.videoId}
          id={props.videoId}
          width="700"
          height="400"
          link={`http://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://example.com`}
          // link={`https://www.googleapis.com/youtube/v3/search?q=${props.videoId}&key=${apiKey}}`}
        />
        <RelatedVideos className="col" />
      </div>
      <div className="rwo row-cols-1">
        <Comments className="col-8" />
      </div>
    </div>
  );
};

export default MainView;
