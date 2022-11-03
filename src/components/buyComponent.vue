<template>
<div v-if="[`home`].includes($route.name)" id="buy-component">
    <div class="visiblePopup">
        <div class="column-1">
            <ul>
                <li>
                    Homes for sale
                </li>
                <li>
                    Warehouses
                </li>
                <li>
                    newly constructed
                </li>
            </ul>
        </div>
        <div class="column-2">
            <ul>
                <li>
                    Most recent listings
                </li>
                <li>
                    Warehouses
                </li>
                <li>
                    Shared buying plan
                </li>
                <li>
                    open houses
                </li>
            </ul>
        </div>
    </div>
</div>
 
</template>

<script>
export default {
    name: 'Buycomponent'

}
</script>

<style scoped>


#buy-component .visiblePopup{
  position:fixed;
  top: 12vh;
  background: #f6f4f2;
  left: 0;
  height: 42vh;
  width: 100%;
  visibility:visible;
  transition: all 1s;
  display:  flex;
  gap: 10%;
  padding: 2vh 5vh ;
  
}
 #buy-component .visiblePopup ul{
    display: flex;
    flex-direction: column;
    height: 36vh;
    align-items: center;
    justify-content: space-around;
    gap: 10%;
    padding: 0 5vw 0 0
}
#buy-component .column-1 ul {
    border-right: 0.5px solid #2c3e50;
    
}
#buy-component .visiblePopup li{
    list-style-type: none;
}

</style>