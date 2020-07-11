<template>
  <div class="center">
    <div class="row">
      <div class="col-sm-12 mx-auto">
        <form @submit.prevent="submitHandler">
          <div class="form-group ">
            <label for="exampleInputEmail1">введите ваш email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              v-model.trim="email"
              :class="{
                invalid:
                  ($v.email.$dirty && !$v.email.required) ||
                  ($v.email.$dirty && !$v.email.email),
              }"
            />
            <small
              id="emailHelp"
              class="form-text text-muted"
              v-if="$v.email.$dirty && !$v.email.required"
              >поле не должно быть пустым.</small
            >
            <small
              id="emailHelp"
              class="form-text text-muted"
              v-else-if="$v.email.$dirty && !$v.email.email"
              >введите корректный адрес.</small
            >
          </div>
          <div class="form-group">
            <label for="password">введите ваш пароль</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model.trim="password"
              :class="{
                invalid:
                  ($v.password.$dirty && !$v.password.required) ||
                  ($v.password.$dirty && !$v.password.minLength),
              }"
            />
            <small
              id="passwordlHelp"
              class="form-text text-muted"
              v-if="$v.password.$dirty && !$v.password.required"
              >поле не должно быть пустым.</small
            >
            <small
              id="passwordlHelp"
              class="form-text text-muted"
              v-else-if="$v.password.$dirty && !$v.password.minLength"
            >
              пароль должен быть {{ $v.password.$params.minLength.min }}. Сейчас
              он{{ password.length }}</small
            >
          </div>

          <button type="submit" class=" mb-10 btn btn-primary">
            вход в систему
          </button>
        </form>
        <router-link to="/recovery">восстановить пароль</router-link>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import axios from 'axios'
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      this.$router.push("/recovery");
    },
    getId(){
      const path='https://postman-echo.com/get?foo1=bar1&foo2=bar2';
      axios.get(path)
      .then((res)=>{
        this.id=res.data.args
      })
      console.log(this.id)
      .catch((error)=>{
        console.error(error)
      })
    },
    created(){
      this.getId
      console.log()
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
