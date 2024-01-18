<template>
<div class="_container">
    <div class="introContainer">
        <div class="introColImg">
            <img class="introImg" src="@/assets/images/colighting/colightnew.png" alt="">
        </div>
        <div class="introColText">
            <h1 class="introTitle">
                coLighting
            </h1>
            <p class="introSubtitle">
               {{$t('colight.giris')}}
            </p>
        </div>
    </div>
    <div class="technicalContainer">
        <div class="technicalColText">
            <h1 class="technicalTitle">
                {{$t('colight.teknikbaslik')}}
            </h1>
            <p class="technicalSubtitle">
                <ul class="technicalList">
                    <li>{{$t('colight.teknik1')}}</li>
                    <li>{{$t('colight.teknik2')}}</li>
                    <li>{{$t('colight.teknik3')}}</li>
                    <li>{{$t('colight.teknik4')}}</li>
                    <li>{{$t('colight.teknik5')}}</li>
                    <li>{{$t('colight.teknik6')}}</li>
                </ul>
            </p>
        </div>
        <div class="technicalColImg">
            <img class="technicalImg" src="@/assets/images/colighting/teknik.png" alt="">
        </div>
    </div>
    <h1 class="partHead">
          {{$t('colight.part')}}
    </h1>
    <div class="partContainer">
        <div class="partImg">
            <img src="@/assets/images/colighting/aluminyum.png" alt="">
            <h2 class="partTitle">{{$t('colight.part1')}}</h2>
        </div>
        <div class="vl"></div>
        <div class="partImg">
            <img src="@/assets/images/colighting/color.png" alt="">
            <h2 class="partTitle">{{$t('colight.part2')}}</h2>
        </div>
        <div class="vl"></div>
        <div class="partImg">
            <img src="@/assets/images/colighting/battery.png" alt="">
            <h2 class="partTitle">{{$t('colight.part3')}}</h2>
        </div>
    </div>
</div>
</template>

<style scoped>
._container {
    background-color: #131619;
    font-family: 'DM Sans', sans-serif;
    padding: 5%;
}

/* Introduction */

.introContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}

.introColImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    overflow: hidden;
}

.introImg {
    width: 100%;
    height: 50%;
    min-height: 450px;
    object-fit: cover;
}
.introColText {
    display: flex;
    width: 40%;
    flex-direction: column;
}

.introColText .introTitle {
    font-family: 'DM Sans', sans-serif;
    color: aliceblue;
    font-size: 36px;
    margin-bottom: 20px;
}

.introSubtitle {
    font-family: 'DM Sans', sans-serif;
    color: rgb(169, 167, 167);
    font-size: 18px;
    line-height: 30px;
}

/* End Introduction */

/* Parts */

.partContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.vl{
    border-left: 1px dotted rgba(255, 255, 255, 0.5);
}
.partHead {
    color: aliceblue;
    font-family: 'DM Sans', sans-serif;
    font-size: 40px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 80px;
}
.partImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33%;
    transition: transform 250ms ease-in-out;
}
.partImg img {
    height: 300px;
    object-fit: contain;
    /* border: 1px solid green; */
}
.partTitle {
    color: rgb(169, 167, 167);
    margin-top: 30px;
}
.partImg:hover {
    transform: translateY(-30px);
}
/* End Parts */

@media screen and (max-width: 1023px) {

    /* Introduction */
    .introContainer {
        flex-direction: column;
    }

    .introColImg {
        width: 100%;
    }

    .introColText {
        width: 100%;
    }

    /* End Introduction */

    /* Parts */
    .partContainer {
        flex-direction: column;
    }

    .partImg {
        width: 100%;
        margin-bottom: 40px;
    }

    .partImg img {
        width: 35%;
        height: auto;
        min-width: 300px;
    }


}
/* technical */
.technicalContainer {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    margin-bottom: 100px;
}

.technicalColImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    overflow: hidden;
}

.technicalImg {
    width: 100%;
    height: 50%;
    min-height: 450px;
    object-fit: cover;
}

.technicalColText {
    display: flex;
    width: 40%;
    flex-direction: column;
}

.technicalColText .technicalTitle {
    font-family: 'DM Sans', sans-serif;
    color: aliceblue;
    font-size: 36px;
    margin-bottom: 20px;
}

.technicalList {
    font-family: 'DM Sans', sans-serif;
    color: rgb(169, 167, 167);
    font-size: 18px;
    line-height: 30px;
}

@media screen and (max-width: 1023px) {

    /* Introduction */
    .technicalContainer {
        flex-direction: column;
        justify-content: center;
        display: flex;
        align-items: center;
        }

    .technicalColImg {
        width: 50%;
    }

    .technicalColList {
        width: 100%;
    }
}
 </style>
/*End Technical */

