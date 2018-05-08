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
        <form>
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
        message: ''
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
    send () {
      this.capturing = false;
      this.sending = true;
      axios.post(
        'https://script.google.com/macros/s/AKfycbwlgWtpZWVdq0HgfKPEYlfAK2TeVApv9LIwgOUaLGpycB6GBnw/exec',
        {
          body: this.enquiry
        }
      ).then(function(response){
        this.enquiry.name = "";
        this.enquiry.email = "";
        this.enquiry.message = "";
        this.sending = false;
        this.thankyou = true;
      }).catch(function(error){
        // called asynchronously if an error occurs
        console.debug("failure " + angular.toJson(response));
        // or server returns response with an error status.
        this.sending = false;
        this.error = true;
        this.capturing = true;
      })
      return false;
    }
  }
}
</script>
