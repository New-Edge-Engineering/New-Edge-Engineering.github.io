angular.module('templates-app', ['about/about.tpl.html', 'clients/clients.tpl.html', 'contact/contact.tpl.html', 'home/home.tpl.html', 'passion/passion.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">Since 2009...</h1>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 col-lg-10 col-lg-offset-2 text-right\">\n" +
    "        <h2>...we have been providing technology consultancy, solutions, training and production to a variety of clients.</h2>\n" +
    "    </div>\n" +
    "</div>\n" +
    "    <p>Helping them to bring to life their vision of a rich media experience.</p>\n" +
    "    <p>Our team have over many years of experience helping companies create their digital presence in many forms including interactive television, websites and for mobile devices.</p>\n" +
    "    <p>We also believe in helping people to understand stand their technical options and the solutions that can be applied to create their digital presence. Which will allow consumers to get the best experience of our client's products and services.</p>\n" +
    "    <br/>\n" +
    "    <blockquote>\n" +
    "        <p class=\"text-center\">We work at the fore front of technology allowing us to make peoples dreams and visions become a reality.</p>\n" +
    "    </blockquote>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("clients/clients.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("clients/clients.tpl.html",
    "<div class=\"row clients\">\n" +
    "    <h1 class=\"page-header\">Who We Have Helped</h1>\n" +
    "    <div class=\"row text-center\">\n" +
    "        <div class=\"hidden-xs hidden-sm col-md-1 col-ld-1\"></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"> <img src=\"clients/incopro.png\" width=\"100\" height=\"60\" title=\"Incopro\"/></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/blackwells.png\" width=\"60\" height=\"60\" title=\"Blackwells Learning\"/></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/orange-digital.jpg\" width=\"60\" height=\"60\" title=\"Orange Digital\"/></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/momentum.png\" width=\"60\" height=\"60\" title=\"Momentum\"/></div></div>\n" +
    "        <div class=\"col-xs-12 hidden-sm col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/imagination.png\" width=\"100\" height=\"24\" title=\"Imagination\"/></div></div>\n" +
    "        <div class=\"hidden-xs hidden-sm col-md-1 col-ld-1\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"row text-center visible-xs-block visible-sm-block\">\n" +
    "        <div class=\"hidden-xs col-sm-6\"><div class=\"frame\"><img src=\"clients/imagination.png\" width=\"100\" height=\"24\" title=\"Imagination\"/></div></div>\n" +
    "        <div class=\"hidden-xs col-sm-6\"><div class=\"frame\"><img src=\"clients/77pr.png\" width=\"64\" height=\"60\" title=\"SeventySeven PR\"/></div></div>\n" +
    "    </div>\n" +
    "    <div class=\"row text-center\">\n" +
    "        <div class=\"hidden-xs hidden-sm col-md-1 col-ld-1\"></div>\n" +
    "        <div class=\"col-xs-12 hidden-sm col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/77pr.png\" width=\"64\" height=\"60\" title=\"SeventySeven PR\"/></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/wazoku.png\" width=\"100\" height=\"60\" title=\"Wazoku\" /></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/streamingtank.png\" width=\"100\" height=\"38\" title=\"Streaming Tank\"/></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/sky.png\" width=\"100\" height=\"60\" title=\"Sky\" /></div></div>\n" +
    "        <div class=\"col-xs-12 col-sm-6 col-md-2 col-ld-2\"><div class=\"frame\"><img src=\"clients/nativ.png\" width=\"100\" height=\"46\" title=\"Nativ\" /></div></div>\n" +
    "        <div class=\"hidden-xs hidden-sm col-md-1 col-ld-1\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("contact/contact.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("contact/contact.tpl.html",
    "<div class=\"row contact\">\n" +
    "    <h1 class=\"page-header\">How To Enquire</h1>\n" +
    "    <div class=\"invert\" data-ng-show=\"capturing\">\n" +
    "        <p>If you have an enquiry, please don't hesitate to email us at <a href=\"mailto:enquiries@newedgeengineering.com\">enquiries@newedgeengineering.com</a> or fill in the form.</p>\n" +
    "        <!-- https://github.com/dwyl/html-form-send-email-via-google-script-without-server -->\n" +
    "        <div class=\"alert alert-danger alert-dismissible\" role=\"alert\" data-ng-show=\"error\">\n" +
    "            <button type=\"button\" class=\"close\" data-ng-click=\"close()\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "            <span><strong>A problem occurred,</strong> please try again later.</span>\n" +
    "        </div>\n" +
    "        <form>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"name\">Name<span class=\"aui-icon icon-required\"></span></label>\n" +
    "                <input class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Name\" required data-ng-model=\"enquiry.name\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\">Email Address<span class=\"aui-icon icon-required\"></span></label>\n" +
    "                <input class=\"form-control\" id=\"email\" name=\"email\" type=\"email\" placeholder=\"j.doe@example.com\" required data-ng-model=\"enquiry.email\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"email\">Message<span class=\"aui-icon icon-required\"></span></label><br/>\n" +
    "                <textarea id=\"message\" name=\"message\" rows=\"10\" placeholder=\"j.doe@example.com\" required data-ng-model=\"enquiry.message\"></textarea>\n" +
    "            </div>\n" +
    "            <div class=\"text-right\">\n" +
    "                <button class=\"btn btn-danger btn-lg\" type=\"submit\" data-ng-disabled=\"contact.$valid == false\" data-ng-click=\"send()\"><i class=\"fa fa-paper-plane\"></i> Send</button>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"text-center\" data-ng-show=\"sending\"><i class=\"fa fa-cog fa-spin fa-5x\" aria-hidden=\"true\"></i></div>\n" +
    "\n" +
    "    <div class=\"alert alert-success\" role=\"alert\" data-ng-show=\"thankyou\">\n" +
    "        <p><em><strong>Thank you</strong> for contacting us.</em> Our team will be in touch soon.</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Non-Trivial AngularJS Made Easy</h1>\n" +
    "\n" +
    "  <p class=\"lead\">\n" +
    "    Everything you need to kickstart AngularJS projects: a best-practice\n" +
    "    directory structure, an intelligent build system, and the best web design\n" +
    "    libraries around.\n" +
    "  </p>\n" +
    "\n" +
    "  <ul class=\"list-inline social-buttons\">\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=watch&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"110\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "      <iframe \n" +
    "        src=\"http://ghbtns.com/github-btn.html?user=ngbp&amp;repo=ngbp&amp;type=fork&amp;count=true\" \n" +
    "        allowtransparency=\"true\" \n" +
    "        frameborder=\"0\" \n" +
    "        scrolling=\"0\" \n" +
    "        width=\"95\" \n" +
    "        height=\"20\">\n" +
    "      </iframe>\n" +
    "    </li>\n" +
    "    <li>\n" +
    "       <iframe allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\"\n" +
    "        src=\"https://platform.twitter.com/widgets/tweet_button.html?url=http%3A%2F%2Fbit.ly%2FngBoilerplate&counturl=http%3A%2F%2Fngbp.github.com%2Fngbp&text=Check%20out%20%23ngbp%20-%20an%20awesome%20kickstarter%20for%20web%20projects%20%7C&hashtags=angularjs&via=joshdmiller&related=joshdmiller\"\n" +
    "        style=\"width:130px; height:20px;\"></iframe>\n" +
    "    </li>\n" +
    "    <li plus-one></li>\n" +
    "  </ul> \n" +
    "  \n" +
    "  <div class=\"btn-group\">\n" +
    "    <a href=\"https://github.com/ngbp/ngbp#readme\" class=\"btn btn-large btn-default\">\n" +
    "      <i class=\"fa fa-book\"></i>\n" +
    "      Read the Docs\n" +
    "    </a>\n" +
    "    <a href=\"https://github.com/ngbp/ngbp\" class=\"btn btn-large btn-success\">\n" +
    "      <i class=\"fa fa-download\"></i>\n" +
    "      Download\n" +
    "    </a>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"marketing\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-thumbs-up\"></i> Good to Go!</h4>\n" +
    "      <p>\n" +
    "        Kickstarts your project quickly, with everything you need, so you can \n" +
    "        focus on what matters: your app.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-magic\"></i> Complete Build System</h4>\n" +
    "      <p>\n" +
    "        A smart, <a href=\"http://gruntjs.com\">Grunt</a>-based build system \n" +
    "        designed to save you time and energy.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-retweet\"></i> Modularization</h4>\n" +
    "      <p>\n" +
    "        Supports a structure that maintains separation of concerns while\n" +
    "        ensuring maximum code reuse.\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-star\"></i> AngularJS</h4>\n" +
    "      <p>\n" +
    "        JavaScript framework that augments browser-based, single-page \n" +
    "        applications with MVC functionality.\n" +
    "        <a href=\"http://angularjs.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-resize-small\"></i> LESS CSS</h4>\n" +
    "      <p>\n" +
    "        The dynamic stylesheet language that extends CSS with efficiency.\n" +
    "        <a href=\"http://lesscss.org\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-twitter\"></i> Twitter Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Sleek, intuitive, and powerful front-end framework for faster and easier\n" +
    "        web development.\n" +
    "        <a href=\"http://getbootstrap.com\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-circle\"></i> Angular UI Bootstrap</h4>\n" +
    "      <p>\n" +
    "        Pure AngularJS components for Bootstrap written by the \n" +
    "        <a href=\"https://github.com/angular-ui?tab=members\">AngularUI Team</a>.\n" +
    "        <a href=\"http://angular-ui.github.com/bootstrap\">More &raquo;</a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-flag\"></i> Font Awesome</h4>\n" +
    "      <p>\n" +
    "        The iconic font designed for use with Twitter Bootstrap.\n" +
    "        <a href=\"http://fortawesome.github.com/Font-Awesome\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-12 col-sm-6 col-md-4\">\n" +
    "      <h4><i class=\"fa fa-asterisk\"></i> Placeholders</h4>\n" +
    "      <p>\n" +
    "        Client-side image and text placeholder directives written in pure \n" +
    "        AngularJS to make designing mock-ups wicked-fast.\n" +
    "        <a href=\"http://joshdmiller.github.com/angular-placeholders\">\n" +
    "          More &raquo;\n" +
    "        </a>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("passion/passion.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("passion/passion.tpl.html",
    "<div class=\"row\">\n" +
    "    <h1 class=\"page-header\">Helping Others</h1>\n" +
    "    <!-- h2>Building Platforms</h2>\n" +
    "    <p></p -->\n" +
    "    <h2>Solution Development</h2>\n" +
    "    <p>Need to get to market quickly and cheaply? The we can help you achieve this!</p>\n" +
    "    <p>We working with you to determine the best approach and by selecting the most appropriate third party software that will get your ideas or business to a place that allows you to promote, market and sell.</p>\n" +
    "    <h2>Services Integration</h2>\n" +
    "    <p>We have specialied in using software and infrastructure created by others and putting them together to create the IT Systems that your business needs to enable you to save money and time.</p>\n" +
    "    <p>Our specialist team creates desktop applications, mobile applications, web sites and web applications using the appropriate technology for the platform that the software is being distributed too.</p>\n" +
    "    <br/>\n" +
    "    <blockquote>\n" +
    "        <p class=\"text-center\">We are people with a passion for technology aiming to achieve a fast and excellence technical response that adds value to a business.</p>\n" +
    "    </blockquote>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
