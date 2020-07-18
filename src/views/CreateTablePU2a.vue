<template>
  <div class="container mt-4" id="app">
    <h1>ПУ-2а</h1>
    <div class="container">
      <div class="wrapBox">
        <input type="radio" id="checkbox" />
        <!--v-model="checked"> -->
        <label> текущий месяц</label>
        <br />
        <input
          type="radio"
          id="checkbox"
          @click="isShowText"
          v-model="checked"
        />
        <label for="checkbox">точная дата</label><br />
        <input type="radio" id="checkbox" @click="isShowText2" />
        <!--v-model="checked"> -->
        <label for="checkbox">за период</label><br />
        <!-- <div  ><span :class="[opened ? 'text-success' : 'text-danger']"></span></div> -->
       
        <div class="inputDate">
          <Datepicker
            v-if="!isShow1"
            v-model="date"
            @opened="handleOpened"
            @closed="handleClosed"
            typeable
          />
        </div>
        <div class="inputDate" v-if="!isShow2">
          <label class="inputMarg">с</label>
          <Datepicker
            v-model="date"
            @opened="handleOpened"
            @closed="handleClosed"
            typeable
          />
        </div>
        <div class="inputDate" v-if="!isShow2">
          <label class="inputMarg_1">по</label>
          <Datepicker
            v-model="date"
            @opened="handleOpened"
            @closed="handleClosed"
            typeable
          />
        </div>
       
        <button class="btn text-center ">поиск</button>
        <!-- <div class="content">
                 <input type="radio" id="che"> 
    <label for="chec">c</label><br>
              </div> -->
      </div>
    </div>
    <div class="btn-wrap">
      <button class="btn-2">создать</button>
      <button class="btn-2">изменить</button>
    </div>
    <div class="side-btn">
      <button class="btn-3">скачать</button>
      <button class="btn-3">печать</button>
    </div>
    <!-- <date-picker v-model="date" lang="en" type="date" format="YYY-MM-dd"></date-picker> -->

    <table class="table table-bordered table-responsive">
      <thead>
        <tr>
          <th scope="col">№ п/п</th>
          <th scope="col">Дата обнаружения</th>
          <th scope="col">ФИО проводившего контроль</th>
          <th scope="col">тип, № дефектоскопа</th>
          <th scope="col">№ околотка</th>
          <th scope="col">№ пути</th>
          <th scope="col">КМ или название станции</th>
          <th scope="col">№ ПК</th>
          <th scope="col">номер звена</th>
          <th scope="col">нить(првая или левая)</th>
          <th scope="col">марка завода</th>
          <th scope="col">год прокатки</th>
          <th scope="col">тип рельса</th>
          <th scope="col">длина рельса</th>
          <th scope="col">код дефекта</th>
          <th scope="col">глубина, мм</th>
          <th scope="col">длина, мм</th>
          <th scope="col">дата замены дефектного рельса</th>
        </tr>
      </thead>
      <tbody>
        <!--<tr v-for="user, index in users"> -->
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <!-- <th scope="row">{{ index + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email.toLowerCase() }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.address.city }}</td> -->
      </tbody>
    </table>

    <router-view />
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  name: "CreateTable",
  components: {
    Datepicker,
  },
  data() {
    return {
      isShow1: true,
      isShow2: true,
      checked: false,
      opened: false,
      date: new Date(),
    };
  },
  methods: {
    handleOpened() {
      this.opened = true;
    },
    handleClosed() {
      this.opened = false;
    },
    isShowText() {
      this.isShow1 = !this.isShow1;
    },
    isShowText2() {
      this.isShow2 = !this.isShow2;
    },
  },
};
</script>

<style>
th {
  text-transform: uppercase;
}
.inputDate {
  display: flex;
}
.btn {
  background-color: grey;
  position: relative;
  left: 63%;
  width: 85px;
  height: 31px;
  margin-bottom: 10px;
  margin-right: 15px;
  padding: 0;
}
.btn-2 {
  position: relative;
  top: 109px;
  margin-left: 20px;
  width: 108px;
  height: 29px;
}
.wrapBox {
  background-color: #ffeeee;
  background-clip: content-box;
  width: 304px;
  margin-left: -10px;
  margin-bottom: 50px;
  float: left;
}
#checkbox {
  margin-left: 20px;
}
.side-btn {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.btn-3 {
  margin-bottom: 45px;
  width: 108px;
  height: 29px;
}
.inputMarg_1 {
  margin: 5px;
}
.inputMarg {
  margin: 10px;
}
</style>
