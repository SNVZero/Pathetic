<template>
      <div class="support">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <h2 class="title o11" style="text-align: center;">Поддержка <br> от Drupal-coder</h2>
              </div>
            </div>
            <div class="supp">
            <div class="row row-flex advantages-row">
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">01.</div>
                      <div class="title sup-title">Постановка задачи по Email</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.
                    </div>
                    <div class="sup-icon"><img src="./img/support1.svg"  width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">02.</div>
                      <div class="title sup-title">Система Helpdesk – отчетность, прозрачность</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.
                    </div>
                    <div class="sup-icon"><img src="./img/support2.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">03.</div>
                      <div class="title sup-title">Расширенная техническая поддержка</div>
                    </div>
                    <div class="textovosn title sup-body">
                     Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.
                    </div>
                    <div class="sup-icon"><img src="./img/support3.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">04.</div>
                      <div class="title sup-title">Персональный менеджер проекта</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Ваш менеджер проекта  всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.
                    </div>
                    <div class="sup-icon"><img src="./img/support4.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">05.</div>
                      <div class="title sup-title">Удобные способы оплаты</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
                    </div>
                    <div class="sup-icon"><img src="./img/support5.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">06.</div>
                      <div class="title sup-title">Работаем с SLA и NDA</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
                    </div>
                    <div class="sup-icon"><img src="./img/support6.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">07.</div>
                      <div class="title sup-title">Штатные специалисты</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Надежные штатные специалисты, никаких фрилансеров.
                    </div>
                    <div class="sup-icon"><img src="./img/support7.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-3 col-xs-12 advantage-col">
                <div class="sup">
                  <div class="sup-wrapper">
                    <div class="sup-header">
                      <div class="textovosn title supnum">08.</div>
                      <div class="title sup-title">Удобные каналы связи</div>
                    </div>
                    <div class="textovosn title sup-body">
                      Консультации по телефону, скайпу, в месенджерах.
                    </div>
                    <div class="sup-icon"><img src="./img/support8.svg" width="84px" height="84px" class="img-responsive"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
export default {
    setup() {
        
    },
}
</script>

<style>
.support{
    z-index: 2;
    margin-top: 580px;
}
.sup-header{
    z-index: 1;
}
.supp{
    width: 100%;
height: 1810px;
margin-top: 56px;
filter: drop-shadow(20px 20px 40px rgba(5, 12, 51, 0.05));
}
.sup{position:relative;
height: 230px;
margin: 5px;
background-color: #FFFFFF;
z-index: 3;
border-radius: 5px;
}

.sup-wrapper{
    padding-left: 26px;
    }
    .supnum{
        opacity: 0.5;
        font-size: 12px;
        line-height: 15px;
        padding-top: 27px;
    }
    .sup-body{
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        opacity: 0.7;
        padding-top: 12px;
        padding-right: 35px;
          z-index: 1;
        position: relative;
    }
    .sup-title{
        padding-top: 20px;
        font-size: 18px;
        line-height: 22px;
        font-weight: bold;
        position: relative;
        font-family: Montserrat;
    }
    .sup-icon{
        z-index: 0;
        right:0;
        bottom:0;
        position:absolute;
    }
@media screen and (min-width: 700px) and (orientation: landscape) {
    .support{
               margin-top: 243px;
    }

    .sup{border-radius: 5px;
        width: 292px;
        height: 292px;
    }

    .supp{
        width: 1184px;
        height: 589px;
        margin-top: 56px;
        margin-left: 104px;
        margin-right: 152px;
        filter: drop-shadow(20px 20px 40px rgba(5, 12, 51, 0.05));
    }

    .sup-title{
           margin-right: 35px;
     }

    .o{
        width: 493px;
        height: 44px;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
    }
    .o1{
        font-size: 42px;
        width: 580px;
        height: 153px;
        margin-bottom: 20px;
        }

    .o111{
        font-size: 42px;
    }
    .o11{font-size: 42px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>