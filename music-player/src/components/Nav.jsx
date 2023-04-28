import { useRef, useState } from "react";
import "../css/Nav.css";
import { youtube_parser } from "../utils";
import axios from "axios";

const Nav = () => {
  const inputUrlRef = useRef();
  const[urlResult, setUrlResult] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const youtubeID = youtube_parser(inputUrlRef.current.value)
    const options = {
      method: 'get',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      headers: {
        'content-type': 'application/octet-stream',
        'X-RapidAPI-Key': '8fbd33d484msha19bf509317fa2bp19fc59jsn6bef03575815',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      },
      params: {
        id: youtubeID
      }
    }
    
    axios(options)
      .then(res => setUrlResult(res.data.link))
      .catch(err => console.log(err))

    inputUrlRef.current.value = ''
  }

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-dark justify-content-center">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input
          ref={inputUrlRef}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      {urlResult && <a href={urlResult} target="_blank" className="btn btn-outline-success">Download MP3</a>}

    </div>
  );
};

export default Nav;
