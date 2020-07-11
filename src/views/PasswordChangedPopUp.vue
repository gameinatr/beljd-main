<template>
<div  class="center">
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
<b-form-group
        id="input-group-1"
        label="Придумайте новый пароль:"
        label-for="input-1"
        class="input"
      >
        <b-form-input
          id="input-1"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>


      <b-form-group id="input-group-2" label="Повторите пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.confirmpassword"
          required
          placeholder="Enter ConfirmPassword"
          class="input"
        ></b-form-input>
      </b-form-group>
      <div>Подтвердить и отправить</div>
<router-link to="/enterpassword"><b-button type="submit" variant="primary">Отправить форму</b-button></router-link>
<router-view/>
</b-form>
</div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.password = ''
        this.form.confirmpassword = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
