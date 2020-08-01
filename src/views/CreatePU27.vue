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
                        v-model="dataToSend.date"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Место работы"
                        v-model="dataToSend.workRegion"
                    />
                </div>
                <div class="row">
                    <!-- потом сменить тут на связанные селекты-->
                    <input
                        type="number"
                        class="column-50 full"
                        placeholder="Фамилия оператора"
                        v-model="dataToSend.responsibleId"
                    />
                    <input
                        type="number"
                        class="column-50 full"
                        placeholder="Тип и № дефектоскопа"
                        v-model="dataToSend.defectoscopeId"
                    />
                </div>
            </div>
            <div class="form-creator column-50">
                <div class="row">
                    <input
                        type="datetime-local"
                        class="column-50"
                        placeholder="Время обнаружения"
                        v-model="dataToSend.detectTime"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Примечание"
                        v-model="dataToSend.comments"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-100"
                        placeholder="Кому выдано уведомление (ПД, ПДБ)"
                        v-model="dataToSend.noticeTarget"
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
                        v-model="dataToSend.subdivisionNumber"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ ПК"
                        v-model="dataToSend.picketNumber"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ пути"
                        v-model="dataToSend.trackNumber"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="№ звена"
                        v-model="dataToSend.sectionNumber"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-100"
                        placeholder="КМ или название станции"
                        v-model="dataToSend.stationOrKm"
                    />
                </div>
                <label> нить:</label>
                <br />
                <div class="row">
                    <div class="column-50">
                        <input
                            type="radio"
                            id="checkbox-right"
                            value="right"
                            v-model="dataToSend.slot"
                        />
                        <!--v-model="dataToSend.checked"> -->
                        <label>Правая</label>
                    </div>
                    <div class="column-50">
                        <input
                            type="radio"
                            id="checkbox-left"
                            value="left"
                            v-model="dataToSend.slot"
                        />
                        <!--v-model="dataToSend.checked"> -->
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
                        v-model="dataToSend.factoryMark"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="тип рельса"
                        v-model="dataToSend.railType"
                    />
                </div>
                <div class="row">
                    <input
                        type="date"
                        class="column-50"
                        placeholder="год прокатки"
                        v-model="dataToSend.factoryYear"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="длина рельса"
                        v-model="dataToSend.railLength"
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
                        v-model="dataToSend.code"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="глубина, мм"
                        v-model="dataToSend.deep"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="длина, мм"
                        v-model="dataToSend.length"
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
                        v-model="dataToSend.mainTrack"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Съездов, шт"
                        v-model="dataToSend.connectedTrack"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Приемо-отправочных"
                        v-model="dataToSend.ioTrack"
                    />
                    <input
                        type="text"
                        class="column-50"
                        placeholder="Сварных стыков, шт"
                        v-model="dataToSend.weldedJoint"
                    />
                </div>
                <div class="row">
                    <input
                        type="text"
                        class="column-75"
                        placeholder="Стрелочных переводов, шт"
                        v-model="dataToSend.arrowTrack"
                    />
                </div>
            </div>
        </div>
        <router-link to="/createtablePU27"> <p>go to table</p></router-link>
        <div class="button-block">
            <button @click="sendForm">Сохранить</button>
        <button>Отмена</button>
    </div>
</div>
</template>

<script>
    import axios from 'axios';

    export default {
    name: "createForm",
    data() {
    return {
    dataToSend: {
    date: "",
    responsibleId: "",
    defectoscopeId: "",
    workRegion: "",
    mainTrack: "",
    ioTrack: "",
    arrowTrack: "",
    weldedJoint: "",
    connectedTrack: "",
    subdivisionNumber: "",
    trackNumber: "",
    stationOrKm:"",
    picketNumber:"",
    sectionNumber:"",
    slot:"",
    factoryMark:"",
    factoryYear:"",
    railType:"",
    railLength:"",
    code:"",
    deep:"",
    length:"",
    detectTime:"",
    noticeTarget:"",
    comments:"",
}
};
},
    methods: {
    alertSimpleInput1() {
    alert(this.value1 + this.value2 + this.value3);
},
    sendForm(){
    let json = JSON.stringify(this.dataToSend);
    alert(json);
    axios.post('/api/check/', {
    body:this.dataToSend
})
    .then(function (response) {
    console.log(response);
})
    .catch(function (error) {
    console.log(error);
});
},
},
};
</script>