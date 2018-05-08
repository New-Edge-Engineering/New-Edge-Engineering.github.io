<template>
  <b-container>
    <b-row>
      <h1 class="page-header" v-if="!sending">How To Enquire</h1>
    </b-row>

    <b-row class="contact">
      <div class="invert" v-if="capturing">
        <p>If you have an enquiry, please don't hesitate to email us at <a href="mailto:enquiries+link@newedgeengineering.com">enquiries@newedgeengineering.com</a> or fill in the form.</p>
        <!-- https://github.com/dwyl/html-form-send-email-via-google-script-without-server -->
        <b-alert variant="danger" dismissable :show="error">
            <span><strong>A problem occurred,</strong> please try again later.</span>
        </b-alert>
        <form id="gform">
            <div class="form-group">
                <label for="name">Name<span class="aui-icon icon-required"></span></label>
                <input class="form-control" id="name" name="name" placeholder="Name" required v-model="enquiry.name" v-on:keyup="validate">
            </div>
            <div class="form-group">
                <label for="email">Email Address<span class="aui-icon icon-required"></span></label>
                <input class="form-control" id="email" name="email" type="email" placeholder="j.doe@example.com" required v-model="enquiry.email" v-on:keyup="validate">
            </div>
            <div class="form-group">
                <label for="email">Message<span class="aui-icon icon-required"></span></label><br/>
                <textarea id="message" name="message" rows="10" placeholder="How can we help?" required v-model="enquiry.message" v-on:keyup="validate"></textarea>
            </div>
            <div class="text-right">
                <button class="btn btn-danger btn-lg" type="submit" :disabled="disabled" v-on:click.prevent="send()"><i class="fa fa-paper-plane"></i> Send</button>
            </div>
        </form>
      </div>

      <div class="text-center" v-if="sending"><i class="fa fa-cog fa-spin fa-5x" aria-hidden="true"></i></div>

      <b-alert  variant="success" dismissable :show="thankyou">
        <p><em><strong>Thank you</strong> for contacting us.</em> Our team will be in touch soon.</p>
      </b-alert>
    </b-row>
  </b-container>
</template>

<style lang="less">
/**
 * This is our main variables file. We must include it last so we can overwrite
 * any variable definitions in our imported stylesheets.
 */

@import '~assets/variables.less';
.row.contact {
  display: block;
}
.contact {

  .fa-cog {
    margin-top: 40%;
    margin-bottom: 30%;
  }

  textarea {
    color: @blue;
    padding: 10px;
    width: 100%;
  }
}
</style>

<script>
import axios from 'axios';
import querystring from 'query-string'

export default {
  data () {
    return {
      capturing: true,
      error: false,
      sending: false,
      thankyou: false,
      enquiry: {
        name: '',
        email: '',
        message: '',
      },
      disabled: true
    }
  },
  methods: {
    validate () {
      if(
        this.enquiry.name.length > 0 &&
        this.enquiry.email.length > 0 &&
        this.enquiry.message.length > 0
      ) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    failed (data) {
      // called asynchronously if an error occurs
      console.debug("failure " + JSON.stringify(data));
      // or server returns response with an error status.
      this.sending = false;
      this.error = true;
      this.capturing = true;
    },
    send () {
      this.capturing = false;
      this.sending = true;
      this.enquiry['formDataNameOrder'] = ['name', 'email', 'message'];
      this.enquiry['formGoogleSheetName'] = "responses";
      var scope = this;
      axios.post(
        'https://script.google.com/macros/s/AKfycbwlgWtpZWVdq0HgfKPEYlfAK2TeVApv9LIwgOUaLGpycB6GBnw/exec',
        querystring.stringify(this.enquiry),
        {
          headers : {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      ).then(function(response){
        if(response.data.result == "error") {
          scope.failed(response)
        } else {
          scope.enquiry.name = "";
          scope.enquiry.email = "";
          scope.enquiry.message = "";
          scope.sending = false;
          scope.thankyou = true;
          setTimeout(function(){
            scope.error = false;
            scope.thankyou = false;
            scope.capturing = true;
          }, 15000);
        }
      }).catch(function(error){
        scope.failed(error)
      })
      return false;
    }
  }
}
</script>
