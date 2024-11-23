<template>
    <footer>
		<p>Developed by Dyakonov &copy;</p>
	</footer>
 </template>
 
 <script>
 
 export default {
     
     data() {
         return {
             
         }
     }
 }
 </script>
 
 <style lang="scss" scoped>
  footer{
    -webkit-box-shadow: -1px -2px 12px 5px rgba(194,186,194,0.68);
    -moz-box-shadow: -1px -2px 12px 5px rgba(194,186,194,0.68);
    box-shadow: -1px -2px 12px 5px rgba(194,186,194,0.68);
    width: 75%; 
    border-radius: 10px;
    margin: 25px auto; 
    height: 5%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9em;
    font-weight: 500;
    letter-spacing: 1px;
    @media(max-width: 850px){ width: 100%;}
}

 </style>