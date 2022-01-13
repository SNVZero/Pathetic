<template>
    <div class="wrapper-main">
        <div class="container">
            <div class="task-time">
                <h2>Наши профессиональные разработчики <br> выполняют быстро любые задачи</h2>
                <div class="row">
                    <div class="col-12 col-md-4 centered">
                        <div class="pic">
                            <img src="./img/competency-20.svg" alt="pic">
                        </div>
                        <h1>oт 1ч</h1>
                        <p class="text">Настройка события GA <br> в интернет-магазине</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="pic">
                            <img src="./img/competency-21.svg" alt="pic">
                        </div>
                        <h1>oт 20ч</h1>
                        <p>Разработка мобильной <br> версии сайта</p>
                    </div>
                    <div class="col-12 col-md-4">
                        <div class="pic">
                            <img src="./img/competency-22.svg" alt="pic">
                        </div>
                        <h1>oт 8ч</h1>
                        <p>Интеграции <br> модуля оплаты</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    
}
</script>

<style>
.task-time{
    padding-top: 45px;
    font-weight: 500;
}
.task-time p{
    opacity: 0.9;
    font-size: 14px;
}
.task-time h1, .task-time h2{
    font-weight: bold;
}
.task-time h1{
    text-align: center;
    font-size: 30px;
}
.task-time h2{
    line-height: 27px;
    margin-bottom: 50px;
}
.task-time .pic{
    text-align: center;
    margin-bottom: 15px;
    max-width: 200px;
    /*background-image: url(../img/competensions-icon-bg.svg);
    background-repeat: no-repeat;
    background-position: bottom left;*/
}
.task-time .row > div{
    width: 230px;
    margin: 0px auto;
    margin-bottom: 10px;
}


@media screen and (min-width: 767px) {
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