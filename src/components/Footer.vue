<template>
  <footer>
    <ul >
        <li v-for='list in lists' :key="list.id">{{list.content}}</li>
       
    </ul>

  </footer>
</template>

<script>
export default {
    data(){
        return{
            lists:[
                { content: 'Contact customer care' , id:1},
                { content: 'About', id:2},
                { content: 'Support', id:3},
                { content: 'Terms of use', id:4},
                { content: 'Privacy portal', id:5}
              ],
              
    mics:[
        {title: "Behringer", id: 1, details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        {title: "Rode", id:2, details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."},
        { title: "Sony", id: 3, details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
   
    ]

        }
       
    },
    mounted(){
    console.log(this.lists, this.mics.id);
        }

}
</script>

<style>
    footer{
      height: 10vh;
      width: 100vw;
      background: #fff;
      border-top: 1px solid #ddd;
      border-radius: 10px;
      position:fixed;
      bottom:  0;
      cursor: pointer;
      z-index: 3;
      
      
    }
    footer ul{
      display: flex;
      font-size: 0.8rem;
      flex-direction: row;
      width: 100vw;
      height: inherit;
      align-items: center ;
      justify-content: center;
      gap: 2rem;

    }
    footer ul li{
      list-style-type: none;
    }

</style>