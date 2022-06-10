import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container align-items center">
        <br />
        <br />
        <br />
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col ">
            <img
              class="img-responsive img-thumbnail"
              src="https://i.imgur.com/3fQ8PlM.jpg"
              alt=""
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <br />
        <br />
        <div className="row">
          <div class=" fw-light text-center">
            <h3 class=" overflow-hidden fw-light text-light">
              Thank you for stopping by! Some quick facts:{' '}
            </h3>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h1 class="text-center overflow-hidden p-3">🔧</h1>
          </div>
          <div className="col">
            <h1 class="text-center overflow-hidden p-3">🔆</h1>
          </div>
          <div className="col">
            <h1 class="text-center overflow-hidden p-3">🌱</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p class="text-light">
              I’m in my 2nd year of Systems Design Engineering at UWaterloo, a
              multidisciplinary program with a focus on user-centered design and
              human factors engineering. I’m excited by opportunities that have
              tangible impact on others, leading me to a budding career in
              product.
            </p>
          </div>
          <div className="col">
            <p class="text-light">
              This spring, I’m interning at The Weather Network on the New
              Product Development team, driving changes to their application
              suite used by millions (mobile and web).
            </p>
          </div>
          <div className="col">
            <p class="text-light">
              I'm also working as a Product Manager at UWaterloo's Engineers
              Without Borders chapter, driving a website redesign for the Centre
              for Media Literacy and Community Development (CEMCOD).
            </p>
            <br />
            <br />
          </div>
        </div>

        <div className="row">
          <br />
          <br />
          <h4 class="overflow-hidden fw-light text-light">
            Below are some other cool things I've been working on recently:
          </h4>
        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                class="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                class="card-img-top"
                alt="Palm Springs Road"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                class="card-img-top"
                alt="Los Angeles Skyscrapers"
              />
              <div class="card-body">
                <h5 class="card-title overflow-hidden">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                class="card-img-top"
                alt="Skyscrapers"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}
