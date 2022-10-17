<template>
<div class="property-grid">

    <div v-for="item in buyPropertyItems" :key="item.zpid" class="box">

        <div :style="{'background-image': 'url('+item.imgSrc + ')'  }" class="innerbox" @click="propertyToggle">

        </div>
        <div class="propertyinfo">
            <p>{{item.address}}</p>
            <div class="bath-bed">
                <h5>bathrooms: {{item.bathrooms}}</h5>
                <h5>Bedrooms: {{item.bedrooms}}</h5>
                <p>{{item.listingStatus}}</p>
            </div>
        </div>
        <router-link :to="{name:'propertyDetails', params:{id:item}}" v-if="showPropertyDetails" :props='item'>
             <propertyDetails  ></propertyDetails>
        </router-link>
       
    </div>
   
</div>
</template>

<script>
import propertyDetails from '../components/propertyHomeDetails.vue'

export default {
    components: {
        propertyDetails
    },
    data() {
        return {

            buyPropertyItems: [],
            showPropertyDetails: null
        }
    },
    methods: {
        propertyToggle() {
            this.showPropertyDetails = true

        }
    },
    mounted() {
        fetch('http://localhost:3000/props')
            .then(response => response.json())
            .then(response => {
                this.buyPropertyItems = response;
            })
            .catch(err => console.error(err));

    },
    created() {
        console.log(this.showPropertyDetails);
    }

}
</script>

<style>
.property-grid {
    margin-top: 10vh;
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);

    grid-auto-rows: 250px;
    gap: 2.5rem;
    padding: 0 1em;
    margin-bottom: 4rem;
}

.box {
    height: inherit;
    border-radius: 10px;

}

.box a {
    text-decoration: none;
    color: inherit;
}

.innerbox {
    background: no-repeat center center/cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    height: 70%;

}

.box:hover {
    transform: scale(1.1, 1.1);
    transition: all 0.5s;
}

.propertyinfo {
    height: 30%;
    box-shadow: 2px 2px 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0 10px;
}

.propertyinfo p:first-of-type {
    font-size: small;

}

.bath-bed {
    display: flex;
    gap: 12px;
    padding: 0;
}
</style>
