import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import videojs from "video.js";
import "video.js/dist/video-js.min.css";

const options = {
muted: true,
autoplay: true,
loop: true,
fill: true,
fluid: true,
responsive: true,
preload: "auto",
controls: false,
html5: {
  vhs: {
   enableLowInitialPlaylist: false,
    smoothQualityChange: true,
    overrideNative: true
  }
},
playbackRates: [0.25, 0.5],
sourceOrder: true
};

export default function VideoViewer(props) {
  const { src, controls,  autoplay} = props;
  //const classes = useStyles();
  const videoRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const videoPlayer = videojs(videoRef.current, options);
    setPlayer(videoPlayer);

    return () => videoPlayer.dispose();
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src([
        {
          src,
          type: "video/mp4"
        }
      ]);
    }
  }, [src, player]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}

VideoViewer.propTypes = {
  src: PropTypes.string.isRequired,

};

