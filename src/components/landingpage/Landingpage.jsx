import './landingpage.scss';

export default function Landingpage() {
  return (
    <div className="landingpage" id="landingpage">
      {' '}
      <div className="welcome">
        <h2>Hey there. I'm Ena.</h2>
        <h4>
          {' '}
          <br /> I'm an engineering student with a passion for designing
          <br />
          and managing products that make an impact.
        </h4>
        <h4></h4>
        <h3>
          <br />
          See my work
          <br />
        </h3>
        <a href="#projects">
          <div className="wrapper">
            <img src="https://i.imgur.com/HP46F4W.png" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
}
