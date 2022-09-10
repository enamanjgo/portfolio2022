import React from 'react';

export default function Tunely() {
  return (
    <div className='Tunely'>
      <br />
    <br />

      <div className="row"></div>

      <div className="container" class="bg-black">
        <div class="row d-flex  align-items-center justify-content-center bg-black my-5">
          <div className="col-2"><h1 class="text-light fw-light overflow-hidden">Tunely</h1>
          <h4 class="fst-italic text-light fw-light overflow-hidden">
            Find and share new music picks
          </h4></div>
          <div class="col-6">
            <img src="https://i.imgur.com/25TmIcR.gif" alt="" />
          </div>
          <div className="col-1"></div>
        </div>
      </div>

      <div class="text-light" className="container">
        <br />
        <br />
        <div class="text-light" className="row">
          
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
              tackle them within the new experience:
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
              As a team, we then developed personas to better understand
              particular use cases of our product:
            </p>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Primary user</h4>

            <img src="https://i.imgur.com/fCeKsQ2.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Secondary user</h4>

            <img src="https://i.imgur.com/Wt04mIh.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <p class="fw-light">
              Our exploration confirmed that we had addressed the primary user's
              needs in our set of requirements, but we had neglected to include
              features to implement a popular music feed as included in the
              secondary persona. Revising the list of requirements:
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

                <li class="fw-bold">
                  • A trending tab to swipe through popular songs
                </li>
              </ul>
            </p>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Information architecture</h4>
            <p class="fw-light">
              With an understanding of major features to be included in the
              application, we mapped out the information architecture of the
              application to dictate wireframe ideation.
            </p>

            <img src="https://i.imgur.com/vyRqekt.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Wireframes</h4>
            <p class="fw-light">
              With our priority being time efficiency in providing users with
              song recommendations, we completed low fidelity wireframes for an
              initial representation of app flow.
            </p>
            <img src="https://i.imgur.com/DLnuRTa.png" alt="" />
            <img src="https://i.imgur.com/L6ogALl.png" alt="" />
            <img src="https://i.imgur.com/CdbHuZR.png" alt="" />
            <img src="https://i.imgur.com/qStOVkn.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Revising app features</h4>
            <p class="fw-light">
            Completion of the lo-fi wireframes led to discovering key missing features:
              <br />
              <br />
              <ul>
                <li>
                  {' '}
                  • A centralized settings tab
                </li>
                <li>
                  {' '}
                  • Onboarding pagination to gather user information
                </li>
                <li>
                  • Options to allow app access to contacts and configure notifications
                </li>
                <li>
                  • A card-swiping interface to speed up the browsing process
                </li>

                <li>
                  • Functionality to filter feed by particular criteria depending on the user’s mood
                </li>
              </ul>
            </p>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">High-fidelity mocks</h4>
            <p class="fw-light">
              With these new features in mind, we were able to design the first iteration of the high-fidelity mocks.  
            </p>
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">User onboarding</h4>
            <p class="fw-light">
              To ensure high-quality music recommendations, we ensured that a key feature of Tunely was a detailed data-entry stage 
              allowing the user to input genres/artists that they like.
            </p>

            <img src="https://i.imgur.com/nKBOnB3.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Swiping functionality</h4>
            <p class="fw-light">
             To expedite the process of finding songs, swiping functionality reduces the amount of time the user spends clicking on songs and listening to them. 
             Also, feeding the user with 15-second snippets of songs prevents them from skipping through them on their own.
            </p>

            <img src="https://i.imgur.com/OpXjrTk.png" alt="" />
          </div>


          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Chat feature</h4>
            <p class="fw-light">
             Integrated chat functionality allows users to send songs to each other directly through the app, rather than  using external messaging platforms.
            </p>

            <img src="https://i.imgur.com/RehXZPx.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Saving to playlists and filtering options</h4>
            <p class="fw-light">
             Upon swiping right on a song, users are then prompted to add it to the playlists they see fit. Additionally, the filter button allows them to alter their music recommenadtion feed on different aspects of a song, such as tempo and release date.
            </p>

            <img src="https://i.imgur.com/BvAVO6d.png" alt="" />
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Final Prototype</h4>
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/8hDWsXT3d_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        
         
          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Key Learnings</h4>
            <p class="fw-light">
             In the case of this hackathon, the developers on our team were interested in implementing a swiping interface inspired by Tinder. 
             However, in a more general case, it would be more important to approach solving the user problem (inefficiency in finding and 
             sharing music) in an unbiased way. For example, it is possible that an entirely new application would not be necessary to address the problem, 
             and it could be useful to look into solutions that integrate into existing music platforms. 
            </p>

           
          </div>

          <div class="text-light overflow-hidden" className="row pb-4 ">
            <h4 class="overflow-hidden">Next Steps</h4>
            <p class="fw-light">
             1. Usability Testing - Running user testing sessions to help reveal pain points in the existing prototype and iterate further <br /> 
             2. Taking a more research-based approach to understand the user base and market could lead to better prioritization of features

            </p>

           
          </div>
        </div>
      </div>
    </div>
  );
}
