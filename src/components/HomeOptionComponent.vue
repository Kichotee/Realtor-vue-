<template>
<body>
    <ul>

        <li class="card" v-for="src in srcs" :class="class" @mouseenter="hoverClass">
            <router-link to="/about">
                <div class="card-content">
                    <img :src="src.src" alt="">
                    <div class="textDetails">
                        <h4>{{src.details}}</h4>

                        <p>{{src.textDetail}}</p>
                    </div>
                    <button class="buttonClass">{{src.buttonText}}</button>

                </div>
            </router-link>
        </li>

    </ul>

</body>
<router-view />
</template>

<script>
export default {
    data() {
        return {
            srcs: [{
                    src: require("../assets/undraw_buy_house_re_8xq7.svg"),
                    details: 'Buy a house',
                    textDetail: 'View sale listings and filter according to location and other amenities ',
                    buttonText: 'Browse homes'
                },
                {
                    src: require("../assets/undraw_for_sale_re_egkk.svg"),
                    details: 'Rent a house',
                    textDetail: 'View sale listings and filter according to location and other amenities',
                    buttonText: 'Browse homes'
                },
                {
                    src: require("../assets/undraw_under_construction_-46-pa.svg"),
                    details: 'Build a house',
                    textDetail: 'We take charge of all building operations and deliver beautiiful structures',
                    buttonText: 'Browse homes'
                },

            ],

            class: '',
            buttonClass: ''

        }
    },
    methods: {
        hoverClass() {
            this.class = 'cardEffect'
        }
    }

}
</script>

<style scoped>
body {
    height: 100vh;
    /* font-family: poppins; */
}

body ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 0.5vw;
    height: 90vh;
    align-items: center;
    gap: 1.5rem;

}
a{
    text-decoration: none;
    color: #2c3e50;
}

 .card {
    height: 450px;
    width: 400;
    border: none;
    border-radius: 10px;
    margin: 0;
    padding: 0;
    background: #fefefe;
    box-shadow: #765341 1px 1px 5px;

    list-style: none;
}
.card-content {
    height: 370px;
    margin: 0 1rem;
    display: grid;
    grid-template-rows: 1fr, 0.5fr, 0.5fr;

}
.card-content img {
    width: 300px;
    height: 150px;
    margin: 0;
    padding: 0;
    place-self: center;
    grid-row: 1;

}

a .card-content:nth-child(2) {

    grid-row: 2;
    align-self: center;
    justify-self: center;
}

.textDetails {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.textDetails p {
    font-size: 1rem;

}

.card-content button {
    width: 50%;
    height: 60%;
    place-self: center;
    background: none;
    border: 1px solid #765341;
    border-radius: 6px;
}

.cardEffect:hover {
    transform: scale(1.1, 1.1);
    transition: all 0.5s;
}

.cardEffect:hover button {
    background: #765341;
    color: #f9f9f9;
    transition: 0.5s;
}
</style>
