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
              <a href="/pages/about.html">About</a>
            </li>
            <li>
              <nuxt-link to="/exec">Exec</nuxt-link>
            </li>
            <li>
              <a href="/pages/exec/index.html">Exec Control Panel</a>
            </li>
            <li>
              <a href="/pages/exec_resources.html">Exec Resources</a>
            </li>
            <li>
              <nuxt-link to="/protected/minutes">Minutes</nuxt-link>
            </li>
            <li>
              <a href="/pages/open_meetings.html">Open Meetings</a>
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
              <a href="/pages/society_funding.html">Funding &amp; FAQs</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Info</a>
          <ul>
            <li>
              <a href="/pages/accommodation.html">Accommodation</a>
            </li>
            <li>
              <a href="/pages/bar.html">Bar</a>
            </li>
            <li>
              <a href="/pages/gym.html">College Gym</a>
            </li>
            <li>
              <a href="/pages/insurance.html">College Insurance</a>
            </li>
            <li>
              <a href="/pages/parents.html">College Parents</a>
            </li>
            <li>
              <a href="/pages/computing.html">Computing</a>
            </li>
            <li>
              <a href="/pages/shop.html">ECSU Shop</a>
            </li>
            <li>
              <a href="/pages/ents.html">Emma Ents</a>
            </li>
            <li>
              <a href="/pages/careers.html">Emma Careers</a>
            </li>
            <li>
              <a href="/pages/formal.html">Formal Hall</a>
            </li>
            <li>
              <a href="/pages/green.html">Green</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#" class="icon fa-angle-down">Resources</a>
          <ul>
            <li>
              <a href="/pages/feedback.html">Anonymous Feedback</a>
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
              <a href="/pages/request.html">Request a Feature</a>
            </li>
            <li>
              <a href="/pages/roar.html">ROAR</a>
            </li>
          </ul>
        </li>

        <li>
          <a class="button" href="/pages/prospective.html">Prospective</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
