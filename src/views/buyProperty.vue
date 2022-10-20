<template>
<div class="property-grid" >

    <div v-for="item in buyPropertyItems" @click="showModalOfItem = item.zpid" :key="item.zpid" class="box">

        <div :style="{'background-image': 'url('+item.imgSrc + ')'  }" class="innerbox"></div>

        <!-- this displays all objects in the array -->

        <div class="propertyinfo" >
            <p>{{item.address}}</p>
            <div class="bath-bed">
                <h5>bathrooms: {{item.bathrooms}}</h5>
                <h5>Bedrooms: {{item.bedrooms}}</h5>
                <p>{{item.listingStatus}}</p>
            </div>
        </div>
        <!-- i want this popup to display data for the object that is clicked -->
        <teleport to='body'>
            <div v-if="showModalOfItem==item.zpid"  :key="item.zpid" @click="closeModal" class='popup'>

                <div class="">
                    {{item.address}}
                    {{item.bathrooms}}

                </div>
            </div>
        </teleport>

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
            showPropertyDetails: null,
            showModalOfItem:null
            
        }
    },
    methods: {
        propertyToggle() {
            this.showPropertyDetails = !this.showPropertyDetails
            console.log('clicked');
        },

        propertyDefault() {
            this.showPropertyDetails = null

        },
        closeModal(){
            if(this.showModalOfItem !== null ){
                this.showModalOfItem= null
            }
        }
    },
    mounted() {
        fetch('http://localhost:3000/props')
            .then(response => response.json())
            .then(response => {
                this.buyPropertyItems = response;
            })
            .catch(err => console.error(err));
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
    position: relative;

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

.popup {
    position: absolute;
    top: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.1);
}

.popup>div {
    background: #fff;
    height: 50%;
    width: 45%;
    border-radius: 25px;
    padding: 50px;
}
</style>
