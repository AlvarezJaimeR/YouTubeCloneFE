import Player from "../Player/Player";
import CommentContainer from "../CommentContainer/CommentContainer";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import ShowComments from "../ShowComments/ShowComments";

const MainView = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-2">
        <div className="col-8">
          <Player
            key={props.videoId}
            id={props.videoId}
            width="650"
            height="450"
            link={`http://www.youtube.com/embed/?enablejsapi=1&origin=http://example.com`}
            // link={`https://www.googleapis.com/youtube/v3/search?q=${props.videoId}&key=${apiKey}}`}
          />
        </div>
        <div className="col-4">
          <RelatedVideos relatedVideos={props.relatedVideosData} />
        </div>
      </div>
      <div className="row row-cols-1">
        <div className="row">
          <ShowComments currentVideo={props.videoId} commentInfo={props.commentInfo} 
            handleSubmit={(e) => props.handleSubmit(e)}
            handleChange={(e) => props.handleChange(e)}
            postReply={props.postReply}
            textReply={props.textReply}/>
        </div>
          <CommentContainer
            handleSubmit={(e) => props.handleSubmit(e)}
            handleChange={(e) => props.handleChange(e)}
            postComments={props.postComments}
            text={props.text}
            videoId={props.videoId}
          />
      </div>
    </div>
  );
};

export default MainView;
