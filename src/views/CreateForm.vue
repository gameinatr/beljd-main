<template>
  <div class="container">
    <h1>Учет дефектных рельсов</h1>
    <div class="row section">
      <div class="form-creator column-50">
          <div class="row">
            <input
            type="text"
            class="column-25"
            placeholder="№ П/П"
            v-model="value1"
            />
            <input
            type="text"
            class="column-75"
            placeholder="ФИО проводившего контроль"
            v-model="value2"
            />
        </div>
        <div class="row">
            <input
            type="text"
            class="column-100"
            placeholder="Тип, № дефектоскопа"
            v-model="value3"
            />
        </div>
        <div class="row">
            <input type="text" class="column-50" placeholder="Дата обнаружения" />
            <input type="text" class="column-50" placeholder="Дата замены" />
        </div>
      </div>
    </div>
    <div class="row section flex">
        <div class="form-creator column-33">
          <p class="form-header">Место, где лежит дефектный рельс</p>
          <div class="row">
            <input type="text" class="column-50" placeholder="№ околотка" />
            <input type="text" class="column-50" placeholder="№ ПК" />
          </div>
          <div class="row">
            <input type="text" class="column-50" placeholder="№ пути" />
            <input type="text" class="column-50" placeholder="№ звена" />
          </div>
          <div class="row">
            <input type="text" class="column-100" placeholder="КМ или название станции"/>
          </div>
          <label> нить:</label>
          <br />
          <div class="row">
            <div class="column-50">
                <input type="radio" id="checkbox"/>
                <!--v-model="checked"> -->
                <label>Правая</label>
            </div>
            <div class="column-50">
                <input type="radio" id="checkbox"/>
                <!--v-model="checked"> -->
                <label>Левая</label>
            </div>
          </div>
        </div>
        <div class="form-creator column-33">
          <p class="form-header">Характеристика рельса</p>
          <div class="row">
            <input type="text" class="column-50" placeholder="марка завода" />
            <input type="text" class="column-50" placeholder="тип рельса" />
          </div>
          <div class="row">
            <input type="text" class="column-50" placeholder="год прокатки" />
            <input type="text" class="column-50" placeholder="длина рельса" />
          </div>
        </div>
        <div class="form-creator column-33">
          <p class="form-header">Характеристика дефекта</p>
          <div class="row">
              <input type="text" class="column-50" placeholder="код дефекта" />
          </div>
          <div class="row">
            <input type="text" class="column-50" placeholder="глубина, мм" />
            <input type="text" class="column-50" placeholder="длина, мм" />
          </div>
        </div>
    </div>
    <router-link to="/createtable"> <p>go to table</p></router-link>
    <div class="button-block">
      <button @click="alertSimpleInput1">Сохранить</button>
      <button>Отмена</button>
    </div>
    <p>{{ value1 }} {{ value2 }}</p>
  </div>
</template>

<script>
export default {
  name: "createForm",
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
    };
  },
  methods: {
    alertSimpleInput1() {
      alert(this.value1 + this.value2 + this.value3);
    },
  },
};
</script>

<style>
.form-creator {
    padding: 20px;
    background:rgb(177, 169, 169);
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.2);
    height:max-content;
}
.form-creator .form-header{
    font-weight: bold;
    text-align: center;
}
.form-creator .row {
    display: flex;
    justify-content: space-between;
    margin: 0;
    margin-bottom: 20px;
}
.form-creator .row:last-child {
    margin-bottom: 0;
}
.form-creator input {
    min-width: auto;
}
.column-25 {
    width: 24%;
}
.column-33{
    width:32%;
}
.column-50 {
    width: 49%;
}
.column-75 {
    width: 74%;
}
.column-100 {
    width: 100%;
}
</style>
