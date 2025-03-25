import React, { useRef, useEffect, useState } from "react";
import videoExp720 from "../../../assets/videos/videoExp.mp4";
import videoExp480 from "../../../assets/videos/videoExp.mp4";
import videoExp360 from "../../../assets/videos/videoExp.mp4";

export const VideoExample = () => {
  const playerRef = useRef(null);
  const [playerInstance, setPlayerInstance] = useState(null);

  useEffect(() => {
    const loadScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = "https://cdn.jwplayer.com/libraries/IDzF9Zmk.js"; // Example library ID
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const setupPlayer = () => {
      if (window.jwplayer) {
        const player = window.jwplayer(playerRef.current).setup({
          playlist: [
            {
              sources: [
                { file: videoExp720, label: "720p", default: true },
                { file: videoExp480, label: "480p" },
                { file: videoExp360, label: "360p" },
              ],
            },
          ],
          width: "400px",
          aspectratio: "16:9",
          autostart: false,
        });
        setPlayerInstance(player);
      }
    };

    loadScript()
      .then(setupPlayer)
      .catch((error) => {
        console.error("Error loading JW Player script", error);
      });

    return () => {
      if (window.jwplayer && window.jwplayer(playerRef.current)) {
        window.jwplayer(playerRef.current).remove();
      }
    };
  }, []);

  const changeQuality = (qualityLabel) => {
    if (playerInstance) {
      const currentQuality = playerInstance
        .getPlaylistItem()
        .sources.find((source) => source.label === qualityLabel);
      if (currentQuality) {
        playerInstance.setCurrentQuality(
          playerInstance.getPlaylistItem().sources.indexOf(currentQuality),
        );
      }
    }
  };

  return (
    <div>
      <div id="video-container" ref={playerRef}></div>
      <div>
        <button onClick={() => changeQuality("720p")}>720p</button>
        <button onClick={() => changeQuality("480p")}>480p</button>
        <button onClick={() => changeQuality("360p")}>360p</button>
      </div>
    </div>
  );
};
