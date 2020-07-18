<template>
  <div class="container" id="app">
    <h1>ПУ-2а</h1>
    <div class="row section">
      <div class="form-creator column-33">
        <div class="row">
          <div class="column-50">
          <input type="radio" id="checkbox" />
          <!--v-model="checked"> -->
          <label> текущий месяц</label>
          <br/>
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
        </div>
        <div class="column-50">
          <span>км:</span>
          <br/>
          <label>от</label>
          <input type="number"/>
          <br/>
          <label>до</label>
          <input type="number"/>
        </div>
       </div>
        <button class="btn text-center ">поиск</button>
        <!-- <div class="content">
                 <input type="radio" id="che"> 
    <label for="chec">c</label><br>
              </div> -->
      </div>
          <div class="column-50 button-holder">
            <div>
              <button class="btn-2">создать</button>
              <button class="btn-2">изменить</button>
            </div>
            <div>
              <button class="btn-3">скачать</button>
              <button class="btn-3">печать</button>
            </div>
          </div>
    </div>

    <!-- <date-picker v-model="date" lang="en" type="date" format="YYY-MM-dd"></date-picker> -->
    <div class="row section">
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
    </div>

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

</style>
