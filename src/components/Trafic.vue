<template>
    <div class="wrapper-tarifs" >
        <div class="container">
            <div class="tarifs" id="tarifs">
                <div class="row text-center">
                    <h2>Тарифы</h2>
                </div>
                <br>
                <vPopup
                @closePopup="ClosePopap()"/>
                <div class="row">
                    <div class="col-12 col-lg-4 t1">
                        <div class = "tarif1">
                            <h2 class="orange">Стартовый</h2>
                            <hr><br>
                            <ul>
                                <li>Консультации и работы по SEO</li>
                                <li>Услуги дизайнера</li>
                                <li>Неиспользованные оплаченные часы переносятся на следующий месяц</li>
                                <li>Предоплата от 6 000 рублей в месяц</li>
                            </ul>
                            <div class="col-12 text-center">
                              <button class="contact-button"
                                 @click="ShowModal()"
                                >
                                    СВЯЖИТЕСЬ С НАМИ!
                                </button>
                            </div>
                            <br>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class = "tarif2">
                            <h2 class="orange">Бизнес</h2>
                            <hr><br>
                            <ul>
                                <li>Консультации и работы по SEO</li>
                                <li>Услуги дизайнера</li>
                                <li>Высокое время реакции - до 2 рабочих дней</li>
                                <li>Неиспользованные оплаченные часы не переносятся</li>
                                <li>Предоплата от 30 000 рублей в месяц</li>
                            </ul>
                            <div class="col-12 text-center">
                                <button class="contact-button"
                                 @click="ShowModal()"
                                >
                                    СВЯЖИТЕСЬ С НАМИ!
                                </button>
                            </div>
                            <br>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4">
                        <div class = "tarif3">
                            <h2 class="orange">VIP</h2>
                            <hr><br>
                            <ul>
                                <li>Консультации и работы по SEO</li>
                                <li>Услуги дизайнера</li>
                                <li>Максимальное время реакции - в день обращения</li>
                                <li>Неиспользованные оплаченные часы не переносятся</li>
                                <li>Предоплата от 270 000 в месяц</li>
                            </ul>
                            <div class="col-12 text-center">
                                <button class="contact-button"
                                 @click="ShowModal()"
                                >
                                    СВЯЖИТЕСЬ С НАМИ!
                                </button>
                            </div>
                            <br>
                        </div>
                    </div>
                </div>
                <br><br>
                <div class="text-center">
                    <p>Вам не подходят наши тарифы? Оставьте заявку и мы <br> предложим вам индивидуальные условия!</p>
                    <a href="#">ПОЛУЧИТЬ ИНДИВИДУАЛЬНЫЙ ТАРИФ</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vPopup from './Modal/v-modal.vue'
export default {
    components:{
        vPopup
    },
    data(){
        return{
            isInfoPopupVisable :false,
        }
    },
    methods:{
        showPopupInfo(){
            this.isInfoPopupVisable=true;
        },
        closeInfoPopup(){
            this.isInfoPopupVisable=false;
        },

        ShowModal(){
            let start = Date.now();
            let modal = document.querySelector(".modal");
            let timer = requestAnimationFrame(function animateModal(timestamp) {
            let interval = Date.now() - start;
            modal.style.transform = "scale(" + (interval / 300 - 0.1) + ")";
            if (interval < 300)
            requestAnimationFrame(animateModal);
            });
        },
        ClosePopap(){
            let modal = document.querySelector('.modal');
            modal.style.transform ="scale(" +(0) +")";
        }
    },
}
</script>

<style>
.wrapper-tarifs{
    padding-bottom: 45px;
    background-image: url('./img/tarifs-bg.png');
    background-repeat: no-repeat;
    background-position-x: right;
    background-size: 2237px;
}
.tarifs{
    padding-top: 95px;
    font-weight: 500;
}
.tarifs .orange{
    padding-top: 50px;
    color: orangered;
    font-size: 22px;
    font-weight: bold;
}
.tarifs ul{
    padding: 0;
    margin-left: 15px;
}
.tarifs li{
    list-style-image: url('./img/tarifs-galka.png');
    margin-bottom: 20px;
    opacity: 0.9;
    font-size: 14px;
}
.tarifs p{
    opacity: 0.5;
}
.tarifs a{
    color: black;
    font-size: 12px;
}
.tarifs a:hover{
    color: orangered;
    text-decoration: none;
}
.tarifs hr{
    border: 1px solid black;
    margin-top: 25px;
    margin-bottom: 15px;
}
.tarifs .row > h2{
    font-weight: bold;
}
.tarifs .row{
    padding: 15px;
}
.tarifs button{
    font-weight: 600;
    font-size: 12px;
    width: 100%;
    height: 55px;
    border-radius: 5px;
    border: 1.5px solid orangered;
    outline: none;
    background-color: transparent;
    color: orangered;
    margin-top: 40px;
}
.tarif1, .tarif2, .tarif3{
    background-color: rgb(246, 246, 246);
    border: 1px solid rgb(201, 190, 190);
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 30px 15px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
:is(.tarif1:hover, .tarif2:hover, .tarif3:hover) button{
    background-color: orangered;
    color:white;
}
.tarif1:hover, .tarif2:hover, .tarif3:hover{
    background-color: white;
}

@media (min-width:768px) {
    .tarif1:hover, .tarif2:hover, .tarif3:hover{
        transform: scale(1.1);
    }
}


@media screen and (min-width: 1240px) {

    .tarifs{
        padding-top: 150px;
    }
}

@media screen and (min-width: 767px) {

    /* tarifs */
    .wrapper-tarifs{
        padding-bottom: 100px;
        background-size: 1100px;
    }
    .tarifs h2{
        font-size: 42px;
    }
    .tarifs li{
        font-size: 17px;
    }

    /* tarifs */


    /* task-time */

    .task-time{
        padding-top: 170px;
    }
    .task-time .row > div{
        margin-left: 0px;
    }
    .task-time h1{
        text-align: justify;
    }
    .task-time h2{
        font-size: 42px;
        line-height: 50px;
    }
    .task-time p{
        font-size: 16px;
    }
}

</style>