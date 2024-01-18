<template>
<div class="_container">
    <div class="introContainer">
        <div class="introColImg">
            <img class="introImg" src="../../assets/images/products/codiver/codiver.png" alt="">
        </div>
        <div class="introColText">
            <h1 class="introTitle">
                coDiver
            </h1>
            <p class="introSubtitle">
                {{$t('codiver.giris')}}
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
                    <li>{{$t('codiver.teknik1')}}</li>
                    <li>{{$t('codiver.teknik2')}}
                    </li>
                    <li>{{$t('codiver.teknik3')}}</li>
                    <li>{{$t('codiver.teknik4')}}</li>
                    <li>{{$t('codiver.teknik5')}}</li>
                </ul>
            </p>
        </div>
        <div class="technicalColText2">
                <ul class="technicalList">
                    <li>{{$t('codiver.teknik6')}}</li>
                    <li>{{$t('codiver.teknik7')}}</li>
                    <li>{{$t('codiver.teknik8')}}</li>
                    <li>{{$t('codiver.teknik9')}}</li>
                    <li>{{$t('codiver.teknik10')}}</li>
                </ul>
        </div>
    </div>
</div>
</template>

<style scoped>
._container {
    background-color: #131619;
    font-family: 'DM Sans', sans-serif;
    padding-right: 5%;
    padding-left: 5%;}
/* Introduction */
.introContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}
.introColImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    overflow: hidden;
}
.introImg {
    width: 70%;
    height: 30%;
    min-height: 250px;
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
    padding-left: 5%;
}

.technicalColImg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    overflow: hidden;
}


.technicalImg {
    width: 100%;
    height: 30%;
    min-height: 450px;
    object-fit: cover;
}

.technicalColText {
    display: flex;
    width: 40%;
    flex-direction: column;
}
.technicalColText2 {
    display: flex;
    padding-top: 100px;
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
