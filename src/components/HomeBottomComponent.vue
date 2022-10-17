<template>
    <div class="bottom">
        <div class="info-text">
            <p v-html="text"></p>
            <p v-html="text"></p>
            <br>
           
        </div>
        <div class="links">
            <img src="../../../projects/fontawesome-free-6.2.0-web/svgs/brands/facebook.svg" alt="">
            <img src="../../../projects/fontawesome-free-6.2.0-web/svgs/brands/linkedin.svg" alt="">
            <img src="../../../projects/fontawesome-free-6.2.0-web/svgs/brands/instagram.svg" alt="">
            <img src="../../../projects/fontawesome-free-6.2.0-web/svgs/brands/twitter.svg" alt="">

          
        </div>
        <div  class="img-line">
               <img v-for="img in src" :key="img.id" :src="img.src" alt="">
        </div>
    </div>
       
    <img src="" alt="">
        
       
    

</template>

<script>
export default {
    data(){
        return{
            text: 'Homelander Group is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests. <br> If you wish to report an issue or seek an accommodation, please let us know.',
            class: '',
            src:[
                {src:require('../assets/bottomimgs/undraw_our_neighborhood_re_rmx8.svg'), id:1},
                {src:require('../assets/bottomimgs/undraw_location_review_d5qn.svg'),id:2},
                {src:require('../assets/bottomimgs/undraw_small_town_re_7mcn.svg'),id:3},
                {src:require('../assets/bottomimgs/undraw_build_your__home_csh6.svg'),id:4}
            ]
           
        }
    },
    methods:{
       
    }

}
</script>

<style scoped>
   
.bottom{
    height: 100vh;
    font-family: poppins;
    font-size: x-small;
    background:#fff ;
    display: grid;
    grid-template-rows: 1fr 0.25fr 0.75fr;
    align-content: center;
    justify-items: center;    
    padding: 30px 0 0;
    margin: 0 0 5vh;
}
.info-text{
    height: 30%;
    width: 60%;
    
}
.links{

}
.links img{
    width: 40px;
    /* display: inline-block; */
    padding-left: 20px;
}
.img-line {
    display: flex;
    
    align-self: start;
    justify-self: start;  
    align-items: flex-end;  
}
.img-line img{
    width: 25vw;
   
    
    height: 20%;
    animation: float 5s infinite;
}
.img-line img:hover{
   
    transition: all 1s;
}
@keyframes float {
    0%{
        transform: translateY(0);
        
    }
    
    50%{
        transform: translateY( -2.5%);
        
    }

    100%{
        transform: translateY(0);   
    }
    
}
.img-line img:nth-of-type(2){
    animation-delay: 1s;
}
.img-line img:nth-of-type(3){
    animation-delay: 2s;
}
.img-line img:nth-of-type(4){
    animation-delay: s;
}


</style>