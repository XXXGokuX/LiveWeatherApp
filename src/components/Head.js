import { BsGithub } from "react-icons/bs";

function Head() {
  return (
    <div className="head-box">
      <div className="head-name">
        <h1>Weather App</h1>
      </div>

      <div className="github-icon">
        <a href="https://github.com/">
          <BsGithub />
        </a>
      </div>
    </div>
  );
}

export default Head;
