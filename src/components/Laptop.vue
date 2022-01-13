<template>
            <div class="laptop">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12 col-xs-12 col-md-offset-6">
                    <div class="row ic1-row">
                      <div class="col-md-6">
                        <h2 class="textovosn title o111" style="color: #fff;">Экспертиза в Drupal,<br> опыт 14 лет!</h2>
                      </div>
                    </div>
                    <div class="row row-flex ic2-row">
                      <div class="col-sm-6 col-xs-12 ic-col">
                         <div class="lapt">
                           <div class="textovosn lapt-body">
                              Только системный подход – контроль версий, резервирование и тестирование!
                           </div>
                         </div>
                      </div>
                      <div class="col-sm-6 col-xs-12 ic-col">
                         <div class="lapt">
                           <div class="textovosn lapt-body">
                              Только Drupal сайты, не берем на поддержку сайты на других CMS!
                           </div>
                         </div>
                      </div>
                      <div class=" col-sm-6 col-xs-12 ic-col">
                        <div class="lapt">
                          <div class="textovosn lapt-body">
                            Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем <div style="color:#f14d34">свои модули Drupal</div>
                          </div>
                        </div>
                     </div>
                     <div class=" col-sm-6 col-xs-12 ic-col">
                      <div class="lapt">
                        <div class="textovosn lapt-body">
                          Поддерживаем сайты на Drupal 5, 6, 7 и 8
                        </div>
                      </div>
                   </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="laptop-img">
                  <img class="laptop-img-l img-responsive" src="./img/laptop.png">
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
.laptop{
        background: linear-gradient(261.2deg, rgba(255, 255, 255, 0.548) -114.85%, rgba(255, 255, 255, 0) 69.04%), #0a0b0c;
        color: #FFFFFF;
      z-index: 3;
        height: 1155px;
        width: 100%;
        margin-top: -108px;
        overflow: hidden;
    }
    .lapt{
        width: 270px;
        height: 100px;
        border-left:3px solid #f14d34;
        margin-bottom: 30px;
    }
    .lapt-body{
font-size: 16px;
line-height: 22px;
opacity: 0.7;
padding-left:15px;
padding-top:5px;
padding-bottom:10px;
margin-right: 5px;
    }
    .laptop-img{
position:absolute; z-index: 1;
margin-top: 300px;
filter: drop-shadow(0px 4px 69px rgba(16, 26, 58, 0.106));
}
.laptop.container-fluid{
        position:relative;
}
.laptop-img-l{
        width: 100%;
         height: 322px;

}
.ic{
    width: auto;
}
.ic1-row{ position:relative;
        top: 235px;
        left: 0px;
}
.ic2-row{ position:relative;
        top: 250px;
        left: 0px;
    }
.ic-col{
       margin-right: -50px;
}


@media screen and (min-width: 700px) and (orientation: landscape) {
.laptop{
        margin-top: -188px;
        height: 955px;
       overflow: hidden;
    }
    .laptop-img{
        margin-top: 25px;

    }
    .laptop-img-l{
        width: 710px;
        height: 672px;
        }
    .ic1-row{ position:relative;
            top: 410px;
            left: 730px;
        }
    .ic2-row{ position:relative;
        top: 460px;
        left: 730px;
        width: 700px;
    }
}
</style>