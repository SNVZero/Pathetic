<template>
     <div class="wrapper-main">
        <div class="container">
            <div class="team" id="team">
                <div class="row text-center">
                    <h2>Команда</h2>
                </div>
                <div class="row">
                    <div class="col-6 col-lg-4 item">
                        <img src="./img/Sergej-Sinica.jpg" alt="pic" class="pic">
                        <h3>Сергей Синица</h3>
                        <p>Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора</p>
                    </div>
                    <div class="col-6 col-lg-4 item">
                        <img src="./img/Roman-Agabekov.jpg" alt="pic" class="pic">
                        <h3>Роман Агабеков</h3>
                        <p>Руководитель отдела DevOPS, директор</p>
                    </div>
                    <div class="col-6 col-lg-4 item">
                        <img src="./img/Aleksej-Sinica.jpg" alt="pic" class="pic">
                        <h3>Алексей Синица</h3>
                        <p>Руководитель отдела поддержки сайтов</p>
                    </div>
                    <div class="col-6 col-lg-4 item">
                        <img src="./img/Darya-Bochkaryova.jpg" alt="pic" class="pic">
                        <h3>Дарья Бочкарёва</h3>
                        <p>Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов</p>
                    </div>
                    <div class="col-6 col-lg-4 item">
                        <img src="./img/Irina-Torkunova.jpg" alt="pic" class="pic">
                        <h3>Ирина Торкунова</h3>
                        <p>Менеджер по работе с клиентами</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 text-center">
                        <button>ВСЯ КОМАНДА</button>
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
.team{
    padding: 45px 16px;
}
.team h2{
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 20px;
}
.team h3{
    font-size: 16px;
    font-weight: 700;
}
.team p{
    font-size: 12px;
    font-weight: 500;
    opacity: 0.9;
}
.team .pic{
    width: 100%;
    margin-bottom: 12px;
}
.team row{
    width: 100%;
}
.team .item{
    padding-left: 15px;
    padding-right: 15px;
}
.team button{
    font-size: 12px;
    width: 160px;
    height: 35px;
    border-radius: 5px;
    border: 1px solid rgb(201, 190, 190);
    outline: none;
    background-color: white;
    font-weight: 500;
}


@media screen and (min-width: 767px) {
.team{
        padding-top: 150px;
    }
    .team h2{
        font-size: 42px;
    }
    .team p{
        font-size: 16px;
    }
    .team .item{
        padding-left: 75px;
        padding-right: 75px;
        margin-top: 65px;
    }
    .team button{
        width: 250px;
        height: 60px;
        margin-top: 40px;
    }

}
</style>