import Player from "../Player/Player";
import CommentContainer from "../CommentContainer/CommentContainer";

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
      <CommentContainer handleSubmit={(e)=>props.handleSubmit(e)} handleChange={(e)=>props.handleChange(e)} 
        videoData={props.youTubeVideoData} postComments={props.postComments} 
        text={props.text} videoId={props.videoId}/>
    </div>
  );
};

export default MainView;
