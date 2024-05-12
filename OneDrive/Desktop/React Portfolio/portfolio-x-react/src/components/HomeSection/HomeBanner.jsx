import "./HomeBannerStyle.css";
import cartoon from "../../images/cartoon-compressed.png";

export default function HomeBanner({ id }) {
  return (
    <div className="home" id={id}>
      <div className="content">
        <div className="wrapper">
          <div className="name">Anupam Yadav</div>
          <div className="staticTitle">
            Frontend
            <div className="hrLine"></div>
          </div>
          <ul className="dynamicTitle">
            <li>
              <span>Developer</span>
            </li>
          </ul>
          <a
            className="btn"
            href="https://www.linkedin.com/in/anupamyadav01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>
      </div>
      <div className="mask">
        {/* <img className="bg" src={cartoon} alt="girl-with-laptop" /> */}
      </div>
    </div>
  );
}
