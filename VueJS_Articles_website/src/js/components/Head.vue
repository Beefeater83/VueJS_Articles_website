<template>
   <header>
			<div class="logo">
				<img src="img/news.png" alt="">
				<div class="logo-text">
					<h4>itProger</h4>
					<h5>Blog</h5>
				</div>
			</div>

            <div v-if="!search"  class="search">
                <input type="text" @focus="openSearch()" placeholder="Пошук">
            </div>
			
			<Transition name="fade">
                <div v-if="search" class="search-form">
                 <div class="search-wraper">
                   <h3>Форма пошуку</h3>
				   <input type="text" v-model="userInput"  placeholder="Пошук">
                   <i v-if="input" class="fa-solid fa-circle-xmark" @click="clearField()"></i><br>
                   <button @click="closeSearch()">Закрити</button>
                 </div>
			    </div>
            </Transition>
			<div class="nav">
				<router-link to="/" class="btn me-2 btn-outline-secondary">Головна</router-link>
				<router-link to="/home" class="btn me-2 btn-outline-secondary">Статті</router-link>
                <router-link to="/contacts" class="btn me-2 btn-outline-secondary">Контакти</router-link>
				
			</div>
		</header>
</template>

<script>
export default {
    data() {
        return {
            search: false,
            input: false,
            userInput: ''
        }
    },
    methods: {
        openSearch(){
            if(!this.search){
                this.search = true;
             }
        },
        closeSearch(){
            if(this.search){
                this.search = false;
                this.userInput='';
            }
        },
        clearField(){
            this.userInput='';
        }
    },
    watch:{
        userInput(newValue, oldValue){
            if(newValue !=''){
                this.input=true;
            } else {
                this.input= false;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    border-radius: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    -webkit-box-shadow: 0px 2px 8px 2px rgba(117,113,117,0.39);
    -moz-box-shadow: 0px 2px 8px 2px rgba(117,113,117,0.39);
     box-shadow: 0px 2px 8px 2px rgba(117,113,117,0.39);
    @media(min-width: 805px){
     width: 75%; 
     margin: 30px auto; 
     height: 100px;
     justify-content: space-between;
    }
    @media(max-width: 850px) and (min-width: 305px){
     width: 100%; 
     margin: 5px auto; 
     height: auto;
     justify-content: center;
     flex-direction: column;
     
    }
    
   
    .logo{
       display: flex;
        img{
            width: 70px;
            margin-left: 10px;
            margin-right: 15px;
            border-radius: 50%;
            border: 2px solid #682121; 
            transition: all 500ms ease;
            &:hover, &:active{transform: rotate(360deg);}
        }
        .logo-text{
            h4{
                margin-bottom: 0;
                margin-top: 5px;
                font-weight: 900;
            }
            h5{
                font-weight: 900;
                color: #8f3636;
            }
        }
    } 
    .search{
        @media(min-width: 850px){
            width: 17%;
            height: 37%;   
        }
        @media(max-width: 850px) and (min-width: 500px){
            width: 30%;
            height: 25px; 
            margin: 10px auto;  
        }
        @media(max-width: 500px) and (min-width: 305px){
            width: 50%;
            height: 25px; 
            margin: 5px auto;  
        }
        input{
          width: 100%;
          height: 100%;
          text-indent: 10px;
          border-radius: 5px;
          border: 1px solid silver;
        }
          
    }
        
    .search-form{
        position: fixed;
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh; 
        background: rgba(252, 252, 252, 0.9); 
        z-index: 1; 
        display: flex;
        justify-content: center;
        
        .search-wraper{
            width: 70%;
            position: relative;
            top: 80px;
            h3{
                color: #a74040;
                margin-bottom: 20px;
            }
            
            input{
            width: 80%;
            height: 30px;
            text-indent: 10px;
            border-radius: 5px;
            border: 1px solid silver;
            outline: none;
            }
            i{
               color: rgb(173, 171, 171);
               position: relative;
               cursor: pointer;
               @media(min-width: 900px){right: 3%};
               @media(max-width: 900px) and (min-width: 700px){right: 4%};
               @media(max-width: 700px) and (min-width: 500px){right: 5.5%};
               @media(max-width: 700px) {right: 8%}
            }

            button {
             margin-top: 20px;
             padding: 5px 10px;
             background-color: #a74040;
             border: none;
             color: #fff;
             cursor: pointer;
             border-radius: 5px;
             &:hover{
                background-color: #b94848;
             }
            }
    }
            
    }/*
      .fade-enter-active,
      .fade-leave-active {
       transition: opacity 1.2s ease;
       }

      .fade-enter-from,
      .fade-leave-to {
       opacity: 0;
      }
    */
    
    .fade-enter-active {
    transition: all 0.8s ease-out;
    }

   .fade-leave-active {
   transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
   }

   .fade-enter-from,
   .fade-leave-to {
   transform: translateX(20px);
   opacity: 0;
   }
  
 
    .nav{
        margin: 1%;
        .btn{
           background: #f5f3f3;
           border: 1px solid silver;
           @media(max-width: 805px) and (min-width: 600px){
            transform: scale(0.9);
           }
           @media(max-width: 600px) and (min-width: 450px){
            transform: scale(0.8);
           }
           @media(max-width: 450px) and (min-width: 305px){
            transform: scale(0.7);
           }
        }
        .btn:hover{
            color: #000;
            background: #e7e5e5;
        }
    }
}
</style>