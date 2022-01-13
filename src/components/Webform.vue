<template>
      <div class="webform">
              <div class="container">
                <div class="ds">
                    <div class="ds__1">
                        <img src="./img/D-flying.svg" alt="">
                    </div>
                    <div class="ds__2">
                        <img src="./img/D-footer.svg" alt="">
                    </div>
                </div>
                <div class="webform__main">
                    <div class="row">
                        <div class="col-sm-6 col-lg-6 col-md-6 col-12 co-xs-12 justify-content-start ">
                            <div class="webform__info">
                                <div class="webform__info-descr">
                                  <div class="webform__blockfromtitle">
                                    Оставить заявку на
                                    <br>поддержку сайта
                                  </div>
                                  <div class="webform__blockfromdescription">
                                    Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий
                                    подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с
                                    вами свяжется!
                                  </div>

                                </div>
                                <div class="blockfromcontacts">
                                    <div class="webform__number" id="contacts">
                                        <img src="./img/phone.svg" alt="">
                                        <a id="phone"  href="tel:8800222-26-73">8 800 222-26-73</a>
                                    </div>
                                    <div class="webform__mail">
                                        <img src="./img/mail.svg" alt="">
                                        <a id="email" class="emaildesc" href="mailto:info@drupal-coder.ru">info@drupal-coder.ru</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6 col-12 col-xs-12 justify-content-end">
                            <div class="webform__form">
                              <form class="ajaxForm" action="https://formcarry.com/s/y_1G4237Ix0" accept-charset="UTF-8" >
                                    <div>
                                        <input
                                            class="webform__form-elem"
                                            :class="v$.form.name.$invalid ? 'is-invalid' : ''"
                                            id="name"
                                            type="text"
                                            name="name"
                                            @click=" validateForm()"
                                            placeholder="Имя (Для ввода используйте латиницу)"
                                            v-model.trim="form.name"
                                        >
                                        <p v-if="v$.form.name.$error && v$.form.name.required.$invalid " class="invalid-feedback">Это поле обязательное для ввода
                                        </p>
                                        <p v-if="v$.form.name.$error &&  v$.form.name.alpha.$invalid " class="invalid-feedback">Пожалуйста введите имя латинскими символами
                                        </p>
                                    </div>

                                    <div>
                                        <input
                                            class="webform__form-elem"
                                            :class="v$.form.tel.$error ? 'is-invalid' : ''"
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            @click=" validateForm()"
                                            v-model.trim="form.tel"
                                            placeholder="Телефон (Без региональных знаков)"
                                        >
                                         <p v-if="v$.form.tel.$error && v$.form.tel.required.$invalid " class="invalid-feedback">Это поле обязательное для ввода
                                        </p>
                                        <p v-if="v$.form.tel.$error &&  v$.form.tel.numeric.$invalid " class="invalid-feedback">Для ввода используйте только цифры
                                        </p>
                                        </div>

                                        <div>
                                            <input
                                                class="webform__form-elem"
                                                :class="v$.form.email.$error ? 'is-invalid' : ''"
                                                id="email" type="email"
                                                name="email"
                                                placeholder="E-mail"
                                                @click=" validateForm()"
                                                v-model.trim="form.email"
                                            >
                                             <p v-if="v$.form.email.$error && v$.form.email.required.$invalid " class="invalid-feedback">Это поле обязательное для ввода
                                        </p>
                                        <p v-if="v$.form.email.$error &&  v$.form.email.email.$invalid " class="invalid-feedback">Неправильный формат почты
                                        </p>
                                        </div>

                                        <div>
                                            <input id="comment" class="webform__form-elem" type="text" name="name" placeholder="Ваш комментарий (Не обязательно)"/>
                                        </div>
                                        <div class="form__checkbox">
                                              <input
                                                class="checkbox__input"
                                                type="checkbox"
                                                id="userAgreement"
                                                v-model="form.agreeWithConditions"
                                                @click=" validateForm()"
                                                >
                                              <label class="checkbox__label" for="userAgreement">Отправляя заявку, я даю согласие на   <a>обработку своих персональных данных</a>.<span>*</span>   </label>
                                        </div>

                                        <div>
                                            <input class="webform__form-btn" :class="(v$.form.name.$invalid || v$.form.tel.$invalid || v$.form.email.$invalid || v$.form.agreeWithConditions.$invalid) ? 'is-invalid_form' : ''"  @click="submitForm"  type="submit" value="ОСТАВИТЬ ЗАЯВКУ!" v-bind:disabled="v$.form.name.$invalid || v$.form.tel.$invalid || v$.form.email.$invalid  || v$.form.agreeWithConditions.$invalid">
                                        </div>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <footer>
                <div class="footer__text">
                  <div class="social-links">
                    <ul class="social--links-wrapper">
                      <li class="social-links-item">
                        <a href="https://web.facebook.com/initlabkr?_rdc=1&_rdr" target="_blank" >
                          <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li class="social-links-item">
                        <a href="https://vk.com/initlab" target="_blank" >
                          <i class="fab fa-vk"></i>
                        </a>
                      </li>
                      <li class="social-links-item">
                        <a href="https://teleg.one/initlabbot" target="_blank" rel="noopener noreferrer">
                          <i class="fab fa-telegram-plane"></i>
                        </a>
                      </li>
                      <li class="social-links-item">
                        <a href="https://www.youtube.com/channel/UCyFEbngMB-bK2ulNtd_W43A" target="_blank" rel="noopener noreferrer">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li class="social-links-item">
                        <a href="https://zen.yandex.ru/id/6037ce072f500a068c630fec" target="_blank" rel="noopener noreferrer">
                          <img src="./img/zen-icon.svg" style="width: 16px; margin-bottom: 5px;">
                        </a>
                      </li>


                    </ul>
                  </div>
                  <p>Проект ООО «Инитлаб», Краснодар, Россия.
                  <br> Drupal является зарегистрированной торговой маркой Dries Buytaert.
                  </p>
                </div>
            </footer>
          </div>

