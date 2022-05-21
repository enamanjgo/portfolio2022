import { margin } from '@mui/system';
import './navbar.scss';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            EM
          </a>
        </div>

        <div className="right">
          <div className="pages">
            <div className="darkModeToggle">
              <body>
                <input type="checkbox" id="switch-button" />
                <label htmlFor="switch-button">
                  <i class="fas fa-sun"></i>
                  <i class="fas fa-moon"></i>
                </label>

                <div className="content"></div>
              </body>
            </div>
            <a href="" className="pagelink">
              Resume
            </a>
            <a href="/projects" className="pagelink">
              Projects
            </a>
            <a href="/about" className="pagelink">
              About
            </a>
            <a href="/art" className="pagelink">
              Art
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
