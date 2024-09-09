<template>

  <div 
  @dragenter.prevent="toggleActive" 
  @dragleave.prevent="toggleActive" 
  @dragover.prevent
  @drop.prevent="toggleActive"
  :class="{'active-dropzone': active}"
  class="dropzone">
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-dropbox" viewBox="0 0 16 16">
  <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555z"/>
</svg> <br>
       Drag or drop here</span>
    <span>Or</span>
    <label for="dropzoneFile"> Select file</label>
    <input type="file" id="dropzoneFile" class="dropzoneFile"/>
  </div> 
  
</template>
<script>
import {ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "my",
  setup(){
    const active = ref(false);

    const toggleActive = () => {
      active.value = !active.value;
    };

    return {active , toggleActive};
  }
      
};
// eslint-disable-next-line no-undef
app;
</script>
<style>
:root{
  --colorOne:#54a6f3;
  --colorTwo:#fff;
}
.dropzone{
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed var(--colorOne);
  background-color: var(--colorTwo);
  transition: 0.4s ease all;
}
label {
  padding: 8px 12px;
  color:var(--colorTwo);
  background-color: var(--colorOne);
  transition: 0.3s ease all;
}
input{
  display: none;
}
.active-dropzone{
  color:  var(--colorTwo);
  border: 2px dashed var(--colorTwo);
  background-color: var(--colorOne);

}
.active-dropzone label{
  background-color: var(--colorTwo);
  color: var(--colorOne);
}
</style>