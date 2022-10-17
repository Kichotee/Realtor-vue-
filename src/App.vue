<template>
  <nav >
    
    <router-link class="nav-elements"  to="/">
      <div id="logo-box">
      <img :src="src" alt="">
      <p>Homelander.</p>
    </div>
  </router-link>
    <div id="nav-menu" >
      <router-link to="/">
    
      </router-link>
     
      <router-link class="nav-elements text-icons "  @mouseenter="activateButton = 'buyComponent'" @mouseleave="hideDetails" :to="{name:'buyProperty'}" >
        <p> Buy property</p> 
      </router-link>
        
      <router-link class="nav-elements text-icons" @mouseenter="activateButton = 'rentComponent'" @mouseleave="hideDetails" :to="{name:'buyProperty'}">
        Rent property
      </router-link>
    </div>
    
  </nav>

  
 
  <router-view/>
  <Footer></Footer>
  <buyComponent v-if="activateButton === 'buyComponent'" 
    @mouseenter="activateButton = 'buyComponent'" 
    @mouseleave="hideDetails"></buyComponent>
  <rentComponent v-if="activateButton === 'rentComponent'" 
  @mouseenter="activateButton = 'rentComponent'"
    @mouseleave="hideDetails">
  
  >
  
  
  </rentComponent>
  
</template>
<script>
import Footer from './components/Footer.vue';
import buyComponent from './components/buyComponent.vue'
import rentComponent from './components/rentComponent.vue';

 

export default {
    data() {
        return {
            src: require("./assets/undraw_house_searching_re_stk8.svg")
            ,
            activateButton:'' 
          };
    },
    components: { Footer, buyComponent, rentComponent },
    methods:{
      hideDetails(){
       this.activateButton= null
      },
      showDetails(){
        this.popupId = 'hidePopup'
      }
    }

}
</script>

<style>
  *{
    margin:0;
    padding: 0;
  }
  @font-face {
    font-family: roboto;
    src: url(./../../projects/Roboto-Light.ttf);
  }
#app {
  font-family: poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f6f4f2;
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
 ;
}
#app::-webkit-scrollbar{
  width: 8px;
  
  
}
#app::-webkit-scrollbar-thumb:hover{
  width: 8px;
  
  
}
#app::-webkit-scrollbar-track{
  width: 10px;
  background: transparent;
  border-radius: 5px;
  
}
#app::-webkit-scrollbar-thumb{
  background:#9b6c5c ;
  border-radius: 5px;
}
#app::-webkit-scrollbar-thumb:hover{
  background:#765341
}
nav {
  padding: 0 30px;
  height: 12vh;
  
  margin-bottom: 0;
  border-bottom: 1px solid #765341;
  
}

nav a {
  font-size: 0.8rem;
  font-weight: 200;
  color: #2c3e50;
  text-decoration: none;

}


nav a.text-icons.router-link-exact-active {
  color: #a13d2d;
  
  
 
}
#nav-menu a{
  margin: 2px;
  font-size: 1rem;
}
 a:first-of-type.router-link-exact-active {
  
}
.nav-elements{
  padding: 2.5vh 0vh;
}

#logo-box{
  width: 25vw;
  /* background-color: blue; */
  height: 8px;
  margin: 20px 0;
  display: flex;
  align-items: baseline;
  justify-content: center;
  float: left;
  
 
}
#logo-box p{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  
}
#nav-menu{
  width: 40%;
  float: right;
  height: inherit;
  display: flex;
  align-items: end;
  justify-content:space-around;
  
}
nav #logo-box img{
  width: 80px;
}
#app .hidePopup{
  visibility: hidden;
}

</style>
