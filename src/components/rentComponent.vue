<template>
    <div id="rent-component">
        <div class="visiblePopup">
        rent a property
  
    </div>
    </div>
    
  </template>
  
  <script>
  export default {
      name: 'rentComponent'
  
  }
  </script>
  
  <style>
     
    

#rent-component .visiblePopup{
  position:fixed;
  top: 20vh;
  background: #f6f4f2;
  left: 0;
  height: 42vh;
  width: 100%;
  visibility:visible;
  transition: all 1s;
  display:  flex;
  /* align-items: center;
  justify-content: start; */
  gap: 10%;
  padding: 5vw;
  
}
 #rent-component .visiblePopup ul{
    display: flex;
    flex-direction: column;
    height: 30vh;
    align-items: flex-start;
    justify-content: space-around;
    gap: 10%;
    padding: 0 5vw 0 0
}
#rent-component .column-1 ul {
    border-right: 0.5px solid #2c3e50;
    
}
#rent-component .visiblePopup li{
    list-style-type: none;
}
  
  
  </style>