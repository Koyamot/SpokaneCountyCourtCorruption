import React from "react";
import ReactPlayer from "react-player";

import "./Landing.scss";
import courthouse from "../../images/courthouse.png";

const Landing = () => {
  return (
    <div className="landing-div">
      <section className="description-box">
        <img src={courthouse} alt="Spokane Courthouse" />
        <div className="description">
          <p>
            Thank you for your interest in my case. My name is Teresa. My husband,
            Ron and I met in 1997. I was 33 and Ron was 46. I have a daughter,
            Megan, that my ex-husband and I share that became part of this
            relationship also. Ron, an African - American has accomplished the
            status of store director and been in the grocery business for 30+ years.
          </p>
          <p>
            My daughter's father, Bruce is and has always been part of her life.
            Of course, like any ex, there were a few difficulties but overall we
            were able to work through or around them. My daughter Megan has a
            half-brother named Christopher, a child by Ron and myself. Megan and
            Christopher were very close, sharing the same household since
            Christopher was born until he was abducted through the legal system.
          </p>
          <p>
            Ron and I have been married since 2001. Ron and I both had
            experience in rentals and understood the program. Sheer
            determination caused us to run a business of rentals and flipping
            houses for many years, doing the work and doubling up mortgage
            payments.
          </p>
          <p>
            Our children attended private and public schools, were doing very
            well with attendance and grade point averages, participating in
            karate and scouts, and traveling. There were no incidences of drug
            and alcohol issues or criminal issues.
          </p>
          <p>
            Then one day our son was ripped from our home with no understanding
            as to why. Hundreds of thousands of dollars later and no
            understanding of what we even did wrong, no CPS involvement, and
            false allegations we have found ourselves out six years later with
            no child, even deemed as fit parents.
          </p>
        </div>
      </section>
      <section className="video-box">
        <h2>Watch Our Story:</h2>
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/91D3_5H5Sz0"
            width="100%"
            height="100%"
          />
        </div>
      </section>
    </div>
  );
};

export default Landing;
