<template>
    <div class="modal" ref="popup_wraper" id="js-modals_request">
        <div class="body__form">
            <form class="ajaxForm" action="https://formcarry.com/s/y_1G4237Ix0" accept-charset="UTF-8" >
                <input
                    class="form__elem "
                    :class="v$.form.name.$invalid ? 'is-invalid' : ''"
                    id="name"
                    type="text"
                    name="name"
                    required=""
                    placeholder="Имя (Для ввода используйте латиницу)"
                    @click=" validateForm()"
                    v-model.trim="form.name"
                    >
                    <p v-if="v$.form.name.$error && v$.form.name.required.$invalid " class="invalid-feedback">Это поле обязательное для ввода
                    </p>
                    <p v-if="v$.form.name.$error &&  v$.form.name.alpha.$invalid " class="invalid-feedback">Пожалуйста введите имя латинскими символами
                    </p>

                <input
                    class="form__elem"
                    :class="v$.form.tel.$error ? 'is-invalid' : ''"
                    id="phone"
                    type="tel"
                    data-tel-input="true"
                    name="phone" required=""
                    placeholder="Телефон (Без региональных знаков)"
                    @click=" validateForm()"
                    v-model.trim="form.tel"
                 >
                 <p v-if="v$.form.tel.$error && v$.form.tel.required.$invalid " class="invalid-feedback">Это поле обязательное для ввода
                </p>
                <p v-if="v$.form.tel.$error &&  v$.form.tel.numeric.$invalid " class="invalid-feedback">Для ввода используйте только цифры
                </p>
                <input
                    class="form__elem"
                    :class="v$.form.email.$error ? 'is-invalid' : ''"
                    id="email"
                    type="email"
                    name="email"
                    required=""
                    placeholder="E-mail"
                    @click=" validateForm()"
                    v-model.trim="form.email"
                >
                 <p v-if="v$.form.email.$error && v$.form.email.required.$invalid " class="invalid-feedback">Это поле обязательное для ввода
                </p>
                <p v-if="v$.form.email.$error &&  v$.form.email.email.$invalid " class="invalid-feedback">Неправильный формат почты
                </p>

                <textarea name="" class="comment" cols="30" rows="10" type="text" placeholder="Ваш комментарий (Не обязательно)"></textarea>
                    <div class="form__checkbox">
                        <input
                            class="checkbox__input"
                            type="checkbox"
                            id="modal__userAgreement"
                            v-model="form.agreeWithConditions"
                            @click=" validateForm()"
                        >
                        <label
                          class="checkbox__label"
                          for="modal__userAgreement"
                          >Отправляя заявку, я даю согласие на
                          <a>обработку своих персональных данных</a>
                          .<span>*</span>  </label>
                    </div>

                    <input  class="webform__form-btn" :class="(v$.form.name.$invalid || v$.form.tel.$invalid || v$.form.email.$invalid || v$.form.agreeWithConditions.$invalid) ? 'is-invalid_form' : ''"  @click="submitForm" type="submit" value="ОСТАВИТЬ ЗАЯВКУ!" v-bind:disabled="v$.form.name.$invalid || v$.form.tel.$invalid || v$.form.email.$invalid  || v$.form.agreeWithConditions.$invalid" >

            </form>
        </div>
     </div>
</template>
<script>

import axios from 'axios'
import VueAxios from 'vue-axios'
import {createStore} from 'vuex'
const store = createStore();
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
        closePopup(){
            this.$emit('closePopup')

        },

        validateForm(){
            if(!this.v$.form.name.required.$invalid &&!this.v$.form.tel.required.$invalid && !this.v$.form.email.required.$invalid  ){
                this.v$.$validate()
            }
        },
        submitForm() {
                this.v$.$validate() // checks all inputs
  				if (!this.v$.$error.form) {
  					alert('Ваша заявка подана на обработку')
  				} else {
  					alert('Ошибка в заполнении формы')
  				}
        },
         cleatInput(){
            this.form = Object.assign({}, this.formDefoult);
            console.log(this.formDefoult)
        },
    },


    mounted(){


	$(function(){
		$(".ajaxForm").submit(function(e){
			e.preventDefault();
			var href = $(this).attr("action");
			$.ajax({
				type: "POST",
				dataType: "json",
				url: href,
				data: $(this).serialize(),
				success: function(response){
					if(response.status == "success"){
						alert("Ваша заявка оформлена");
                        $('form[name=wwe]').trigger('reset');

					}
					else {
						alert("Произошла ошибка при отправке формы, повторите попытку позже " + response.message);
					}
				}
			});
		});
    });
        let vm = this;
        document.addEventListener('click', function(item){
            if(item.target===vm.$refs['popup_wraper']){
             vm.closePopup()
            }
        })
    }
}
</script>

<style>
.is-invalid_form{
    cursor: not-allowed !important;
    opacity: .6;
    background: 0 0;
}
.modal {
    height: 100vh;
    width: 100vw;
    position: fixed;

    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    z-index: 1000;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    top: 0;
    left: 0;
}

.modal .body__form {
    color: #fff;
    padding: 40px 20px;
    margin-top: 0;
    background: #171925;
    border-radius: 5px;
}

.modal .body__form .form__elem {
    display: block;
    margin-bottom: 30px;
}

.body__form .form__elem {
    font-family: Montserrat;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    width: 480px;
    height: 68px;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 24px;
    border: 1px solid rgba(255,255,255,.3);
    background: 0 0;
    margin-bottom: 8px;
    -webkit-transition: .4s;
    -o-transition: .4s;
    transition: .4s;
}

.body__form .comment {
    font-family: Montserrat;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    width: 100%;
    height: 68px;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 24px;
    border: 1px solid rgba(255,255,255,.3);
    height: 128px;
    padding-top: 24px;
    background: 0 0;
    margin-bottom: 8px;
}

#modal__form__checkbox {
    margin-bottom: 12px;
    position: relative;
}

.checkbox__input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
}

.body__form #form__checkbox .checkbox__label, .body__form #modal__form__checkbox .checkbox__label {
    display: inline-block;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    padding-left: 35px;
}

.from__submit {
    position: relative;
}


@media (max-width: 480px){
.modal .body__form .form__elem {
    width: 100%;
    margin-bottom: 15px;
    font-size: 12px;
    height: 50px;
}
}
</style>