import React, { useRef, useState } from "react";
import "../css/playbar.css";
import Playlist from "./Playlist";
import Player from "./Player";
import BassBoostPlayer from "./bassBoostPlayer";
// import Song from "./Song";
let volumeBefore = 1;

// interface Props {
//   currentPlaylist: typeof Playlist;
// }

// const Playbar = ( props: Props) => {
const Playbar = () => {

  // const [trackIndex, setTrackIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [shuffleOn, setShfuffleOn] = useState(false);
  const [repeatOn, setRepeatOn] = useState(false);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef();
  const progressBarRef = useRef();

  volumeBefore = !muted ? volume : volumeBefore;

  function volumeLabel() {
    if (volume >= 0.5) {
      return "glyphicon glyphicon-volume-up text-light";
    } else if (volume > 0) {
      return "glyphicon glyphicon-volume-down text-light";
    }
    return "glyphicon glyphicon-volume-off text-light";
  }

  return (
    <>
      <div className="bg-dark text-center text-lg-start fixed-bottom playbar d-flex justify-content-center">
        <svg className="bi me-2" width="40%" height="32"></svg>
        <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
          onClick={() => {
            setShfuffleOn(!shuffleOn);
          }}
        >
          <span
            className={
              shuffleOn
                ? "glyphicon glyphicon-random text-success"
                : "glyphicon glyphicon-random text-light"
            }
            aria-hidden="true"
          ></span>
        </button>

        <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
        >
          <span
            className="glyphicon glyphicon-step-backward text-light"
            aria-hidden="true"
          ></span>
        </button>

        <Player isPaused={isPaused} repeatOn={repeatOn} volume={volume} />
        {/* <BassBoostPlayer
          isPaused={isPaused}
          repeatOn={repeatOn}
          volume={volume}
          audioRef={audioRef}
          progressBarRef={progressBarRef}
        />

        {/* current song bar */}
        {/* <section
          className="text-center centerdiv volslider"
          aria-label="Left Align"
        >
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            // value={}
            // onChange={(event) => {
            //   setVolume(event.target.valueAsNumber);
            // }}
          />
        </section> */}

        {isPaused && (
          <button
            type="button"
            className="btn btn-default"
            aria-label="Left Align"
            onClick={() => {
              setIsPaused(!isPaused);
            }}
          >
            <span
              className="glyphicon glyphicon-play text-light"
              aria-hidden="true"
            ></span>
          </button>
        )}

        {!isPaused && (
          <button
            type="button"
            className="btn btn-default"
            aria-label="Left Align"
            onClick={() => {
              setIsPaused(!isPaused);
            }}
          >
            <span
              className="glyphicon glyphicon-pause text-light"
              aria-hidden="true"
            ></span>
          </button>
        )}

        <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
        >
          <span
            className="glyphicon glyphicon-step-forward text-light"
            aria-hidden="true"
          ></span>
        </button>

        <button
          type="button"
          className="btn btn-default text-light"
          aria-label="Left Align"
          onClick={() => {
            setRepeatOn(!repeatOn);
          }}
        >
          <span
            className={
              repeatOn
                ? "glyphicon glyphicon-retweet text-success"
                : "glyphicon glyphicon-retweet text-light"
            }
            aria-hidden="true"
          ></span>
        </button>

        <svg className="bi me-2" width="30%" height="32"></svg>

        <button
          type="button"
          className="btn btn-default"
          aria-label="Left Align"
          onClick={() => {
            setMuted((m) => !m);

            // make it so when you unmute it goes back to the volume before
            setVolume((v) => (v !== 0 ? 0 : volumeBefore));
          }}
        >
          <span className={volumeLabel()} aria-hidden="true"></span>
        </button>

        <section
          className="text-center centerdiv volslider"
          aria-label="Left Align"
        >
          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(event) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
        </section>
      </div>
    </>
  );
};

export default Playbar;
