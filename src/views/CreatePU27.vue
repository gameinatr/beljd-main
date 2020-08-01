<template>
    <div class="container">
        <h1>Учет работы средств дефектоскопии, обнаружения Д и ОД рельсов</h1>
        <div class="row section flex">
            <div class="form-creator column-50">
                <div class="row">
                    <input
                        type="date"
                        class="column-50"
                        placeholder="Дата проверки"
                        name="date"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Место работы"
                        name="workRegion"
                    />
                </div>
                <div class="row">
                    <!-- потом сменить тут на связанные селекты-->
                    <input
                        type="number"
                        class="column-50"
                        placeholder="Фамилия оператора"
                        name="responsibleId"
                    />
                    <input
                        type="number"
                        class="column-50"
                        placeholder="Тип и № дефектоскопа"
                        name="defectoscopeId"
                    />
                </div>
            </div>
            <div class="form-creator column-50">
                <div class="row">
                    <input
                        type="datetime-local"
                        class="column-50"
                        placeholder="Время обнаружения"
                        name="detectTime"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Примечание"
                        name="comments"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-100"
                        placeholder="Кому выдано уведомление (ПД, ПДБ)"
                        name="noticeTarget"
                    />
                </div>
            </div>
        </div>
        <div class="row section flex">
            <div class="form-creator column-33">
                <p class="form-header">Место, где обнаружен дефектный или остродефектный рельс</p>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ околотка"
                        name="subdivisionNumber"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ ПК"
                        name="picketNumber"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ пути"
                        name="trackNumber"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ звена"
                        name="sectionNumber"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-100"
                        placeholder="КМ или название станции"
                        name="stationOrKm"
                    />
                </div>
                <label> нить:</label>
                <br />
                <div class="row">
                    <div class="column-50">
                        <input
                            type="radio"
                            id="checkbox-right"
                            name="slot"
                        />
                        <!--v-model="checked"> -->
                        <label>Правая</label>
                    </div>
                    <div class="column-50">
                        <input
                            type="radio"
                            id="checkbox-left"
                            name="slot"
                        />
                        <!--v-model="checked"> -->
                        <label>Левая</label>
                    </div>
                </div>
            </div>
            <div class="form-creator column-33">
                <p class="form-header">Характеристика рельса</p>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="марка завода"
                        name="factoryMark"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="тип рельса"
                        name="railType"
                    />
                </div>
                <div class="row">
                    <input
                        type="date"
                        class="column-50"
                        placeholder="год прокатки"
                        name="factoryYear"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="длина рельса"
                        name="railLength"
                    />
                </div>
            </div>
            <div class="form-creator column-33">
                <p class="form-header">Характеристика дефекта</p>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="код дефекта"
                        name="code"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="глубина, мм"
                        name="deep"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="длина, мм"
                        name="length"
                    />
                </div>
            </div>
        </div>
        <div class="row section flex">
            <div class="form-creator column-33">
                <p class="form-header">Количество проверенных километров путей, стрелочных переводов,
                    сварных стыков, съездов</p>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Главных путей, км"
                        name="mainTrack"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Съездов, шт"
                        name="connectedTrack"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Приемо-отправочных"
                        name="ioTrack"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Сварных стыков, шт"
                        name="weldedJoint"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-75"
                        placeholder="Стрелочных переводов, шт"
                        name="arrowTrack"
                    />
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