import ReactHlsPlayer from "react-hls-player";
import "./Banner.css";
import { useRef, useState } from "react";
import Icon from '@mdi/react';
import { mdiVolumeOff, mdiVolumeHigh } from '@mdi/js';
function Banner() {
  const [isMuted, setIsMuted] = useState(true);
  const videRef = useRef(null);
  const handleMuteToggle=()=>{
    const video=videRef.current;
    if(video){
        video.muted=!video.muted;
        setIsMuted(!isMuted)
    }
  }
  return (
    <div className="autoplay-banner">
      <ReactHlsPlayer
        className="video"
        src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
        
        controls={false}
        width="100%"
        height="100%"
        muted={isMuted}
        playerRef={videRef}
      />
      <div className="mute-button" onClick={handleMuteToggle}>
        {isMuted ? <Icon path={mdiVolumeOff} size={1} /> : <Icon path={mdiVolumeHigh} size={1} />}
      </div>
    </div>
  );
}

export default Banner;
