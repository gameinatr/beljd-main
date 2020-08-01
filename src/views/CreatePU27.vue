<template>
    <div class="container">
        <h1>Учет работы средств дефектоскопии, обнаружения Д и ОД рельсов</h1>
        <div class="row section flex">
            <div class="form-creator column-50">
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Дата проверки"
                        v-model="value1"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Место работы"
                        v-model="value2"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Фамилия оператора"
                        v-model="value3"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Тип и № дефектоскопа"
                        v-model="value4"
                    />
                </div>
            </div>
            <div class="form-creator column-50">
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Время обнаружения"
                        v-model="value5"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Примечание"
                        v-model="value6"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-100"
                        placeholder="Кому выдано уведомление (ПД, ПДБ)"
                        v-model="value7"
                    />
                </div>
            </div>
        </div>
        <div class="row section flex">
            <div class="form-creator column-33">
                <p class="form-header">Место, где обнаружен дефектный или остродефектный рельс</p>
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
        <div class="row section flex">
            <div class="form-creator column-33">
                <p class="form-header">Количество проверенных километров путей, стрелочных переводов,
                    сварных стыков, съездов</p>
                <div class="row">
                    <input type="text" class="column-50" placeholder="Главных путей, км"/>
                    <input type="text" class="column-50" placeholder="Съездов, шт"/>
                </div>
                <div class="row">
                    <input type="text" class="column-50" placeholder="Приемо-отправочных"/>
                    <input type="text" class="column-50" placeholder="Сварных стыков, шт"/>
                </div>
                <div class="row">
                    <input type="text" class="column-75" placeholder="Стрелочных переводов, шт"/>
                </div>
            </div>
        </div>
        <router-link to="/createtablePU27"> <p>go to table</p></router-link>
        <div class="button-block">
            <button @click="alertSimpleInput1">Сохранить</button>
        <button>Отмена</button>
    </div>
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