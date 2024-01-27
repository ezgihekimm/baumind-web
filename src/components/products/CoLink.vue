<template>
<div class="_container">
    <div class="" style="width: 150px; color: white; margin-top: 5%; margin-left: 5%; ">
        <Button type="transparent" :href="href" :text="$t('button.back')" link="products" target="_self" />
    </div>
    <div class="introContainer">
      <div class="introColImg">
            <img class="introImg" src="../../assets/images/products/colink/minified/colink.png" alt="">
        </div> 
        <div class="introColText">
            <h1 class="introTitle">
                coLink
            </h1>
            <p class="introSubtitle">
                {{$t('colink.giris')}}
            </p>
        </div>
    </div>

    <div class="technicalContainer">
        <div class="technicalColText">
            <h1 class="technicalTitle">
                {{$t('colink.teknikbaslik')}}
            </h1>
            <p class="technicalSubtitle">
                <ul class="technicalList">
                    <li>{{$t('colink.teknik1')}}</li>
                    <li>{{$t('colink.teknik2')}}
                    </li>
                    <li>{{$t('colink.teknik3')}}</li>
                    <li>{{$t('colink.teknik4')}}</li>
                    <li>{{$t('colink.teknik5')}}</li>
                    <li>{{$t('colink.teknik6')}}</li>
                    <li>{{$t('colink.teknik7')}}</li>
                    <li>{{$t('colink.teknik8')}}</li>
                    <li>{{$t('colink.teknik9')}}</li>
                    <li>{{$t('colink.teknik10')}}</li>
                </ul>
            </p>
        </div>
        <div class="technicalColImg">
            <img class="technicalImg" src="../../assets/images/products/colink/colink2.png" alt="">
        </div>
    </div>
</div>
</template>

<script>
import Button from '../common/Button.vue'
export default {
    name: "CoLighting",
    components: {
        Button
    },
};
</script>


<style scoped>
._container {
    background-color: #131619;
    font-family: 'DM Sans', sans-serif;
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
    width: 40%;
    margin-right: 50px;
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

.vl {
    border-left: 1px dotted rgba(255, 255, 255, 0.5);

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
    width: 30%;
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
