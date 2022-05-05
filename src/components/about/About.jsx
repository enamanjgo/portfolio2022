import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="imgcontainer">
        <img id="headshot" src="https://i.imgur.com/160tx18.jpg" title="" />
      </div>

      <br />
      <br />

      <div className="textcontainer">
        <h3> Nice to meet you! </h3>
        <br />

        <p>
          I’m in my 2nd year of Systems Design Engineering at UWaterloo, a
          multidisciplinary program with a focus on user-centered design and
          human factors engineering. I’m excited by opportunities that have
          tangible impact on others, leading me to a budding career in product.
        </p>
        <br />
        <p>
          This spring, I’m interning at The Weather Network on the New Product
          Development team, driving changes to their application suite used by
          millions (mobile and web).
        </p>
        <br />
        <p>
          In my spare time, I lead the Marketing Team at UW Orbital and design
          graphics for UW Data Science Club. Beyond career pursuits, I love art,
          music, and memes.
        </p>
        <br />
        <p>I’d love to chat about internship opportunities!</p>
        <br />
        <p id="icons">
          <a href="https://www.linkedin.com/in/ena-manjgo/" target="blank">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:emanjgo@uwaterloo.ca" target="blank">
            <i class="fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/enamanjgo" target="blank">
            <i class="fa-brands fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
