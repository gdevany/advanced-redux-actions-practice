import React from 'react';



// this function sets state.videoURL
function VideoTextBox(props) {
  return (
      <div>
        Enter URL of YouTube video
        <input
      onChange={(e)=>{
        if(props.set){
          props.set(e.target.value);
        }
      }}
      type="text" />

      </div>
  );
}
export default VideoTextBox;