</template>
<script>

import useValidate from "@vuelidate/core";
import { required, email, alpha, numeric, minLength } from "@vuelidate/validators";
export default {
 data(){
        return{
             v$: useValidate(),
            formDefoult:{
                name:'',
                tel:'',
                email:'',
                agreeWithConditions: false,
            },
            form:null,
        }
    },
created(){
    this.form = Object.assign({}, this.formDefoult);
},
validations() {
    return {
        form:{
            name:{required,alpha},
            tel:{required,numeric, minLength:minLength(5)},
            email:{required,email},
            agreeWithConditions : {
                mustBeTrue(value) {
                return value
                }

            }
        },
    }
},
 methods:{
     validateForm(){
            if(!this.v$.form.name.required.$invalid &&!this.v$.form.tel.required.$invalid && !this.v$.form.email.required.$invalid  ){
                this.v$.$validate()
            }
        },
         submitForm() {
                this.v$.$validate() // checks all inputs
  				if (!this.v$.$error.form) { // if ANY fail validation
  					alert('Ваша заявка подана на обработку')
  				} else {
  					alert('Ошибка в заполнении формы')
  				}
         }
 }
}
</script>

<style>

.webform {
    margin-top: 100px;
    background:
        linear-gradient(261.2deg, rgba(255, 255, 255, 0.276) -114.85%,
            rgba(255, 255, 255, 0) 69.04%), #040613;
    height: 816px;
    position: relative;
    color: white;
}





.webform__main {
    display: block;
    justify-content: space-around;
    z-index: 2;
    position: relative;
}

.webform__info {
    padding-left: 10px ;
    padding-top: 70px ;
    width: 100% ;
}



.webform__blockfromtitle{
    font-weight: bold;
    font-size: 42px;
    line-height: 1.215;
    margin-bottom: 20px;
}

.webform__blockfromdescription{
    line-height: 1.55;
    font-weight: 500;
    font-size: 14px;
    color: rgba(256,256,256,.7);
    margin-bottom: 140px;
}

.webform__number {
    position: relative;
    display: block;
    padding-bottom: 20px;
}

.webform__mail {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 18px;
    text-decoration: underline;
}

.webform__number #phone {
    cursor: pointer;
    padding-left: 20px;
    padding-top: 10px;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
}

.webform__mail #email {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    padding-left: 20px;
    font-weight: bold;
    font-size: 18px;
    position: relative;
    line-height: 1.1;
}

.webform__form {
    padding-top: 70px ;
    padding-left: 40px ;
    margin-left: auto;
}

.form__checkbox {
    margin-bottom: 12px;
    position: relative;
}

.form__checkbox .checkbox__input {
    appearance: none;
    position: absolute;
}

.form__checkbox .checkbox__label {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    padding-left: 35px;
}

.form__checkbox .checkbox__label a {
    color: #f14d34;
    cursor: pointer;
}

