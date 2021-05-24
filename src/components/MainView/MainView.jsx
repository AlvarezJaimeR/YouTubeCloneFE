import Player from "../Player/Player";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import ShowComments from "../ShowComments/ShowComments";
import TextContainer from "../TextContainer/TextContainer";

const MainView = (props) => {
  return (
    <div className="container">
      <div className="row row-cols-2">
        <div className="col-8">
          <Player
            key={props.activeVideoId}
            id={props.activeVideoId}
            width="650"
            height="450"
            // link={
            // "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
            // }
            link={`http://www.youtube.com/embed/${props.activeVideoId}?enablejsapi=1&origin=http://example.com`}
          />
        </div>
        <div className="col-4">
          <RelatedVideos
            relatedVideos={props.relatedVideosData}
            updateActiveVideo={props.updateActiveVideo}
          />
        </div>
      </div>
      <div className="row row-cols-1">
        <h5 className="" id="activeVideoTitle">
          {props.activeVideoTitle}
        </h5>
        <p className="" id="activeVideoDescription">
          {props.activeVideoDescription}
        </p>
      </div>
      <div>
      <div className="row float-end">
        <TextContainer 
            title="Comment"
            handleSubmit={(e) => props.handleSubmit(e)}
            handleChange={(e) => props.handleChange(e)}
            text={props.text}
            videoId={props.activeVideoId}
        />
      </div>
          <div className="row">
            <ShowComments
              videoId={props.activeVideoId}
              commentInfo={props.commentInfo}
              handleSubmit={(e) => props.handleSubmit(e)}
              handleChange={(e) => props.handleChange(e)}
              text={props.text}
              postReply={props.postReply}
              getComments={props.getComments}
              updateLike={props.updateLike}
              updateDislike={props.updateDislike}
            />
          </div>
      </div>
    </div>
  );
};

export default MainView;
