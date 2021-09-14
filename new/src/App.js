/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import Local from './localization_strings.json';
import Provider from './provider';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <Provider locale={Local[lang].translations}>
      <div className='App'>
        {' '}
        {/* Header Area wrapper Starts */}
        <header id='header-wrap'>
          {/* Navbar Start */}
          <nav className='navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar'>
            <div className='container'>
              {/* Brand and toggle get grouped for better mobile display */}
              {/* <a href="index.html" class="navbar-brand"><img src="assets/img/logo.png" alt=""></a> */}
              <img
                src='/assets/img/logo.png'
                style={{
                  width: '100px',
                  height: '100px',
                  margin: '10px 0',
                }}
                alt='Logo'
              />
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarCollapse'
                aria-controls='navbarCollapse'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <i className='lni-menu' />
              </button>
              <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav mr-auto w-100 justify-content-end clearfix'>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#home'>
                      <FormattedMessage id='#home' />
                    </a>
                  </li>
                  <li className='nav-item active'>
                    <a className='nav-link' href='#vision'>
                      <FormattedMessage id='#vision' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#goals'>
                      <FormattedMessage id='#goals' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#projects'>
                      <FormattedMessage id='#projects' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#collaborators'>
                      <FormattedMessage id='#collaborators' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#donation'>
                      <FormattedMessage id='#donation' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#publications'>
                      <FormattedMessage id='#publications' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#subscribe'>
                      <FormattedMessage id='#subscribe' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#contact'>
                      <FormattedMessage id='#contact' />
                    </a>
                  </li>
                  <li className='nav-item'>
                    <select
                      style={{
                        background: 0,
                        outline: 0,
                        color: 'white',
                        border: 0,
                      }}
                      onChange={(e) => {
                        // console.log(e.target.value);
                        setLang(e.target.value.toLowerCase());
                      }}>
                      {Object.keys(Local).map((i) => {
                        return (
                          <option value={i} style={{ color: 'black' }} key={i}>
                            {Local[i].Label}
                          </option>
                        );
                      })}
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Navbar End collaborators*/}
          {/* Hero Area Start */}
          <section id='home'>
            <div id='hero-area' className='hero-area-bg'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-12 col-sm-12'>
                    <div className='contents text-center'>
                      {/* <h2 class="head-title wow fadeInUp">AI Softwares</h2> */}
                      {/* <div class="header-button wow fadeInUp" data-wow-delay="0.3s">
                <a href="#features" class="btn btn-common">Explore</a>
              </div> */}
                      <section id='banner'>
                        <h1
                          style={{
                            paddingBottom: '0px',
                            marginBottom: '0.5em',
                          }}>
                          <FormattedMessage id='banner' />
                        </h1>
                        <p style={{ color: '#86a6ce' }}>
                          Under the aegis of the office of{' '}
                          <a
                            href='https://acr.iitb.ac.in/donation/'
                            target='_blank'>
                            Alumni and Corporate Relations IIT Bombay
                          </a>{' '}
                        </p>
                        <p
                          className='custom_tagline'
                          style={{ color: '#86a6ce' }}>
                          "Breaking the Language Barrier in Education"
                        </p>
                      </section>
                    </div>
                    <div
                      className='img-thumb text-center wow fadeInUp'
                      data-wow-delay='0.6s'>
                      {/* <img class="img-fluid" src="assets/img/banner.jpg" alt=""> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Hero Area End */}
          <section
            id='vision'
            className='wrapper'
            style={{ padding: '2%' }}></section>
        </header>
        {/* Header Area wrapper End */}
        {/* Feature Section Start */}
        {/* <div id="feature">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="text-wrapper">
            <div>
              <h2 class="title-hl wow fadeInLeft" data-wow-delay="0.3s">We do a bunch of things.</h2>
              <p class="mb-4">If you are interested, and want to inquire, fill the form below</p>
              <a target="_blank" href="https://forms.gle/u3GdSo3VG9QckmaM9" class="btn btn-common">Inquire</a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 padding-none feature-bg">
          <div class="feature-thumb">
            <a href="#video-analytics">
              <div class="feature-item wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                <div class="icon">
                  <i class="lni-video"></i>
                </div>
                <div class="feature-content">
                  <h3>Video Analytics in Defense and Security Applications</h3>
                  <p>Video Analytics and Surveillance softwares for video search, real-time intrusion detection,
                    perimeter monitoring, loitering detection, object tracking, etc.</p>
                </div>
              </div>
            </a>
            <a href="#document-analytics">
              <div class="feature-item wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="500ms">
                <div class="icon">
                  <i class="lni-archive"></i>
                </div>
                <div class="feature-content">
                  <h3>Document Analytics</h3>
                  <p>Optical Character Recognition (OCR) and Scene text Recognition for Indian languages and Indian
                    context</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
        {/* Feature Section End */}
        {/* <div class="container">
      <div class="section-header text-center ">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Our Vision</h2>
        <p>In India, every year, more than 1 crore students appear in CBSE, ICSE, and state board class 10th and 12th exams. Out of these students, more than 65% students study in non-English medium schools (link). Often, such students when join higher education institutes where the primary language of instruction is English, face language barriers. Lack of textbooks and other educational resources in native languages, add more to the issue for these students. Even when they wish to understand the content from supplementary resources such as the internet or trying to keep up with contemporary research, they face the similar issue. We are leaving behind such potential minds.
          <br /> 
          The lack of native language instruction also has a significant economic impact. Of the top twenty countries in GDP per capita, all of them use the language of the common people for higher and technical education. Most of these countries do not use English. In the bottom twenty economies, most of the countries are those which persist with a colonial language, not the mother tongue of the majority of people. The transition to mother tongue education requires significant investment in language infrastructure.
          <br />
          The New Education Policy (NEP) has asked for Higher Education to be made accessible to students in their mother tongues. The government has also urged IITs to optionally teach their curriculum in Indian languages and Prime Minister Modi has asked for every state to have at least one engineering and one medical institute in their mother tongue. To succeed in this initiative, we must have textbooks resources with the entire engineering and medical curriculum translated into the many Indian languages. In addition to this, we must set up a strong ecosystem which can help access the content in native languages.
        
          <br />
        </p>
          
      </div>
    </div> */}
        <div className='inner'>
          <header className='align-center'>
            <h2 className='text-center'>
              <FormattedMessage id='inner' />
            </h2>
          </header>
          <p>
            In India, every year, more than 1 crore students appear in CBSE,
            ICSE, and state board class 10th and 12th exams. Out of these
            students, more than 65% students study in non-English medium schools
            (
            <a href='https://ncert.nic.in/pdf/programmes/7thSurvey%20Reports/Mediaof_intruction.pdf'>
              link
            </a>
            ). Often, such students when join higher education institutes where
            the primary language of instruction is English, face language
            barriers. Lack of textbooks and other educational resources in
            native languages, add more to the issue for these students. Even
            when they wish to understand the content from supplementary
            resources such as the internet or trying to keep up with
            contemporary research, they face the similar issue. We are leaving
            behind such potential minds.
          </p>
          <br />
          <p>
            The lack of native language instruction also has a significant
            economic impact. Of the top twenty countries in GDP per capita, all
            of them use the language of the common people for higher and
            technical education. Most of these countries do not use English. In
            the bottom twenty economies, most of the countries are those which
            persist with a colonial language, not the mother tongue of the
            majority of people. The transition to mother tongue education
            requires significant investment in language infrastructure.
          </p>
          <br />
          <p>
            To succeed in this initiative, we must have textbooks resources with
            the entire engineering and medical curriculum translated into the
            many Indian languages. In addition to this, we must set up a strong
            ecosystem which can help access the content in native languages.
          </p>
        </div>
        <section id='goals' className='wrapper'>
          <div className=' secondary-bg' style={{ padding: '2%' }}>
            <div
              id='video-analytics-videosummy'
              className='skill-area section-padding'>
              <div className='container'>
                <div className='row'>
                  <div
                    className='col-lg-6 col-md-12 col-xs-12 wow fadeInRight'
                    data-wow-delay='0.3s'>
                    {/* <img  src="assets/videos/udaan.mp4" alt=""> */}
                    <video
                      className='img-fluid'
                      width={640}
                      height={480}
                      controls
                      autoPlay>
                      <source src='assets/videos/udaan.mp4' type='video/mp4' />
                    </video>
                  </div>
                  <div
                    className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                    data-wow-delay='0.3s'>
                    <div className='site-heading'>
                      <h2 className='section-title'>
                        <FormattedMessage id='goals' />
                      </h2>
                      <h4 className='section-subtitle'>
                        Demonstration of our UDAAN translation tool.
                      </h4>
                      <p>
                        Our in-house translation workbench from efficient
                        translation of documents in various Indian languages. We
                        invite contributions from people interested in
                        translating documents (either slides or text).
                      </p>
                    </div>
                    {/*           <div class="skills-section">
            <a target="_blank"
              href="https://www.cse.iitb.ac.in/~ocr/"
              class="btn btn-common btn-rm">More Information</a>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='inner'>
              <header className='align-center'>
                <h2 className='text-center'>
                  {' '}
                  <FormattedMessage id='#goals' />
                </h2>
              </header>
              <li>Web Platform with complete translation workbench</li>
              <li>
                Machine Learning models for translation and post editing to
                augment human translators
              </li>
              <li>
                Domain specific Linguistic resource (Dictionaries, translation
                memory) for efficient and consistent quality translation
              </li>
              <li>
                To setup parallel corpus in technical domain (&gt;30,00,000
                words) to speed up the translation and post editing research
              </li>
              <li>
                To translate and publish 500 books in native languages for
                engineering curriculum and make it accessible in cost effective
                manner
              </li>
              <li>
                Active ecosystem of seed translators, reviewer, proof readers
                around the platform
              </li>
            </div>
          </div>
        </section>
        <section id='projects' className='section-padding'>
          <div className='section-header text-center '>
            <h2 className=' wow fadeInDown' data-wow-delay='0.3s'>
              <FormattedMessage id='#projects' />
            </h2>
            {/* <p>Previous projects completed
    </p> */}
          </div>
          <div
            id='video-analytics-videosummy'
            className='skill-area section-padding'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 wow fadeInLeft'
                  data-wow-delay='0.3s'>
                  <img
                    className='img-fluid'
                    src='assets/img/signup.jpg'
                    alt=''
                  />
                </div>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                  data-wow-delay='0.3s'>
                  <div className='site-heading'>
                    <h2 className='section-title'>Akshar Anveshini</h2>
                    <h4 className='section-subtitle'>
                      Optical Character Recognition (OCR) and Post-editing
                      system for the Sanskrit language.
                    </h4>
                    <p>
                      Inhouse OCR(Optical Character Recognition) model for the
                      digitization of Sanskrit books.It uses state of the art
                      technology that gives us 95.14% character level accuracy
                      for Sanskrit text.
                    </p>
                  </div>
                  <div className='skills-section'>
                    <a
                      target='_blank'
                      href='https://www.cse.iitb.ac.in/~ocr/'
                      className='btn btn-common btn-rm'>
                      More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id="document-analytics" class="section-padding feature-bg feature-container">
    <div class="container">
      <div class="section-header text-center feature-content">
        <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Document Analytics</h2>
        <p>Optical Character Recognition (OCR) and Scene text Recognition for Indian languages and Indian context</p>
      </div>
    </div>
  </div> */}
          <div
            id='video-analytics-jigyasa'
            className='skill-area section-padding secondary-bg'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                  data-wow-delay='0.3s'>
                  <div className='site-heading'>
                    <h2 className='section-title'>IndicOCR</h2>
                    <h3 className='section-subtitle'>
                      Optical Character Recognition for Indian Texts
                    </h3>
                    <p>
                      End-to-end framework for Error Detection and Corrections
                      in Indic-OCR
                    </p>
                  </div>
                  <div className='skills-section'>
                    <a
                      target='_blank'
                      href='https://www.cse.iitb.ac.in/~rohitsaluja/project.html'
                      className='btn btn-common btn-rm'>
                      More Information
                    </a>
                    <p
                      style={{
                        fontSize: '0.8em',
                        fontWeight: 900,
                        padding: '6px',
                      }}>
                      Credentials to use the software can be provided upon
                      acknowledgement/request.
                    </p>
                  </div>
                </div>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 wow fadeInLeft'
                  data-wow-delay='0.3s'>
                  <img
                    className='img-fluid'
                    src='assets/img/icdar-ost.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div id='decile' className='skill-area section-padding'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 wow fadeInLeft'
                  data-wow-delay='0.3s'>
                  <img
                    className='img-fluid'
                    src='assets/img/Decile-Interface.png'
                    alt=''
                  />
                </div>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                  data-wow-delay='0.3s'>
                  <div className='site-heading'>
                    <h2 className='section-title'>DECILE</h2>
                    <h3 className='section-subtitle'>
                      Data Efficient Machine Learning
                    </h3>
                    <p>
                      Data Efficient Learning with Less Data State of the art AI
                      and Deep Learning are very data hungry. This comes at
                      significant cost including larger resource costs (multiple
                      expensive GPUs and cloud costs), training times (often
                      times multiple days), and human labeling costs and time.
                      Decile attempts to solve this by answering the following
                      question. Can we train state of the art deep models with
                      only a sample (say 5 to 10\%) of massive datasets, while
                      having neglibible impact in accuracy? Can we do this while
                      reducing training time/cost by an order of magnitude,
                      and/or significantly reducing the amount of labeled data
                      required?
                    </p>
                  </div>
                  <div className='skills-section'>
                    <a
                      target='_blank'
                      href='https://decile.org/'
                      className='btn btn-common btn-rm'>
                      More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id='video-analytics-jigyasa'
            className='skill-area section-padding secondary-bg'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                  data-wow-delay='0.3s'>
                  <div className='site-heading'>
                    <h2 className='section-title'>MALTA</h2>
                    <h4 className='section-subtitle'>
                      Multi-Modal And Multi-Lingual Temporal Sentence Alignment
                    </h4>
                    <p>
                      For localizing sentences/captions in videos that leverages
                      both audio and video modalities and that can generalize to
                      new and possibly low-resource language settings.Moreover,
                      it is a rich new dataset, whose annotation is driven by
                      both audio and visual modalities and which is richer in
                      the audio modality than previous datasets.
                    </p>
                  </div>
                  <div className='skills-section'>
                    <a
                      target='_blank'
                      href='https://www.cse.iitb.ac.in/~malta/index.html'
                      className='btn btn-common btn-rm'>
                      More Information
                    </a>
                  </div>
                </div>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 wow fadeInLeft'
                  data-wow-delay='0.3s'>
                  <img
                    className='img-fluid'
                    src='assets/img/varnamala.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
          <div id='decile' className='skill-area section-padding'>
            <div className='container'>
              <div className='row'>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 wow fadeInLeft'
                  data-wow-delay='0.3s'>
                  <img
                    className='img-fluid'
                    src='assets/img/marati_conversion.jpg'
                    alt=''
                  />
                </div>
                <div
                  className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                  data-wow-delay='0.3s'>
                  <div className='site-heading'>
                    <h2 className='section-title'>
                      <FormattedMessage id='decile' />
                    </h2>
                    <h3 className='section-subtitle'>
                      cRoss lingUal viDeo anD tExt Retrieval.
                    </h3>
                    <p>
                      <FormattedMessage id='decile' /> consists of 492(to be
                      updated) videos, with an average length of 80 seconds and
                      around 7 sentences describing every video. A video is
                      present in multiple languages namely HINDI, TAMIL,
                      MALAYALAM, URDU, KANNADA. (Note: All videos do not have
                      audio in every language mentioned earlier)
                    </p>
                  </div>
                  <div className='skills-section'>
                    <a
                      target='_blank'
                      href='https://rudder-2021.github.io/about.html'
                      className='btn btn-common btn-rm'>
                      More Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='collaborators' className='wrapper'>
          <div className style={{ padding: '2%' }}>
            <div className='inner'>
              <header className='align-center'>
                <h2 className='text-center'>Technical Team</h2>
              </header>
              {/* <div class="row">
        <div class="column" style="background-color:white;">
          <h5>Indian Institute of Technology Bombay</h5>
          <p>Some text..</p>
        </div>
        <div class="column" style="background-color:white;">
          <h5>Aify Innovation Labs Pvt Ltd</h5>
          <p>Some text..</p>
        </div>
        <div class="column" style="background-color:white;">
          <h5>Garuda Prakashan Pvt. Ltd.</h5>
          <p>Some text..</p>
        </div> */}
              {/*MODAL*/}
              <div
                className='modal fade'
                id='basicModal'
                tabIndex={-1}
                role='dialog'
                aria-labelledby='basicModal'
                aria-hidden='true'
                style={{ marginTop: '100px' }}>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h4 className='modal-title' id='myModalLabel'>
                        Ganesh Arnaal
                      </h4>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'>
                        <span aria-hidden='true'>×</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <span style={{ wordWrap: 'break-word' }}>
                        {/* We at CSC, IIT-B have been working closely with Shri
                        Ganesh Arnaal, a linguistic expert since 2013. He is a
                        Chartered Accountant by qualification and he runs a
                        boutique investment bank in Mumbai. His passion for
                        Indian languages and Indian language computing brought
                        him to CSC. His firm Bharat Bhasha Sanganan has
                        developed a complete User Interface in HIndi for Open
                        Office. Shri Arnaal has advocated the development of
                        lexical resources and human aid to support machine
                        translation. We would like to acknowledge his role in
                        the development of our Udaan project. He has agreed to
                        take up translation and post-edit work on technical
                        books in Engineering. */}
                        <FormattedMessage id='basicModal' />
                      </span>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex--middle flex--center flex--custom-4'>
                <a href='https://www.cse.iitb.ac.in/~ganesh' />
                <div className='e2-35 x-col gc_ai_app  one'>
                  <a href='https://www.cse.iitb.ac.in/~ganesh'>
                    <div className='e2-36 x-text align-center-icon'>
                      <img
                        src='assets/img/GaneshRamakrishnan.jpeg'
                        alt='Prof.Ganesh'
                        className='custom_avatar'
                      />
                      <h5>Prof. Ganesh Ramakrishnan</h5>
                      <div className='e2-36 x-text align-center-icon'>
                        <FormattedMessage id='Prof.Ganesh' />
                      </div>
                    </div>
                    <br />
                  </a>
                  <br />
                </div>
                &nbsp;&nbsp;&nbsp;
                <a href='#' data-toggle='modal' data-target='#basicModal' />
                <div className='e2-37 x-col gc_ai_app  three'>
                  <a href='#' data-toggle='modal' data-target='#basicModal'>
                    {/*https://in.linkedin.com/in/ganesh-arnaal-a29b22186*/}
                    <div className='e2-38 x-text align-center-icon'>
                      <img
                        src='assets/img/GaneshArnaal.jpeg'
                        alt='GaneshArnaal'
                        className='custom_avatar'
                      />
                      <h5>Ganesh Arnaal</h5>
                      <div
                        className='e2-38 x-text align-center-icon'
                        style={{ paddingTop: '0px' }}>
                        <FormattedMessage id='GaneshArnaal' />
                      </div>
                    </div>
                  </a>
                </div>
                &nbsp;&nbsp;&nbsp;
                <a href='https://www.linkedin.com/in/pankaj-singh-b000894a/' />
                <div className='e2-37 x-col gc_ai_app  three'>
                  <a href='https://www.linkedin.com/in/pankaj-singh-b000894a/'>
                    <div className='e2-38 x-text align-center-icon'>
                      <img
                        src='assets/img/pankaj.singh.jpg'
                        alt='PankajSingh'
                        className='custom_avatar'
                      />
                      <h5>Pankaj Singh</h5>
                      <div
                        className='e2-38 x-text align-center-icon'
                        style={{ paddingTop: '0px' }}>
                        Director, Aify Innovation Labs
                      </div>
                    </div>
                  </a>
                </div>
                <a href='https://www.cse.iitb.ac.in/~ayusham' />
                <div
                  className='e2-37 x-col gc_ai_app  three'
                  style={{ marginTop: '10px' }}>
                  <a href='https://www.cse.iitb.ac.in/~ayusham'>
                    <div className='e2-38 x-text align-center-icon'>
                      <img
                        src='assets/img/AyushMaheshwari.jpeg'
                        alt='Ayush Maheshwari'
                        className='custom_avatar'
                      />
                      <h5>Ayush Maheshwari</h5>
                      <div
                        className='e2-38 x-text align-center-icon'
                        style={{ paddingTop: '0px' }}>
                        <br />
                        <FormattedMessage id='Ayush Maheshwari' />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='collaborators' className='wrapper'>
          <header className='align-center'>
            <h5 className='text-center'>
              <FormattedMessage id='collaborators' />
            </h5>
          </header>
          {/* students */}
          <div className style={{ padding: '2%' }}>
            <div className='inner'>
              <div className='row'>
                <div className='col'>
                  <a
                    href='https://www.cse.iitb.ac.in/~piyusharma/'
                    target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/piyush_sharma.jpg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Piyush Sharma</h5>
                        <p className='card-text'>MTech, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a
                    href='https://www.cse.iitb.ac.in/~iishapandey/'
                    target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/isha_pandey.JPG'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Isha Pandey</h5>
                        <p className='card-text'>MTech, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a
                    href='https://www.linkedin.com/in/souvik-pal-75b1b1178/'
                    target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/souvik_pal.jpeg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Souvik Pal</h5>
                        <p className='card-text'>DD, CMINDS</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a href='https://www.cse.iitb.ac.in/~vineethdorna/'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='https://www.cse.iitb.ac.in/~vineethdorna/photos/vineeth3.jpg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Vineeth Dorna</h5>
                        <p className='card-text'>BTech, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <br />
              <div className='row'>
                <div className='col'>
                  <a
                    href='https://www.cse.iitb.ac.in/~arjunk/
