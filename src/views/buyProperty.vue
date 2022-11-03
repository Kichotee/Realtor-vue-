<template>
<div class="property-grid">

    <div v-for="item in property" @click="showModalOfItem = item.zpid" :key="item.zpid" class="box">

        <div :style="{'background-image': 'url('+item.imgSrc + ')'  }" class="innerbox"></div>

        <!-- this displays all objects in the array -->

        <div class="propertyinfo">
            <p>{{item.address}}</p>
            <div class="bath-bed">
                <h5>bathrooms: {{item.bathrooms}}</h5>
                <h5>Bedrooms: {{item.bedrooms}}</h5>
                <p>{{item.listingStatus}}</p>

            </div>
        </div>
        <!-- i want this popup to display data for the object that is clicked -->
        <teleport to='body'>
            <transition name="pop">
                <div v-if="showModalOfItem==item.zpid" :key="item.zpid" @click.self="closeModal" class='popup'>

                    <div class="">
                        <div class="popupImg">
                            <img class="" :src="item.imgSrc" alt="">

                        </div>
                        <span></span>
                        <div class="popupDetails">

                            <p class='Address'> Address: {{item.address}}</p>
                            <div class="price-type">
                                <p>Property type:{{item.propertyType}}</p>
                                <p>Price: ${{item.price}} {{products}} </p>
                            </div>
                            <div class="living-space">
                                Living space: {{item.livingArea}} m<sup>2</sup>
                            </div>

                        </div>

                    </div>
                </div>
            </transition>
        </teleport>

    </div>

</div>
</template>

<script>
import propertyDetails from '../components/propertyHomeDetails.vue'
import {
    mapState,
    useStore
} from 'vuex'
import {
    ref,
    onMounted,
    computed
} from 'vue';

export default {
    components: {
        propertyDetails
    },
    data() {
        return {

            buyPropertyItems: [],
            showPropertyDetails: null,
            showModalOfItem: null

        }
    },

    mounted() {

    },
    methods: {
        propertyToggle() {
            this.showPropertyDetails = !this.showPropertyDetails
            console.log('clicked');
        },

        propertyDefault() {
            this.showPropertyDetails = null

        },
        closeModal() {
            if (this.showModalOfItem !== null) {
                this.showModalOfItem = null
            }
        }
    },
    setup() {

        //import the global store object from Vuex
        // declare the store variable
        const store = useStore();

        const property =  store.state.property

        return{
            property
        }
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
    background-color: rgba(0, 0, 0, 0.3);
}

.popup>div {
    background: #fff;
    height: 70%;
    width: 65%;
    border-radius: 25px;
    display: flex;
    gap: 20px;
    text-align: left;
    z-index: 3;
    position: relative;
    overflow: hidden;
    overflow-y: hidden;

}

.popupImg {
    height: 100%;

    width: 60%;

}

.popupImg img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 25px;

}

.popupDetails p {
    font-size: 1rem;
    align-self: center;
}

.popupDetails {
    align-self: center;
    font-family: poppins;
    display: flex;
    height: 100%;
    align-text: left;
    flex-direction: column;
    gap: 1rem;
    margin-top: 100px;

}

.popupDetails .Address {
    color: #765341;

}

.popupDetails .price-type,
.living-space {
    color: #a3a3a3;

}

.popupDetails>div::after {
    content: '';
    height: 450px;
    width: 200px;
    transform: rotate(-45deg);
    position: absolute;
    top: -42%;
    right: -12px;
    display: block;
    background: #a3a3a323;
    z-index: -5;
    border-radius: 50%;
}

.pop-enter-from,
.pop-leave-to {
    opacity: 0;
    transform: translate(-60px);
}

.pop-enter-active {
    transition: all 0.5s ease;
}

.pop-leave-active {
    transition: all 0.5s ease-in-out;
}
</style>
