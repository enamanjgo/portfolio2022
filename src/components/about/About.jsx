import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <br />
      <br />
      <br />

      <div className="row">
        {' '}
        <h3 class="text-center text-light fw-light overflow-hidden">About</h3>
      </div>

      <div className="container">
        <div class="row d-flex flex-wrap align-items-center justify-content-center ">
          <div class="col-12 col-md-3 col-lg-3 px-3">
            <img
              class="rounded-circle float-left mx-auto shadow-lg border border-light"
              src="https://i.imgur.com/MFyPldR.png "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container align-items center">
        <div className="row g-5">
          <div className="col-md-3"></div>

          <div className="col-md-3"></div>
        </div>

        <div className="section">
          <div class="container">
            <div id="icons" class="row text-light">
              <div class="col-md-2"></div>
              <div class="col-md-8 bg-dark rounded pt-2">
                {' '}
                <p>
                  I’m in my 2nd year of Systems Design Engineering at UWaterloo,
                  a multidisciplinary program with a focus on user-centered
                  design and human factors engineering. I’m excited by
                  opportunities that have tangible impact on others, leading me
                  to a budding career in product.
                </p>
                <p class="text-light">
                  This spring, I’m interning at The Weather Network on the New
                  Product Development team, driving changes to their application
                  suite used by millions (mobile and web).
                </p>
                <p class="text-light">
                  I'm also working as a Product Manager at UWaterloo's Engineers
                  Without Borders chapter, driving a website redesign for the
                  Centre for Media Literacy and Community Development (CEMCOD).
                </p>
                <p class="text-light">
                  Outside of career pursuits, I love traveling, memes, and art.
                </p>
              </div>
              <div class="col-md-2"></div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="row pt-4">
            <h3 class="overflow-hidden text-light fw-light">
              Below are some other projects I've been working on:
            </h3>
          </div>
        </div>

        <section id="projects" class=" m-5 p-2">
          <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            <div id="project1" class="col">
              <div class="card border-0">
                <img
                  src="https://i.imgur.com/c2mpnSU.jpg"
                  id="cover1"
                  class="card-img-top bg-image hover-overlay ripple shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    <h4 class="overflow-hidden">
                      Mechanical design and 3D printing projects
                    </h4>

                    <h7>Tools: Solidworks</h7>
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href=""
                      class="text-decoration-none fw-light text-dark"
                    >
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              {/*
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  class="card-img-top"
                  id="image1"
                  alt="Palm Springs Road"
                />

                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    How can we make it easier to discover new music and share it
                    with friends?
                    <br />
                    <br />
                    <a href="">See Tunely</a>
                  </div>
                </div>
              </div>

  */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
