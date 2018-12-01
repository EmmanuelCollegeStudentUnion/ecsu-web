<template>
  <header id="header">
    <img src="/images/logo1.png" width="165px" id="borderimg1">

    <!-- Logo -->
    <span class="logo"/>

    <!-- Nav -->
    <nav id="nav">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Exec</a>
          <ul>
            <li>
              <nuxt-link to="/info/about">About</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/exec">Exec</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/exec_resources">Exec Resources</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/protected/minutes">Minutes</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/open_meetings">Open Meetings</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/protected/official_documents">Official Documents</nuxt-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Welfare</a>
          <ul>
            <li>
              <nuxt-link to="/welfare/">Welfare</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/disabilities">Accessibility in College</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/welfare_request">Anonymous Welfare Message</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/welfare_in_college">Welfare in College</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/cusu_support">CUSU Support</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/drugs_and_alcohol">Drugs and Alcohol</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/exams">Exams</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/female_resources">Female Resources</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/health">Health</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/lgbt">LGBT+</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/safety">Safety</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/welfare/disabled">Students with Disabilities</nuxt-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Societies</a>
          <ul>
            <li>
              <nuxt-link to="/societies">Emmanuel Societies</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/society_funding">Funding &amp; FAQs</nuxt-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Info</a>
          <ul>
            <li>
              <nuxt-link to="/info/accommodation">Accommodation</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/bar">Bar</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/gym">College Gym</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/insurance">College Insurance</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/parents">College Parents</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/computing">Computing</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/shop">ECSU Shop</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/ents">Emma Ents</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/careers">Emma Careers</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/formal">Formal Hall</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/green">Green</nuxt-link>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Resources</a>
          <ul>
            <li>
              <nuxt-link to="/feedback">Anonymous Feedback</nuxt-link>
            </li>
            <li>
              <a href="#">Online Booking</a>
              <ul>
                <li>
                  <nuxt-link to="/protected/laundry">Laundry</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/protected/squash">Squash</nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <nuxt-link to="/feedback">Request a Feature</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/info/roar">ROAR</nuxt-link>
            </li>
          </ul>
        </li>

        <li>
          <nuxt-link class="button" to="/posts/prospective">Prospective</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
