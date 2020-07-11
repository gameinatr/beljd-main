<template>
  <b-container fluid="lg">
    <b-row>
      <b-col>
        <form v-if="!sent" v-on:submit.prevent="submitForm">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" v-model.trim="email" />
            </div>
          </div>
          <button type="submit" v-on:click="sendEmail">Отправить e-mail</button>
          <router-link to="/passwordchangedpopup"
            ><b-button>Перейти к Антону</b-button></router-link
          >
        </form>
        <div v-if="sent" class="success">
          <p>{{ msg }}</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "EmailRecovery",
  data() {
    return {
      sent: false,
      msg: "E-mail has been succesfully sent!"
    };
  },
  methods: {
    sendEmail: function() {
      this.sent = true;
    }
  }
};
</script>
