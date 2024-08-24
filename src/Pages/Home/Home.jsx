import React, { useRef, useState } from "react";
import ApiCall from "../../Api/ApiCall";
import { startApiCall } from "../../Helpers/globalFunctions";
import emailjs from "@emailjs/browser";
import { CirclesWithBar } from "react-loader-spinner";
import toast, { Toaster } from 'react-hot-toast';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
  const [loader, setloader] = useState(false);

  const responsive = {
    0: {
      items: 1, // 1 item for screens from 0px to 479px
    },
    480: {
      items: 2, // 2 items for screens from 480px to 767px
    },
    768: {
      items: 3, // 3 items for screens from 768px to 1023px
    },
    1024: {
      items: 4, // 4 items for screens above 1024px
    },
    1200: {
      items: 5, // 5 items for screens above 1200px
    },
  };
  // API EXAMPLE
  // const handleAddPayment = async (e) => {
  //   e.preventDefault();
  //   startApiCall(seterrorMessage, setLoader);
  //   const payload = {

  //   };
  //   const res = await ApiCall("post", paymentEndPoints.addPayment, payload);
  //   if (res?.success) {
  //   } else {
  //     seterrorMessage(res.error);
  //     setLoader(false);
  //   }
  // };


  const form = useRef();

  const sendEmail = (e) => {
    console.log("called");
    setloader(true);
    e.preventDefault();

    emailjs
      .sendForm("service_lm36y73", "template_iamkwls", form.current, {
        publicKey: "UxlPA74vIgFZlR54Q",
      })
      .then(
        () => {
          setloader(false);
          console.log("SUCCESS!");
          toast.success('Email sent to shirshendu')
        },
        (error) => {
          setloader(false);
          toast.error("oops! something went wrong")
          console.log("oops! something went wrong");
        }
      );
  };

  return (
    <div>
      <header class="top-area">
        <div class="header-area">
          <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">
            <div class="container">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navbar-menu"
                >
                  <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand" href="/">
                  Shirshendu
                </a>
              </div>

              <div
                class="collapse navbar-collapse menu-ui-design"
                id="navbar-menu"
              >
                <ul
                  class="nav navbar-nav navbar-right"
                  data-in="fadeInDown"
                  data-out="fadeOutUp"
                >
                  <li class=" smooth-menu active"></li>
                  <li class=" smooth-menu">
                    <a href="#education">education</a>
                  </li>
                  <li class="smooth-menu">
                    <a href="#skills">skills</a>
                  </li>
                  <li class="smooth-menu">
                    <a href="#experience">experience</a>
                  </li>
                  <li class="smooth-menu"><a href="#clients">projects</a></li>
                  <li class="smooth-menu">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div class="clearfix"></div>
      </header>

      <section id="welcome-hero" class="welcome-hero">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="header-text">
                <h2>
                  hi <span>,</span> i am <br /> Shirshendu <br /> Pal{" "}
                  <span>.</span>{" "}
                </h2>
                <p>software developer (MERN STACK)</p>
                <a href="assets/download/Shirshendu_Pal_2024.pdf" download>
                  download resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div class="container">
          <div class="about-content">
            <div class="row">
              <div class="col-sm-6">
                <div class="single-about-txt">
                  <h3>
                    I am a professional MERN stack developer. I specialize in
                    providing high-quality solutions and have extensive
                    experience in full-stack development. My goal is to deliver
                    efficient and scalable applications, ensuring a seamless
                    user experience.
                  </h3>
                  <p>
                    With over 4 years of extensive experience in MERN stack
                    development, I have crafted and launched more than 10
                    sophisticated websites and dashboards, each achieving over
                    10,000 downloads. My background also includes as a tech
                    startup owner, where I honed my skills in innovation and
                    leadership. My expertise lies in delivering cutting-edge
                    solutions and driving impactful results in the ever-evolving
                    tech landscape
                  </p>
                  <div class="row">
                    <div class="col-sm-4">
                      <div class="single-about-add-info">
                        <h3>phone</h3>
                        <p>8637090330</p>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="single-about-add-info">
                        <h3>email</h3>
                        <p>shirshendupal9@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-offset-1 col-sm-5">
                <div class="single-about-img">
                  <img
                    src="assets/images/about/profile_image.jpg"
                    alt="profile_image"
                  />
                  <div class="about-list-icon">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/shirshendu.pal.1"
                          target="_blank"
                        >
                          <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/shirshendu-pal-60b8961a3/"
                          target="_blank"
                        >
                          <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/sid_112321/"
                          target="_blank"
                        >
                          <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" class="education">
        <div class="section-heading text-center">
          <h2>education</h2>
        </div>
        <div class="container">
          <div class="education-horizontal-timeline">
            <div class="row">
              <div class="col-sm-4">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2021 - 2023</h2>
                    <h3>
                      master <span>of </span> computer application
                    </h3>
                  </div>
                  <div class="timeline-horizontal-border">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    <span class="single-timeline-horizontal"></span>
                  </div>
                  <div class="timeline">
                    <div class="timeline-content">
                      <h4 class="title">
                        university of engineering & management
                      </h4>
                      <h5>kolkata, INDIA</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2018 - 2021</h2>
                    <h3>
                      bachelor <span>of </span> computer application
                    </h3>
                  </div>
                  <div class="timeline-horizontal-border">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    <span class="single-timeline-horizontal"></span>
                  </div>
                  <div class="timeline">
                    <div class="timeline-content">
                      <h4 class="title">siliguri institute of technology</h4>
                      <h5>siliguri, INDIA</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="single-horizontal-timeline">
                  <div class="experience-time">
                    <h2>2015 - 2017</h2>
                    <h3>12th board</h3>
                  </div>
                  <div class="timeline-horizontal-border">
                    <i class="fa fa-circle" aria-hidden="true"></i>
                    <span
                      class="single-timeline-horizontal spacial-horizontal-line
									"
                    ></span>
                  </div>
                  <div class="timeline">
                    <div class="timeline-content">
                      <h4 class="title">
                        westbengal council of higher secondary education
                      </h4>
                      <h5>coochbehar, INDIA</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="skills">
        <div class="skill-content">
          <div class="section-heading text-center">
            <h2>skills</h2>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="single-skill-content">
                  <div class="barWrapper">
                    <span class="progressText">Node js</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>95%</h3>
                    </div>
                  </div>
                  <div class="barWrapper">
                    <span class="progressText">structure design</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>85%</h3>
                    </div>
                  </div>
                  <div class="barWrapper">
                    <span class="progressText">react js</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="97"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>70%</h3>
                    </div>
                  </div>
                  <div class="barWrapper">
                    <span class="progressText">mongodb</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>95%</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="single-skill-content">
                  <div class="barWrapper">
                    <span class="progressText">express js</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>100%</h3>
                    </div>
                  </div>
                  <div class="barWrapper">
                    <span class="progressText">git</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="85"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>80%</h3>
                    </div>
                  </div>
                  <div class="barWrapper">
                    <span class="progressText">aws</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="97"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>50%</h3>
                    </div>
                  </div>
                  <div class="barWrapper">
                    <span class="progressText"> team leading</span>
                    <div class="single-progress-txt">
                      <div class="progress ">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="90"
                          aria-valuemin="10"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="experience">
        <div class="section-heading text-center">
          <h2>experience</h2>
        </div>
        <div class="container">
          <div class="experience-content">
            <div class="main-timeline">
              <ul>
                <li>
                  <div class="single-timeline-box fix">
                    <div class="row">
                      {/*  */}
                      <div class="col-md-5">
                        <div class="timeline">
                          <div class="timeline-content text-right">
                            <h4 class="title">
                              technixia automation pvt. lmt.
                            </h4>
                            <h5>kolkata, INDIA (REMOTE)</h5>
                            <p class="description">
                              worked as a Software Development Engineer I, where
                              I skillfully managed projects and demonstrated
                              strong leadership capabilities, driving successful
                              outcomes and guiding teams to excel
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-offset-1 col-md-5 experience-time-main">
                        <div class="experience-time">
                          <h2>
                            <span>
                              <i class="fa fa-circle" aria-hidden="true"></i>
                            </span>
                            2022 - 2024
                          </h2>
                          <h3>software development engineer 1</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="single-timeline-box fix">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="experience-time text-right">
                          <h2>2020 - 2022</h2>
                          <h3>junior software developer</h3>
                        </div>
                      </div>
                      <div class="col-md-offset-1 col-md-5">
                        <div class="timeline">
                          <div class="timeline-content">
                            <h4 class="title">
                              <span>
                                <i class="fa fa-circle" aria-hidden="true"></i>
                              </span>
                              pcs global pvt. lmt.
                            </h4>
                            <h5>kolkata, INDIA (REMOTE)</h5>
                            <p class="description">
                              developing software from scratch using MERN stack
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" class="clients">
    <div class="section-heading text-center">
        <h2>Main Projects</h2>
    </div>
    <div class="clients-area">
        <div class="container">
            {/* <div class="owl-carousel owl-theme" id="client"> */}
            <div class="carousel">
    <div class="carousel-item">
        <a href="https://dashboard.sociohood.com" target="blank">
            <img src="assets/images/clients/c1.png" alt="brand-image"/>
        </a>
    </div>
    <div class="carousel-item">
        <a href="https://bizhood.in" target="blank">
            <img src="assets/images/clients/c2.png" alt="brand-image"/>
        </a>
    </div>
    <div class="carousel-item">
        <a href="https://technixia.com/" target="blank">
            <img src="assets/images/clients/c3.png" alt="brand-image"/>
        </a>
    </div>
    <div class="carousel-item">
        <a href="https://ogule.com" target="blank">
            <img src="assets/images/clients/c4.png" alt="brand-image"/>
        </a>
    </div>
    <div class="carousel-item">
        <a href="https://www.muktihealthcare.in/">
            <img src="assets/images/clients/c5.png" alt="brand-image"/>
        </a>
    </div>
</div>
            {/* </div> */}
          </div>
        {/* </div> */}
    </div>
</section>


      <section id="contact" class="contact">
        <div class="section-heading text-center">
          <h2>contact me</h2>
        </div>
        <div class="container">
          <div class="contact-content">
            <div class="row">
              <div class="col-md-offset-1 col-md-5 col-sm-6">
                <div class="single-contact-box">
                  <div class="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                      <div class="row">
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Name*"
                              name="from_name"
                            />
                          </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="Email*"
                              name="email_from"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="subject"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="form-group">
                            <input
                              class="form-control"
                              rows="8"
                              id="comment"
                              placeholder="Message"
                              name="message"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="single-contact-btn">
                            {!loader ? (
                              <button class="contact-btn" type="submit"> Submit </button>
                            ) : (
                              <CirclesWithBar
                                height="50"
                                width="30"
                                color="#fff"
                                outerCircleColor="#fff"
                                innerCircleColor="#fff"
                                barColor="#fff"
                                ariaLabel="circles-with-bar-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-offset-1 col-md-5 col-sm-6">
                <div class="single-contact-box">
                  <div class="contact-adress">
                    <div class="contact-add-head">
                      <h3>shirshendu pal</h3>
                      <p>mern stack developer</p>
                    </div>
                    <div class="contact-add-info">
                      <div class="single-contact-add-info">
                        <h3>phone</h3>
                        <p>8637090330</p>
                      </div>
                      <div class="single-contact-add-info">
                        <h3>email</h3>
                        <p>shirshendupal9@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div class="hm-foot-icon">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/shirshendu.pal.1"
                          target="_blank"
                        >
                          <i class="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/in/shirshendu-pal-60b8961a3/"
                          target="_blank"
                        >
                          <i class="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/sid_112321/"
                          target="_blank"
                        >
                          <i class="fa fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer-copyright" class="footer-copyright">
        <div class="container">
          <div class="hm-footer-copyright text-center">
            <p>&copy; copyright shirshendu pal</p>
          </div>
        </div>

        <div id="scroll-Top">
          <div class="return-to-top">
            <i class="fa fa-angle-up " id="scroll-top"></i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
