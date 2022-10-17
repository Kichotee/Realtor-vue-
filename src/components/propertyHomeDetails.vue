<template>
<div class="propertyDetails">
    {{props.address}}
</div>
</template>

<script>
export default {
    props:['props'],
  setup(props){
 
   
     console.log(props);
  }
}
</script>

<style>
.propertyDetails {
    position: fixed;
    width: 60vw;
    top: 0;
    height: 700px;
    display: flex;

}
</style>
