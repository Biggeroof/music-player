import { useEffect, useState } from "react"; 
import useSound from 'use-sound';
// import Song from "./Song";
import song from '../images/Legends Never Die (ft. Against The Current) [OFFICIAL AUDIO] _ Worlds 2017 - League of Legends.mp3'
import song from "../images/Kero Kero Bonito - Flamingo [mega earrape and bass boost]_zmEUpMF-HLE.mp3";
// Kero Kero Bonito - Flamingo [mega earrape and bass boost]_zmEUpMF-HLE.mp3
// Legends Never Die (ft. Against The Current) [OFFICIAL AUDIO] _ Worlds 2017 - League of Legends.mp3

interface Props {
    // currSong: typeof Song;
    isPaused: boolean;
    // setIsPaused: () => void;
    repeatOn: boolean;
    // setIsRepeat: () => void;
    volume: number;
    // setVolume: () => void;
}

const Player = (props: Props) => {

    // idk how to this fix... "currSong is any"
    const [play, { pause, duration, sound}] = useSound(song, volume);

    if (isPaused) {
        pause();
    } else {
        play();
    }
    
    // Keeps track of the current time of the song (min:sec)
    const [currTime, setCurrTime] = useState({min: 0, sec: 0});
    
    // same curr time in secs
    const [seconds, setSeconds] = useState();

    let time = {min: 0, sec: 0};
    // 
    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
          min: min,
          sec: secRemain
        }
    });

    useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([])); // setting the seconds state with the current state
            const min = Math.floor(sound.seek([]) / 60);
            const sec = Math.floor(sound.seek([]) % 60);
            setCurrTime({
              min,
              sec,
            });
          }
        }, 1000);
        return () => clearInterval(interval);
      }, [sound]);


    return (
        <div>
            <div className="time">
                <p>
                    {currTime.min}:{currTime.sec}
                </p>
                <p>
                    {time.min}:{time.sec}
                </p>
            </div>
                <input
                type="range"
                min="0"
                max={duration / 1000}
                // default="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
                    sound.seek([e.target.value]);
                }}
            />
        </div>
    );
}
