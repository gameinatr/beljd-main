<template>
    <div class="container">
        <h1>Учет дефектных рельсов</h1>
 <div class="row">
    <div id="col" class="col-md-4">
         <input type="text" class="input_1" placeholder="№ П/П" v-model="value1"> 
          <input type="text" class="input_2" placeholder="ФИО проводившего контроль" v-model="value2">
           <input type="text" class="input_3" placeholder="Тип, № дефектоскопа" v-model="value3" >
            <input type="text" class="input_4" placeholder="Дата обнаружения" >
           <input type="text" class="input_4" placeholder="Дата замены" >
        </div> </div>
    <div class="row">
        <div class="firstwrap">
    <div  class="col align-items-start ">
              <p>Место, где лежит дефектный рельс</p>
 <input type="text" class="input_5">
            <input type="text" class="input_5" placeholder="№ околотка" >
             <input type="text" class="input_5" placeholder="№ ПК">
              <input type="text" class="input_5" placeholder="№ пути">
               <input type="text" class="input_3" placeholder="№ звена">
    <label > нить:</label>
    <br>
 <input type="radio" id="checkbox"> <!--v-model="checked"> -->
 <label>правая</label>
 <input type="radio" id="checkbox"> <!--v-model="checked"> -->
  <label>левая</label> 
    </div>
    
    </div>
 <div class="firstwrap">
    <div class="col align-items-start">
  <p>Характеристика рельса</p>
<input type="text" class="input_6" placeholder="марка завода">
<input type="text" class="input_6" placeholder="тип рельса">
<input type="text" class="input_6" placeholder="год прокатки">
           <input type="text" class="input_6" placeholder="длина рельса">

    </div>
    
    </div>
    <div class="firstwrap">
    <div class="col align-items-start hg">
 <p>Характеристика дефекта</p>
 <input type="text" class="input_7" placeholder="код дефекта">
<input type="text" class="input_6" placeholder="глубина, мм">
<input type="text" class="input_6" placeholder="длина, мм">
    </div>
    </div>
    
    </div>
       <router-link to="/createtable">  <p>go to table</p></router-link>
       <div><button @click=" alertSimpleInput1">Сохранить</button>
           <button>Отмена</button>
         </div>
         <p>{{value1}} {{value2}}</p>
        </div>
</template>

<script>
export default {
   name:'createForm' ,
   data(){
       return {
           value1:'',
           value2:'',
           value3:''
       }

   },
    methods: {
    alertSimpleInput1() {
      alert(this.value1 +this.value2 + this.value3);
    }
    }
}
</script>

<style>
#col, .col{
        display: flex;
    flex-wrap: wrap;
  margin: 20px;
    padding: 15px;
      background-color: #ffeeee;
      box-shadow: 1px 1px 1px 1px black;
      height: fit-content;
}
.row{
flex-wrap: nowrap;
}

.firstwrap{
    flex-wrap: wrap;
    display: flex;
    width: 415px;
}
.input_1{
    width: 60px;
    margin:10px;
}
.input_2{
width:240px;
margin: 10px;
}
.input_3{
    width: 327px;
    margin: 10px;
}
.input_4{
margin: 10px;
width: 153px;
}
.input_5{
    width: 150px;
    margin: 10px;
}
.input_6{
    width: 110px;
    margin: 10px;
}
.input_7{
    margin: 10px;
}
p{
    text-transform: uppercase;
    font-style: bold;
    font-weight: 600;
}

</style>