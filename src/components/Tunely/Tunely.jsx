import React from 'react';

export default function Tunely() {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="row"></div>

      <div className="container" class="bg-black">
        <div class="row d-flex flex-wrap align-items-center justify-content-center bg-black">
          <div class="col-12 col-md-3 col-lg-3 ">
            <img src="https://i.imgur.com/u6pRYSS.gif" alt="" />
          </div>
        </div>
      </div>

      <div class="text-light" className="container">
        <br />
        <br />
        <div class="text-light" className="row">
          <h1 class="text-light fw-light overflow-hidden">Tunely</h1>
          <h4 class="fst-italic text-light fw-light overflow-hidden">
            Find and share new music picks
          </h4>
          <br />
          <br />
          <br />

          <div class="text-light" className="row pb-4 ">
            <div className="col-md-4">
              <h5>⛏ My Role</h5>
              <p>UI/UX Designer</p>
            </div>
            <div className="col-md-4">
              <h5>🔗 Team</h5>
              <p>
                Julia Ju - Software Developer <br /> Christine Ng - Software
                Developer <br /> Tara Rao-Pandit - UI/UX Designer
              </p>
            </div>
            <div className="col-md-4">
              <h5>🕕 Timeline</h5>
              <p>Hack the North: September 17th-19th, 2021 </p>
            </div>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Project overview</h4>
            <p class="fw-light">
              From anecdotal experience, finding new music is a task with more
              resistance than necessary. Scrolling through music app
              recommendations only to try and “skip to the good part” is
              time-consuming and sometimes a little bit boring. For Hack the
              North 2021, our team sought out to ideate a product that could
              streamline the process of finding new music and sharing it with
              friends.{' '}
            </p>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Defining the problem</h4>
            <p class="fw-light">
              To better understand our userbase, we investigated Spotify. As
              everyday users, we identified a typical flow for discovering new
              music and sharing it:
            </p>
          </div>

          <div className="row">
            <img src="https://i.imgur.com/zbGTfJG.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">
              <br />
              Pain points in the current music sharing experience
            </h4>
            <p class="fw-light">
              Analyzing the above user stories, we compiled a list of pain
              points that arise during the process of finding and sharing music:
              <br />
              <br />
              <ul>
                <li>
                  {' '}
                  • Sharing music with friends is cross-platform (i.e. sending
                  links)
                </li>

                <li>
                  {' '}
                  • Music app recommendation algorithms only suggest music based
                  on listening history
                </li>

                <li>
                  • Skipping to the most interesting part of the song is a long
                  process of trial and error
                </li>

                <li>• Adding songs to playlists can be cumbersome</li>
              </ul>
            </p>
          </div>

          <div className="row">
            <h4 class="overflow-hidden">Drafting requirements</h4>

            <p class="fw-light">
              Based on the pain points we discovered, we listed requirements to
              tackle pain points within the new experience:
              <br />
              <br />
              <ul>
                <li>
                  {' '}
                  • Seamless chat functionality to share songs with friends
                </li>
                <li>
                  {' '}
                  • A data-entry stage for accurate, algorithm-based
                  recommendations
                </li>
                <li>
                  • Algorithm-curated song snippets to show the user the most
                  interesting part of the song
                </li>
                <li>
                  • A card-swiping interface to speed up the browsing process
                </li>
              </ul>
            </p>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Empathizing with the user</h4>
            <p class="fw-light">
              To better understand our userbase, we investigated Spotify. As
              everyday users, we identified a typical flow for discovering new
              music and sharing it:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
