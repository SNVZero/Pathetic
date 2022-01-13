<template>
     <div class="wrapper-main">
        <div class="container">
            <div class="cases">
                <div class="row text-center">
                    <h2>Последние кейсы</h2>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 mb-4">
                        <div class="item">
                            <img src="./img/case1.jpg" alt="pic" class="pic">
                            <div class="p">
                                <h4>Настройка кэширования данных. Апгрейд Сервера. Ускорение работы сайта в 30 раз!</h4>
                                <p class="data">04.05.2020</p>
                                <p>Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-8 mb-4">
                        <div class="elem1">
                            <div class="content">
                                <h4>Использование отчетов <br> Ecommerce в Яндекс.Метрике</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 mb-4">
                        <div class="elem2">
                            <div class="content">
                                <h4>Повышение конверсии страницы с формой заявки с применением AB-тестирования</h4>
                                <p class="data">24.01.2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 mb-4">
                        <div class="elem3">
                            <div class="content">
                                <h4>Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%</h4>
                                <p class="data">23.09.2019</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 mb-4">
                        <div class="item">
                            <img src="./img/case5.png" alt="pic" class="pic">
                            <div class="p">
                                <h4>Обмен товарами и заказами интернет-магазинов на Drupal 7 c 1C:Предприятие, МойСклад, Класс365</h4>
                                <p class="data">22.08.2019</p>
                                <p class="text">Опубликован <a href="#">релиз модуля...</a></p>
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
    
}
</script>

<style>

.cases{
    padding: 15px;
    font-weight: 500;
}
.cases h2{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
}
.cases .pic{
    height: 120px;
    border-radius: 5px;
}
.cases p{
    font-size: 13px;
    opacity: 0.8;
}
.cases .elem1, .cases .elem2, .cases .elem3{
    position: relative;
    height: 220px;
    color: white;
    border-radius: 5px;
}
.cases .elem1{
    background-image: url('./img/case2.jpg');
    background-size: cover;
    background-position: center;
}
.cases .elem2{
    background-image: url('./img/case3.jpg');
    background-size: cover;
    background-position: center;
}
.cases .elem3{
    background-image: url('./img/case4.jpg');
    background-size: cover;
    background-position: center;
}
.cases .content{
    position: absolute;
    bottom: 30px;
    left: 40px;
    right: 10px;
}
.cases .item .pic{
    margin-bottom: 15px;
}
.cases .item .p{
    padding: 0px 10px;
}
.cases .item .p p{
    margin-top: 5px;
}
.cases .data{
    font-weight: 300;
    font-size: 12px;
    opacity: 0.7;
    margin-bottom: 5px;
}
.cases h4{
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 5px;
}
.cases a{
    color: dodgerblue;
    text-decoration: none;
}
.cases .item .data{
    margin-bottom: 20px;
}

@media screen and (min-width: 767px) {
     .cases .elem1, .cases .elem2, .cases .elem3{
        height: 430px;
    }
    .cases h2{
        font-size: 42px;

        margin-bottom: 40px;
    }
    .cases h4{
        font-size: 18px;
    }
    .cases .pic{
        height: 180px;
    }
    .cases .item .p{
        padding-top: 30px;
    }
    .cases p{
        font-size: 14px;
    }
}

</style>