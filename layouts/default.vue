<template>
  <div>
    <div class="wrap">
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <b-navbar toggleable="md">
          <b-container>
            <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
            <b-navbar-brand><a href="/about">New Edge Engineering Ltd</a></b-navbar-brand>
            <b-collapse is-nav id="nav_dropdown_collapse">
              <b-navbar-nav>
                <b-nav-item to="/about"><i class="fa fa-home"></i> About</b-nav-item>
                <b-nav-item to="/passion"><i class="fa fa-info-circle"></i> Passion</b-nav-item>
                <b-nav-item to="/clients"><i class="fa fa-user-circle"></i> Clients </b-nav-item>
                <b-nav-item to="/contact"><i class="fa fa-envelope"></i> Contact</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>

        <div class="body">
          <vc-cookie-consent
            :buttons-dark="false"
            color="grey l-400"
            :cookie-days="3652"
            :dark="false"
            :read-button="false">To give you the best possible experience this site uses cookies. Continue to use the site if you agree with this</vc-cookie-consent>
          <nuxt/>
        </div>
    </div>
    <footer class="footer">
        <div class="container">
            <div class="footer-inner text-center">
                <b-row>
                    <div class="hidden-xs col-sm-2 col-md-3 col-lg-4"></div>
                    <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
                    <ul class="social">
                        <li>
                            <a target="_blank" href="https://www.google.com/+NewedgeengineeringLimited"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="http://twitter.com/newedgeengineer"><i class="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/company/new-edge-engineering-ltd"><i class="fa fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/New-Edge-Engineering/"><i class="fa fa-github"></i></a>
                        </li>
                    </ul>
                    </div>
                    <div class="hidden-xs col-sm-2 col-md-3 col-lg-4"></div>
                </b-row>
                <b-row>
                    <div class="hidden-xs hidden-sm col-md-3 col-lg-4"></div>
                    <p class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                         &copy; 2009 - {{ date|moment('YYYY') }} <a href="http://www.newedgeengineering.com">New EdgeEngineering Ltd</a>.<br />A registered as a private limited company in England & Wales No: 06846079, VAT: 973 0618 12
                    </p>
                    <div class="hidden-xs hidden-sm col-md-3 col-lg-4"></div>
                </b-row>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    isActive (name) {
      var result = false;
      if(name === "about") {
        result = true;
      }
      return result;
    }
  }
}
</script>

<style lang="less">
/**
 * This is the main application stylesheet. It should include or import all
 * stylesheets used throughout the application as this is the only stylesheet in
 * the Grunt configuration that is automatically processed.
 */

@import '~assets/html5boilerplate.less';

/**
 * This is our main variables file. We must include it last so we can overwrite
 * any variable definitions in our imported stylesheets.
 */

@import '~assets/variables.less';

/**
 * Typography
 */

@mixin font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local('Roboto Regular'), local('Roboto-Regular'), url('/fonts/Roboto-Regular.woff') format('woff');
}

body {
  background-color: @white;
  @include font-face;
}

h1, h2 {
  color: @blue;
}

.body {
  h1, h2, p {
    margin-left: 4px;
    margin-right: 4px;
  }
}

h1 {
  margin-top: 8px;
  font-size: 2.5em;
}

.navbar {
  padding-top: 0em;
  padding-bottom: 0em;
}

.navbar-light {
  background-color: @blue;

  .navbar-brand a {
    color: @red;
    font-size: 1em;
  }

  .navbar-nav {
    .show > .nav-link,
    .active > .nav-link,
    .nav-link.show,
    .nav-link.active {
      background-color: @red;
      color: @white;
      padding-top: 1em;
      padding-bottom: 1em;
    }

    .nav-link {
      color: #9d9d9d;
      padding-top: 1em;
      padding-bottom: 1em;

    }

    .nav-link:hover,
    .nav-link:focus {
      color: @white;
    }
  }
}

.navbar-fixed-top {
  border-bottom-width: 0px;
}

/** Consent ******************************************************************/
.consent {
  background-color: @gray-lighter;
  margin-top: 50px;
  padding: 4px;
  p {
    margin-bottom: 0px;
  }
}

#consent-copy {
  @media (min-width: @screen-lg-min) {
    vertical-align: middle;
    line-height: 2.4;
    padding-bottom: 0px;
  }
}
/**
 * Footer
 */

.footer {
  background-color: @gray-lighter;

  .footer-inner {
    padding: 40px 0;
    border-top: 1px solid #DDD;
  }
}

.social {
  list-style: none;

  li {
    float: left;
    margin-left: 20px;

    a, a:visited {
      color: @blue;
      text-decoration: none;
      font-size: 40px;
      .transition( 250ms ease-in-out );

      &:hover {
        color: @gray;
      }
    }
  }
}

/* Sticky footer styles ******************************************************/
@footer_height: 224px;

html, body {
  height: 100%;
}

/* Wrapper for page content to push down footer */
.wrap {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  /* Negative indent footer by its height */
  margin: 0 auto @footer_height*-1;
  /* Pad bottom by footer height */
  padding: 0 0 @footer_height;
 }

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: @footer_height;
  background-color: #f5f5f5;

  @media (max-width: @grid-float-breakpoint) {
    position: relative;
  }
}

// use if fixed menu.
body > .wrap > .container {
    padding-top: @footer_height;
}
</style>
