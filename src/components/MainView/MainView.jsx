import Player from "../Player/Player";
import CommentContainer from "../CommentContainer/CommentContainer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const MainView = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-2"></div>
      <Player
        className="col"
        key={props.videoId}
        id={props.videoId}
        width="500"
        height="450"
        link={`http://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://example.com`}
        // link={`https://www.googleapis.com/youtube/v3/search?q=${props.videoId}&key=${apiKey}}`}
      />
      <RelatedVideos className="col" />
      <div className="row row-cols-1">
        <CommentContainer
          className="col-8"
          handleSubmit={(e) => props.handleSubmit(e)}
          handleChange={(e) => props.handleChange(e)}
          videoData={props.youTubeVideoData}
          postComments={props.postComments}
          text={props.text}
          videoId={props.videoId}
        />
      </div>
    </div>
  );
};

export default MainView;
