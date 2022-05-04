import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#landingpage" className="logo">
            <h2>EM</h2>
          </a>
          <h4>EN</h4>
          <h4>FR</h4>
        </div>
        <div className="right">
          <div className="pages">
            <a href="" className="pagelink">
              <h4>Resume</h4>
            </a>
            <a href="#projects" className="pagelink">
              Projects
            </a>
            <a href="#about" className="pagelink">
              About
            </a>
            <a href="#art" className="pagelink">
              Art
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
