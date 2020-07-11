<template>
    <div class="center">
        <b-form v-if="!sent" v-on:submit.prevent="submitForm">
            <b-form-group
                id="email-input-group"
                label="Введите e-mail"
                label-for="email-input"
                className="input"
            >
                <b-form-input
                        id="email-input"
                        type="email"
                        required
                        placeholder="E-mail"
                >
                </b-form-input>
            </b-form-group>
            <b-button type="submit btn btn-primary" v-on:click="sendEmail">Отправить e-mail</b-button>
            <b-button type="btn btn-secondary"> <router-link to="/passwordchangedpopup">
              Изменить пароль
            </router-link>
            </b-button>
            <router-view/>
        </b-form>
        <div v-if="sent" class="success">
            <p>{{msg}}</p>
        </div>
    </div>
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