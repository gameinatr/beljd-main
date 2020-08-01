<template>
    <div class="container">
        <h1>Учет работы средств дефектоскопии, обнаружения Д и ОД рельсов</h1>
        <div class="row section flex">
            <div class="form-creator column-50">
                <div class="row">
                    <div class="column-50">
                        <label>Дата проверки</label>
                        <input
                            type="date"
                            class="column-100"
                            v-model="dataToSend.date"
                        />
                    </div>
                    <div class="column-50">
                        <label>Место работы</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.workRegion"
                        />
                    </div>
                </div>
                <div class="row">
                    <!-- потом сменить тут на связанные селекты-->
                    <div class="column-50">
                        <label>Фамилия оператора</label>
                        <input
                            type="number"
                            class="column-100 full"
                            v-model="dataToSend.responsibleId"
                        />
                    </div>
                    <div class="column-50">
                        <label>Тип и № дефектоскопа</label>
                        <input
                            type="number"
                            class="column-100 full"
                            v-model="dataToSend.defectoscopeId"
                        />
                    </div>
                </div>
            </div>
            <div class="form-creator column-50">
                <div class="row">
                    <div class="column-50">
                        <label>Время обнаружения</label>
                        <input
                            type="datetime-local"
                            class="column-100"
                            v-model="dataToSend.detectTime"
                        />
                    </div>
                    <div class="column-50">
                        <label>Примечание</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.comments"
                        />
                    </div>
                </div>
                <div class="row">
                    <label>Кому выдано уведомление (ПД, ПДБ)</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.noticeTarget"
                    />
                </div>
            </div>
        </div>
        <div class="row section flex">
            <div class="form-creator column-33">
                <p class="form-header">Место, где обнаружен дефектный или остродефектный рельс</p>
                <div class="row">
                    <div class="column-50">
                        <label>Номер околотка</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.subdivisionNumber"
                        />
                    </div>
                    <div class="column-50">
                        <label>Номер ПК</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.picketNumber"
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="column-50">
                        <label>Номер пути</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.trackNumber"
                        />
                    </div>
                    <div class="column-50">
                        <label>Номер звена</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.sectionNumber"
                        />
                    </div>
                </div>
                <div class="row">
                    <label>Км или название станции</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.stationOrKm"
                    />
                </div>
                <span>Нить:</span>
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
                <div class="row column-100">
                    <p class="form-header">Характеристика рельса</p>
                    <div class="row">
                        <div class="column-50">
                            <label>Марка завода</label>
                            <input
                                type="text"
                                class="column-100"
                                v-model="dataToSend.factoryMark"
                            />
                        </div>
                        <div class="column-50">
                            <label>Тип рельса</label>
                            <input
                                type="text"
                                class="column-100"
                                v-model="dataToSend.railType"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="column-50">
                            <label>Год прокатки</label>
                            <input
                                type="date"
                                class="column-100"
                                placeholder=""
                                v-model="dataToSend.factoryYear"
                            />
                        </div>
                        <div class="column-50">
                            <label>Длина рельса</label>
                            <input
                                type="text"
                                class="column-100"
                                v-model="dataToSend.railLength"
                            />
                        </div>
                    </div>
                </div>
                <div class="row column-100">
                    <p class="form-header">Характеристика дефекта</p>
                    <div class="row">
                        <label> Код дефекта</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.code"
                        />
                    </div>
                    <div class="row">
                        <label>Глубина, мм</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.deep"
                        />
                    </div>
                    <div class="row">
                        <label>Длина, мм</label>
                        <input
                            type="text"
                            class="column-100"
                            v-model="dataToSend.length"
                        />
                    </div>
                </div>
            </div>
            <div class="form-creator column-33">
                <p class="form-header">Количество проверенных километров путей, стрелочных переводов,
                    сварных стыков, съездов</p>
                <div class="row">
                    <label>Главных путей, км</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.mainTrack"
                    />
                </div>
                <div class="row">
                    <label>Съездов, шт</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.connectedTrack"
                    />
                </div>
                <div class="row">
                    <label>Стрелочных переводов, шт</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.arrowTrack"
                    />
                </div>
                <div class="row">
                    <label>Сварных стыков, шт</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.weldedJoint"
                    />
                </div>
                <div class="row">
                    <label>Приемо-отправочных</label>
                    <input
                        type="text"
                        class="column-100"
                        v-model="dataToSend.ioTrack"
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