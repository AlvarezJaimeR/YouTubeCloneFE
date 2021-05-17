import Player from "../Player/Player";
import Comments from "../Comments/Comments";

const MainView = (props) => {
  return (
    <div>
      <Player
        className="col"
        key={props.videoId}
        id={props.videoId}
        width="500"
        height="450"
        link={`http://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://example.com`}
        // link={`https://www.googleapis.com/youtube/v3/search?q=${props.videoId}&key=${apiKey}}`}
      />
      <Comments />
    </div>
  );
};

export default MainView;
