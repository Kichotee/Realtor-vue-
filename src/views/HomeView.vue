<template>
<div id="home">
    <div class="home-box">
        <div id="home-box-content">
            <h2>
                Make the home
                <br>
                yours!
            </h2>

        </div>
        <div id="home-box-search">
            <label for="search"><small>Find your taste</small></label>
            <input type="search" name="" id="" placeholder="search">
        </div>
    </div>
</div>
<HomeOptionComponent></HomeOptionComponent>
<HomeBottomComponent></HomeBottomComponent>
</template>

<script>
// @ is an alias to /src
import HomeOptionComponent from '../components/HomeOptionComponent.vue'
import HomeBottomComponent from '../components/HomeBottomComponent.vue'
import {
    onMounted,
    computed,
    ref
} from "vue";
import {
    useStore,
    mapState
} from 'vuex'

export default {
    name: 'HomeView',
    components: {
        HomeOptionComponent,
        HomeBottomComponent
    },
    setup() {

        const store = useStore()

        const users = computed(() => {
            return store.state.users
           
        })

        onMounted(() => {
            store.dispatch('fetchUsers')
        })

       
    }

}
</script>

<style>
@font-face {
    font-family: poppins;
    src: url(../../../projects/Poppins-Regular.ttf);
}

@font-face {
    font-family: SF;
    src: url(../assets/SanFrancisco/SFUIDisplay/SFUIDisplay-Bold.ttf);
}

#home {
    height: 100vh;
    background: inherit;
}

.home-box {
    background-repeat: no-repeat;
    background: #765341 url(../assets/breno-assis-r3WAWU5Fi5Q-unsplash.jpg) no-repeat center /cover;
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    justify-items: center;
    min-height: 60vh;
    font-family: poppins;
}

#home-box-content {
    grid-column: 1;
    padding-left: 1rem;

}

#home-box-content h2::first-letter {
    font-size: 4.5rem;
}

#home-box-content h2 {
    color: #f9f9f9;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 900;
    letter-spacing: 0.25rem;
}

#home-box-search {
    display: flex;
    flex-direction: column-reverse;
    padding: 0 1.2rem;
    text-align: center;
    width: 50vw;
    align-self: start;

}

#home-box-search input {

    padding: 0.75rem;
    border: none;
    border-radius: 00.25rem;

}

#home-box-search input:focus {
    /* border: #6b63ff solid 1px; */
    outline: #765341 solid 1px;
}

#home-box-search input::placeholder {
    color: #765341;
    font-size: 1rem;
    text-align: right;

}

#home-box-search label {
    color: #f9f9f9;
}
</style>