.form__checkbox .checkbox__label a:hover {
    text-decoration: underline;
}

.form__checkbox .checkbox__label span {
    font-size: 18px;
    color: red;
}

.form__checkbox .checkbox__label::before {
    content: "";
    display: block;
    height: 25px;
    width: 25px;
    opacity: 0.5;
    border: 2px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    transform: rotate();
}

.form__checkbox .checkbox__label::after {
    content: "";
    display: block;
    width: 26px;
    height: 25px;
    background: url("img/check-mark.svg") no-repeat center;
    background-size: 12px 10px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    transition: 0.3s;
    border-radius: 5px;
    transform: rotate(-40deg);
}

.form__checkbox .checkbox__input:checked+.checkbox__label::after {
    opacity: 1;
    transform: rotate(0);
}

.form__checkbox .checkbox__input:checked:focus+.checkbox__label::before {
    border-color: #f14d34;
    box-shadow: 0px 0px 4px #f14d34,
        0px 0px 6px #f14d34,
        0px 0px 10px #f14d34;
    opacity: 0.9;
}

/* .g-recaptcha {
    margin: 20px 0px 20px 0px;
} */

.webform .ds__1 {
    z-index: 1;
    position: absolute;
    left: 36%;

}

.webform .ds__2 {
    z-index: 1;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
}



.webform__form-elem {
    background: transparent;
    border: 1px solid rgba(256,256,256,.3);

    line-height: 1.2;
    font-weight: 500;
    padding: 26px 24px;
    color: #fff;

    font-size: 14px;
    width: 480px;
    height: 54px;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 24px;

    margin-bottom: 8px;
    transition: 0.4s;
    margin-left: auto;
}

.webform__form-elem::placeholder {
    color: white;
}

.webform__form-elem:focus {
    outline: #f14d34;
    border-color: #f14d34;
    box-shadow:
        0px 0px 6px #f14d34,
        0px 0px 8px #f14d34,
        0px 0px 12px #f14d34;
}

.webform #comment {
    height: 128px;
    position: relative;
    margin-bottom: 12px;
    padding-bottom: 65px;
}

.webform__form-btn {
    text-transform: uppercase;
    color: white;
    width: 480px;
    height: 60px;
    border: 2px solid #f14d34;
    border-radius: 5px;
    background: #f14d34;
    transition: 0.4s;
    font-size: 12px;
}

.webform__form-btn:hover {
    background: none;
}

footer {
    z-index: 2;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    height: 150px;
    bottom: 0;
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0px 40px;
}

footer .footer__text {
margin-top: 56px;

}

.social-links{
    margin-bottom: 15px;
}

.social--links-wrapper{
    margin: 0;
    padding: 0;
    list-style: none;
}


.social-links-item{
    display: inline-block;
    margin-right: 10px;
}

.social-links-item a {
    border: 2px solid #f14d34;
    background: #f14d34;
    border-radius: 5px;
    color: #fff;
    width: 30px;
    height: 30px;
    display: inline-block;
    text-align: center;
    line-height: 30px;
    transition: background 300ms;
}




.footer__text p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    /* White */

    color: #FFFFFF;

    opacity: 0.5;
}
@media  (max-width: 767px){



    .webform .ds__1{
        left: 20%;

    }
    .webform .ds__1 img{
        width: 170px;
        height: 170px;

    }
    .webform{
        height: 100%;
        margin-top: 20px;
    }
    .webform__info {
        padding-left: 0px ;
        text-align: justify;
        padding-top: 30px;
    }
    .webform__info-descr span{
        text-align: center;
    }
    .webform__info-descr p{
        margin-bottom: 20px;

    }
    .webform__form{
        padding: 30px 0 71px 0;


    }
    .webform__form-elem{
        width: 100%;
    }
    .webform__form-btn {
        width: 100%;
    }
    .ds__2{
        display: none;
    }
    footer{
        position: relative;
        padding: 0;
        margin-top: 5px;
    }
   footer .footer__text{
        padding-left: 20px;
    }

}

@media (max-width: 600px){
.webform__blockfromtitle{
    font-size: 22px;
    text-align: center;
}

.webform__blockfromdescription{
    margin-bottom: 30px;
}
}@media (max-width: 600px){
.webform__blockfromtitle{
    font-size: 22px;
    text-align: center;
}

.webform__blockfromdescription{
    margin-bottom: 30px;
}
}
</style>