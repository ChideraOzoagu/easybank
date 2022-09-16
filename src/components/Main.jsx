import React, { useEffect } from "react";
import onlineImg from "../assets/images/icon-online.svg";
import budgetingImg from "../assets/images/icon-budgeting.svg";
import onboardingImg from "../assets/images/icon-onboarding.svg";
import apiImg from "../assets/images/icon-api.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  AOS.init({
    offset: 200,
  });
  return (
    <div>
      <section className="reasons-section" id="about" >
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="reasons-list" >
          <article
          data-aos="fade-up"
          data-aos-delay="250"
          >
            <img src={onlineImg} alt="online banking" />
            <h3>Online Banking</h3>
            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </article>
          <article
           data-aos="fade-up"
          >
            <img src={budgetingImg} alt="budgeting" />
            <h3>Simple Budgeting</h3>
            <p>
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </article>
          <article
           data-aos="fade-up"
           data-aos-delay="250"
          >
            <img src={onboardingImg} alt="onboarding" />
            <h3>Fast Onboarding</h3>
            <p>
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </article>
          <article
           data-aos="fade-up"
          >
            <img src={apiImg} alt="API" />
            <h3>Open API</h3>
            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Main;
