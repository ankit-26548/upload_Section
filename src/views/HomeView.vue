<template>
    <div 
    @dragover.prevent="handleDragOver"
    @drop.prevent="handleDrop"
   
  :class="{'active-dropzone': active}" 
    
  class="dropzone">

    <span >
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-dropbox" viewBox="0 0 16 16">
  <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555z"/>
</svg> <br>
       Drag or drop here</span>
    <span>Or</span>
      <input type="file" ref="fileInput" @change="onselectedFiles" multiple />
      <ul v-if="files.length">
       
      </ul>
    </div>
    <li v-for="(file, index) in files" :key="index">
          {{ file.name }}
          <button @click="removeFile(index)">Remove</button>
          <button @click="uploadFiles">Upload</button>
        </li>
  </template>
  

<script>
// import { refs } from 'vue';
export default {
 name: "HomeView",
 data() {
   return {
    files: [
      
    ],
    active:false
  
    
      
    

   };


 },
 

  
//  }

 beforeUnmount: function () {

 },
 methods: {
  onselectedFiles(event) {
      const selectedFiles = Array.from(event.target.files);
      this.files = [...this.files, ...selectedFiles];
      event.target.value = ''; // Clear input value to allow re-selection of the same file
    
  },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    handleDragOver(event) {
      event.preventDefault();
      this.active = true;
    
    },
    handleDrop(event) {
      const files = event.dataTransfer.files;
      this.uploadFiles(files);
      this.active = false; 
    },
    handleFileEdit(event) {
      const files = event.target.files;
      this.uploadFiles(files);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    uploadFiles(files) {
      // Handle file upload logic here
      console.log('Files to upload:', files);
      this.files = [...this.files, ...Array.from(files)];``
 
    }
    
    
 }
}
</script>