'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='https://www.cse.iitb.ac.in/~arjunk/im1.jpeg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Arjun Kashettiwar</h5>
                        <p className='card-text'>BTech, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a href='https://www.cse.iitb.ac.in/~harshadingole'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='https://www.cse.iitb.ac.in/~harshadingole/ta.jpeg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Harshad Ingole</h5>
                        <p className='card-text'>BTech, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a
                    href='https://www.cse.iitb.ac.in/~kkbhatt/'
                    target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/krishnakant_bhatt.jpg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Krishnakant Bhatt</h5>
                        <p className='card-text'>MS, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a
                    href='https://www.linkedin.com/in/ajay-r-376673132'
                    target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/ajay_ravindran.jpg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Ajay Ravindran</h5>
                        <p className='card-text'>MTech, CSE</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <header className='align-center'>
            <h5 className='text-center'>Interns</h5>
          </header>
          <div className style={{ padding: '2%' }}>
            <div className='inner'>
              <div className='row'>
                <div className='col'>
                  <a
                    href='http://www.linkedin.com/in/sanskar-sehgal'
                    target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/sanskar_sehgal.png'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Sanskar Sehgal</h5>
                        <p className='card-text'>Intern, IIT Bombay</p>
                      </div>
                    </div>
                  </a>
                </div>
                {/*      
              <div class="col">
                <a href="#">
                  <div class="card" style="background-color: rgba(242,244,248,.92);">
                    <div class="card-body">
                      <img src="assets/img/profile.png" alt="DP" class="custom_avatar">
                      <h5 class="card-title">Anjali Vijayvargiya</h5>
                      <p class="card-text">Intern, IIT Bombay</p>
                    </div>
                  </div>
                </a>
              </div>
	*/}
                <div className='col'>
                  <a href='https://bit.ly/3z35NtP' target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/team/yash_kadam.jpeg'
                          alt='DP'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Yash Kadam</h5>
                        <p className='card-text'>Intern, IIT Bombay</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className='col'>
                  <a href='https://bdbose.tech/' target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/Bidipto.png'
                          alt='Bidipto Bose'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Bidipto Bose</h5>
                        <p className='card-text'>Intern, IIT Bombay</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <br />
              <div class='row'>
                <div className='col'>
                  <a href='#' target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/Akanksha.png'
                          alt='Akanksha'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Akanksha Mategaonkar</h5>
                        <p className='card-text'>Intern, IIT Bombay</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='col'>
                  <a href='#' target='_blank'>
                    <div
                      className='card'
                      style={{ backgroundColor: 'rgba(242,244,248,.92)' }}>
                      <div className='card-body'>
                        <img
                          src='assets/img/Akshita.png'
                          alt='Akshita'
                          className='custom_avatar'
                        />
                        <h5 className='card-title'>Akshita Shivani</h5>
                        <p className='card-text'>Intern, IIT Bombay</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='collaborators1' className='wrapper'>
          <div className style={{ padding: '2%' }}>
            <div className='inner'>
              <header className='align-center'>
                <h2 className='text-center'>
                  <FormattedMessage id='collaborators1' />
                </h2>
              </header>
              {/* popover/modal for publisher */}
              <div
                className='modal fade'
                id='basicModal2'
                tabIndex={-1}
                role='dialog'
                aria-labelledby='basicModal2'
                aria-hidden='true'
                style={{ marginTop: '100px' }}>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h4 className='modal-title' id='myModalLabel'>
                        <FormattedMessage id='basicModal2' />
                      </h4>
                      {/*
		    <div class="e2-38 align-center-icon" style="padding-top: 0px;">
                	Founder - Ganesh Arnaal
            		</div>
		    */}
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'>
                        <span aria-hidden='true'>×</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <span style={{ wordWrap: 'break-word' }}>
                        Somayaji <FormattedMessage id='basicModal2' /> was
                        promoted by Ganesh Arnaal to create content in Indian
                        languages for higher education by translating
                        recommended text books and reference books. Somayaji{' '}
                        <FormattedMessage id='basicModal2' /> has also been
                        actively involved in developing resources for computing
                        in Indian Languages.
                      </span>
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex--middle flex--center flex--custom-4'>
                <a href='https://www.garudaprakashan.com/about-us/' />
                <div className='e2-37 x-col gc_ai_app  two custom_card'>
                  <a href='https://www.garudaprakashan.com/about-us/'>
                    <div className='e2-38 x-text align-center-icon'>
                      <br />
                      <br />
                      <img
                        src='assets/img/publisher1.png'
                        alt='Garuda Prakashan'
                        className='custom_avatar'
                      />
                      <h5 style={{ margin: 0 }}>Garuda Prakashan</h5>
                      <div
                        className='e2-38 align-center-icon'
                        style={{ paddingTop: '0px' }}>
                        CEO and MD, Sankrant Sanu
                      </div>
                    </div>
                  </a>
                </div>
                &nbsp;&nbsp;&nbsp;
                <a href='#' data-toggle='modal' data-target='#basicModal2' />
                <div
                  className='e2-37 x-col gc_ai_app  three custom_card'
                  style={{
                    height: 'fit-content',
                  }}>
                  <a href='#' data-toggle='modal' data-target='#basicModal2'>
                    {/*https://in.linkedin.com/in/ganesh-arnaal-a29b22186*/}
                    <div className='e2-38 x-text align-center-icon'>
                      <br />
                      <br />{' '}
                      <img
                        src='assets/img/publisher2.png'
                        alt='Somayaji'
                        className='custom_avatar'
                      />
                      <h5 style={{ margin: 0 }}>
                        {' '}
                        Somayaji <FormattedMessage id='basicModal2' />
                      </h5>
                      <div
                        className='e2-38 align-center-icon'
                        style={{ paddingTop: '0px' }}>
                        Founder, Ganesh Arnaal
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='donation' className='section-padding'>
          <div className='container'>
            <div className='section-header text-center'>
              <h2
                className='section-title wow fadeInDown'
                data-wow-delay='0.3s'>
                <FormattedMessage id='donation' />
              </h2>
              <p>Willing to donate? Here's how you can...</p>
            </div>
            <div className='row'>
              <div
                className='col-lg-6 col-md-12 col-xs-12 info wow fadeInRight'
                data-wow-delay='0.3s'>
                <div className='site-heading'>
                  <h3 className='section-subtitle'>
                    Here's how you can donate to strengthen our community
                  </h3>
                  <ul>
                    <li style={{ listStyleType: 'square' }}>
                      Follow the{' '}
                      <strong>
                        <a
                          target='_blank'
                          href='https://acr.iitb.ac.in/donation/Donation'>
                          Donate
                        </a>
                      </strong>{' '}
                      button below to our donation portal
                    </li>
                    <li style={{ listStyleType: 'square' }}>
                      Enter the amount you wish to donate
                    </li>
                    <li style={{ listStyleType: 'square' }}>
                      Select Project - "PROJECT UDAAN"{' '}
                    </li>
                    <li style={{ listStyleType: 'square' }}>
                      Select your affiliation with the project.
                    </li>
                    <li style={{ listStyleType: 'square' }}>
                      Enter your details in the form.
                    </li>
                    <li style={{ listStyleType: 'square' }}>
                      Click on "Donate". You will be redirected to select the
                      mode of payment
                    </li>
                  </ul>
                  <p style={{ opacity: '0.5', fontSize: '10px' }}>
                    We support Online banking and UPI for now. Support to be
                    extended soon.
                  </p>
                </div>
                <div className='skills-section'>
                  <a
                    target='_blank'
                    href='https://acr.iitb.ac.in/donation/Donation'
                    className='btn btn-common btn-rm'>
                    Donate
                  </a>
                  <p
                    style={{
                      fontSize: '0.8em',
                      fontWeight: 900,
                      padding: '6px',
                    }}>
                    You will be redirected to our donation portal.
                  </p>
                </div>
              </div>
              <div
                className='col-lg-6 col-md-12 col-xs-12 wow fadeInLeft'
                data-wow-delay='0.3s'>
                <img
                  className='img-fluid'
                  src='assets/img/demo-to-donate.gif'
                  alt=''
                />
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Section */}
        <section id='publications' className='section-padding'>
          {/* Container Starts */}
          <div className='container'>
            <div className='section-header text-center'>
              <h2
                className='section-title wow fadeInDown'
                data-wow-delay='0.3s'>
                Publications
              </h2>
              <p>Publications related to the projects.</p>
            </div>
            {/* Portfolio Recent Projects */}
            <div className='row'>
              {/* <div class="row"> */}
              <div className='paper-contianer'>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/aaai2021.pdf'>
                    GLISTER: Generalization based Data Subset Selection for
                    Efficient and Robust Learning
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors1' />
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 35th AAAI Conference on Artificial
                    Intelligence (AAAI 2021).
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://arxiv.org/pdf/2101.10368.pdf'>
                    Meta-Learning for Effective Multi-task and Multilingual
                    Modelling
                  </a>
                  <p className='paper-authors'>
                    Ishan Tarunesh, Sushil Khyalia, Vishwajeet Kumar, Ganesh
                    Ramakrishnan, Preethi Jyothi
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 16th Conference of the European
                    Chapter of the Association for Computational Linguistics
                    (EACL 2021)
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.isca-speech.org/archive/Interspeech_2020/pdfs/3157.pdf'>
                    Caption Alignment for Low Resource Audio-Visual Data
                  </a>
                  <p className='paper-authors'>
                    Vighnesh Reddy Konda, Mayur Warialani, Rakesh Prasanth
                    Achari, Varad Bhatnagar, Jayaprakash Akula, Ganesh
                    Ramakrishnan, Pankaj Singh, Gholamreza Haffari and Preethi
                    Jyothi
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 21st INTERSPEECH Conference
                    (Interspeech 2020), Shanghai, China.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/icdar2019b.pdf'>
                    OCR On-the-Go: Robust End-to-end Systems for Reading License
                    Plates &amp; Street Signs
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors11' />{' '}
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 15th International Conference on
                    Document Analysis and Recognition (ICDAR 2019), Sydney,
                    Australia.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/icdarost2019.pdf'>
                    StreetOCRCorrect: An Interactive Framework forOCR
                    Corrections in Chaotic Indian Street Videos
                  </a>
                  <p className='paper-authors'>
                    Pankaj Singh, Bhavya Patwa, Rohit Saluja, Ganesh
                    Ramakrishnan, Parag Chaudhuri and Mark Carman
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 2nd International Workshop on Open
                    Services and Tools for Document Analysis, associated with
                    the 15th International Conference on Document Analysis and
                    Recognition (ICDAR-OST 2019), Sydney, Australia.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/wacv2019b.pdf'>
                    Learning From Less Data: Diversified Subset Selection and
                    Active Learning in Image Classification Tasks
                  </a>
                  <p className='paper-authors'>
                    Vishal Kaushal, Rishabh Iyer, Anurag Sahoo, Khoshrav Doctor,
                    Narasimha Raju, Ganesh Ramakrishnan
                  </p>
                  <p className='paper-conference'>
                    Accepted paper at the 7th IEEE Winter Conference on
                    Applications of Computer Vision (WACV), 2019, Hawaii, USA.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/icdar2019a.pdf'>
                    Sub-word Embeddings for OCR Corrections in Highly Fusional
                    Indic Languages
                  </a>
                  <p className='paper-authors'>
                    Rohit Saluja, Mayur Punjabi, Mark Carman, Ganesh
                    Ramakrishnan and Parag Chaudhuri
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 15th International Conference on
                    Document Analysis and Recognition (ICDAR 2019), Sydney,
                    Australia.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/wsc2018.pdf'>
                    Improving the learnability of classifiers for Sanskrit OCR
                    corrections
                  </a>
                  <p className='paper-authors'>
                    Devaraja Adiga, Rohit Saluja, Vaibhav Agrawal, Ganesh
                    Ramakrishnan, Parag Chaudhuri, K. Ramasubramanian and Malhar
                    Kulkarni
                  </p>
                  <p className='paper-conference'>
                    Proceedings of the 17th World Sanskrit Conference,
                    Vancouver, 2018.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~pjyothi/files/IS18c.pdf'>
                    Time Aggregation Operators for Multi-label Audio Event
                    Detection
                  </a>
                  <p className='paper-authors'>
                    Pankaj Joshi, Digvijaysingh Gautam, Ganesh Ramakrishnan and
                    Preethi Jyothi
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of The 21st INTERSPEECH Conference
                    (Interspeech 2018), Shanghai, China.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.aaai.org/ocs/index.php/AAAI/AAAI18/paper/download/16911/15686#:~:text=We%20describe%20MultiSynth%2C%20a%20framework,generalizes%20over%20all%20the%20examples.'>
                    Synthesis of Programs from Multimodal Datasets
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors10' />
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of the 32nd AAAI Conference on Artificial
                    Intelligence (AAAI-18), New Orleans, Louisiana, USA
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/icdar17.pdf'>
                    Error Detection and Corrections in Indic OCR using LSTMs
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors11' />
                  </p>
                  <p className='paper-conference'>
                    International Conference on Document Analysis and
                    Recognition (ICDAR) 2017, Kyoto, Japan.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/icdar-ost17.pdf'>
                    A Framework for Document Specific Error Detection and
                    Corrections in Indic OCR
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors11' />
                  </p>
                  <p className='paper-conference'>
                    1st International Workshop on Open Services and Tools for
                    Document Analysis (ICDAR- OST) 2017, Kyoto, Japan.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://ieeexplore.ieee.org/document/8270254'>
                    A Framework for Error Detection and Corrections in Sanskrit
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors11' />{' '}
                  </p>
                  <p className='paper-conference'>
                    Research and Innovation Symposium in Computing (RISC) 2017
                    (Most Admiring Poster Presentation Award), IIT-Bombay,
                    India.
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.cse.iitb.ac.in/~ganesh/papers/pakdd16.pdf'>
                    Building Compact Lexicons for Cross-Domain SMT by mining
                    near-optimal Pattern Sets
                  </a>
                  <p className='paper-authors'>
                    Pankaj Singh, Ashish Kulkarni, Himanshu Ojha, Vishwajeet
                    Kumar, Ganesh Ramakrishnan
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of the 20th Pacific Asia Conference on
                    Knowledge Discovery and Data Mining (PAKDD) 2016
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://www.aclweb.org/anthology/P15-1054.pdf'>
                    Summarizing Multi-Document Topic Hierarchies using
                    Submodular Mixtures
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors15' />
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of the Annual Meeting of the Association for
                    Computational Linguistics (ACL), Beijing, China, July - 2015
                  </p>
                </div>
                <div className='paper'>
                  <a
                    className='paper-title'
                    target='_blank'
                    href='https://dl.acm.org/doi/abs/10.1145/2815833.2816961'>
                    A Machine Assisted Human Translation System for Technical
                    Documents.
                  </a>
                  <p className='paper-authors'>
                    <FormattedMessage id='paper-authors16' />
                  </p>
                  <p className='paper-conference'>
                    In Proceedings of the 8th International Conference on
                    Knowledge Capture (p. 33). ACM.
                  </p>
                </div>
                <div className='paper-contianer'>
                  <div className='paper'>
                    <a
                      className='paper-title'
                      target='_blank'
                      href='http://grpr.in/emm'>
                      The English Medium Myth (2nd Edition)
                    </a>
                    <p className='paper-authors'>
                      <FormattedMessage id='paper-authors17' />
                    </p>
                    <p className='paper-conference'>
                      {/* In Proceedings of The 35th AAAI Conference on Artificial Intelligence (AAAI 2021). */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Container Ends */}
          </div>
        </section>
        {/* Portfolio Section Ends */}
        <section id='subscribe' className='section-padding'>
          <section className='customwrapper'>
            <div className='inner'>
              <h3>
                <FormattedMessage id='category' />
              </h3>
              <form className='contact' id='contactForm'>
                <div
                  className='mycontainer'
                  style={{ backgroundColor: 'white' }}>
                  <input type='text' placeholder='Name' name='name' required />
                  <input
                    type='text'
                    placeholder='Email address'
                    name='mail'
                    required
                  />
                  <label htmlFor='category'>Category</label>
                  <select id='category' name='category'>
                    <option value='Enquiry'>
                      <FormattedMessage id='category' />
                    </option>
                    <option value='Collaboration'>Collaboration</option>
                    <option value='Appreciation'>Appreciation</option>
                  </select>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Write something..'
                    style={{ height: '200px' }}
                    defaultValue={''}
                  />
                </div>
                <div className='mycontainer'>
                  <input
                    type='submit'
                    defaultValue='Submit'
                    onclick='myFunc();'
                  />
                </div>
              </form>
            </div>
          </section>
        </section>
        {/* Contact Section Start */}
        <section id='contact' className='section-padding secondary-bg'>
          <div className='container'>
            <div
              className='row contact-form-area wow fadeInUp'
              data-wow-delay='0.4s'>
              <div className='col-md-6 col-lg-6 col-sm-12'>
                <div className='contact-right-area wow fadeIn'>
                  {/* <div class="contact-title">
              <h1>We're a friendly bunch..</h1>
              <p>We create projects for companies and startups with a passion for quality</p>
            </div> */}
                  <h2>
                    <FormattedMessage id='contact' />
                  </h2>
                  <div className='contact-right'>
                    <div className='single-contact'>
                      <div className='contact-icon'>
                        <i className='lni-map-marker' />
                      </div>
                      <p>SI-A418, KReSIT, IIT-Bombay, Mumbai, Maharastra</p>
                    </div>
                    <div className='single-contact'>
                      <div className='contact-icon'>
                        <i className='lni-envelope' />
                      </div>
                      <p>
                        <a href='mailto:ganesh@cse.iitb.ac.in'>
                          ganesh@cse.iitb.ac.in
                        </a>
                      </p>
                    </div>
                    <div className='single-contact'>
                      <div className='contact-icon'>
                        <i className='lni-phone-handset' />
                      </div>
                      <p>
                        <a href='tel:+91-022-25767728'>+91-022-25767728</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section End */}
        {/* Copyright Section Start */}
        <div className='copyright'>
          <div className='container'>
            <div className='row'></div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
