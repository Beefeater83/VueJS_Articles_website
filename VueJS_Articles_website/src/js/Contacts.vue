<template>
    <div>
       <Head />
       <Contact />
       <Footer />
    </div>
 </template>
 
 <script>
 import Head from './components/Head.vue';
 import Contact from './components/Contact.vue';
 import Footer from './components/Footer.vue';
 
 export default {
     components:{ Head, Contact, Footer },
     data() {
         return {
             
         }
     }
 }
 </script>
 
 <style lang="scss">
    
 </style>