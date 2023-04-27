import React, { useState } from "react";

const Playbar = () => {
  let [isPaused, setIsPaused] = useState(true);
  let [shuffleOn, setShfuffleOn] = useState(false);
  return (
    <div className="bg-dark text-center text-lg-start fixed-bottom">
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

      <button type="button" className="btn btn-default" aria-label="Left Align">
        <span
          className="glyphicon glyphicon-step-backward text-light"
          aria-hidden="true"
        ></span>
      </button>

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

      <button type="button" className="btn btn-default" aria-label="Left Align">
        <span
          className="glyphicon glyphicon-step-forward text-light"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
};

export default Playbar;
