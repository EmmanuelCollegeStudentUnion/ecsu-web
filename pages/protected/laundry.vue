<template>
  <div>
    <div id="simpleModal_1" v-bind:class="{ modal: !modalActive }">
      <div class="modal-window">
        <h3>Awaiting College Approval</h3>
        <center>
          <img src="/images/awaiting.gif" class="shadow">
        </center>
        <br>
        <center>
          <p>This online booking system is a proof-of-concept, and is currently awaiting approval from the college. We will update you as soon as possible to let you know if this system becomes available.</p>
        </center>
        <center>
          <nuxt-link to="/">Return to Home</nuxt-link>
        </center>
      </div>
    </div>
    <center>
      <header>
        <h1>Emmanuel College Laundry Rota</h1>
        <p>Online Booking Form for Cloister Laundry Facilities</p>
      </header>
    </center>
    <center></center>
    <font size="1">
      <center>
        <font size="5">
          <center>
            <button v-on:click="modalActive=!modalActive">Proceed To Sheet</button>
          </center>
        </font>
      </center>
    </font>
    <br>
    <center>
      <h2>~ RULES OF USE ~</h2>
    </center>

    <font size="3">
      <center>
        <p>
          ***The following Sheet is monitored, and has a full version history. Improper modification of the document
          <b>WILL</b>
          be registered and
          <b>WILL</b> actioned upon.***
        </p>
      </center>
      <center>
        <p>
          ***Users should
          <i>
            <b>only</b>
          </i> book for the
          <b>current</b> week - block booking is not permitted***
        </p>
      </center>
      <center>
        <p>Any faults should be reported to the webmaster</p>
      </center>
    </font>
    <center>
      <h3>Sheet Preview</h3>
    </center>
    <div class="video-container">
      <iframe
        src="https://docs.google.com/spreadsheets/d/16dfXF7rLy-YLY69g3_VP1ZPF2UjI37wIFwkIDW2niV0/pubhtml?widget=true&amp;headers=false"
      ></iframe>
    </div>
  </div>
</template>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
  overflow: auto;
  background-color: #000000;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}

.modal-window {
  position: relative;
  background-color: #ffffff;
  width: 50%;
  margin: 10% auto;
  padding: 20px;
}
</style>

<script>
export default {
  data: () => ({
    modalActive: false
  })
};
</script>
