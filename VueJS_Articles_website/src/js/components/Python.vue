<template>
    <div class="python">
			<div class="python-text">
				<div class="title">3 основні сфери застосування мови Python</div>
				<p class="text">До початку вивчення будь-якої мови програмування правильно було б задуматися про сфери її застосування. Ми розповімо про 3 найпопулярніші сфери застосування мови Python.</p>
				<button type="button" class="btn btn-danger" @click="foolform = true">Читати далі</button>
			</div>
			<div class="python-img">
				<img src="img/mozilla.png" alt="">
			</div>
		</div>
        <Transition name="fade">
        <div v-if="foolform" class="foolform" id="foolform">
        <div class="card">
			<img src="img/mozilla.png" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title">3 основні сфери застосування мови Python</h5>
				<p class="card-text">До початку вивчення будь-якої мови програмування правильно було б задуматися про сфери її застосування. Ми розповімо про 3 найпопулярніші сфери застосування мови Python.</p>
                <p class="desc">По-перше, це веб-розробка, де Python часто використовується завдяки таким фреймворкам, як Django і Flask, які дозволяють швидко створювати масштабовані та безпечні веб-додатки. По-друге, Python активно застосовується в науці про дані та машинному навчанні. Завдяки бібліотекам, таким як NumPy, Pandas та TensorFlow, Python став ключовим інструментом для аналізу даних і створення штучного інтелекту. Третя сфера — автоматизація завдань, де Python використовується для написання скриптів, які спрощують повсякденні процеси.</p>
				<button type="button" class="btn btn-danger" @click="foolform = false">Закрити</button>
			</div>
            
		</div>
    </div>
    </Transition>
 </template>
 
 <script>
 
 export default {
     
     data() {
         return {
            foolform: false
         }
     }
 }
 </script>
 
 <style lang="scss" scoped>
  .python{
    width: 75%; 
    border-radius: 10px;
    margin: 30px auto; 
    height: 400px;
    background: linear-gradient(to bottom, rgba(145,0,31,1) 0%,rgba(183,0,33,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    border: 2px solid #8f3636;
    padding: 2%;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    @media(max-width: 1033px) and (min-width: 850px){height: 300px;}
    @media(max-width: 850px){
        flex-direction: column-reverse;
        align-items: center;
        width: 100%; 
        height: 400px;
    }

    .python-text{
        color: #fff;
        @media(max-width: 850px){
            display: flex;
            flex-direction: column;
        }
        .tilte .text{ 
            font-family: Arial, Helvetica, sans-serif;
            margin-bottom: 10%;
            letter-spacing: 1px;
        }
        .title{
            margin-bottom: 5%;
            @media(min-width: 1270px){
                font-size: 45px;
                line-height: 50px;
            }
            @media(max-width: 1270px) and (min-width: 1180px){
                font-size: 35px;
                line-height: 50px;
            }
            @media(max-width: 1180px) and (min-width: 1033px){
                font-size: 30px;
                line-height: 40px;
            }
            @media(max-width: 1033px) and (min-width: 850px){
                font-size: 28px;
                line-height: 30px;
            }
            @media(max-width: 850px){
                font-size: 25px;
               text-align: center;
            }

        }
        .text{
            @media(max-width: 1270px) and (min-width: 1180px){font-size: 1em;}
            @media(max-width: 1180px) and (min-width: 1033px){font-size: 0.9em;}
            @media(max-width: 1033px) and (min-width: 850px){font-size: 0.8em;}
            @media(max-width: 850px){
                font-size: 0.9em;
               text-align: center;
            }
        }
        .btn{
            @media(max-width: 850px){
            align-self: center;
        }
    }
        
    }
    .python-img{
        margin-right: 5%;
        @media(max-width:850px){
            overflow: hidden;
        }
        img{
            border-radius: 5px;
            border: 3px solid #fff;
            @media(min-width: 1270px){
                height: 80%;
            }
            @media(max-width: 1270px) and (min-width: 1180px){
                height: 75%;
            }
            @media(max-width: 1180px) and (min-width: 1033px){
                height: 70%;
            }
            @media(max-width: 1033px) and (min-width: 850px){
                height: 60%;
            }
            @media(max-width: 850px){
                height: 85%;
            }
        }
    }
    
}
.foolform{
        position: fixed;
        top: 0; 
        left: 0; 
        width: 100vw; 
        height: 100vh; 
        background: rgba(252, 252, 252, 0.9); 
        z-index: 1; 
        display: flex;
        justify-content: center;
        align-items: center;
        .card{
            max-height: 650px;
            overflow-y: scroll;
            -webkit-box-shadow: -1px 2px 21px 3px rgba(0,0,0,0.75);
            -moz-box-shadow: -1px 2px 21px 3px rgba(0,0,0,0.75);
            box-shadow: -1px 2px 21px 3px rgba(0,0,0,0.75);
           
            @media(min-width: 1100px){width: 50%;};
            @media(max-width: 1100px) and (min-width: 800px){width: 60%;};
            @media(max-width: 800px) and (min-width: 600px){width: 70%;};  
            @media(max-width: 600px) and (min-width: 400px){width: 80%;};     
            @media(max-width: 400px) and (min-width: 300px){width: 90%;};    
        }
    }
    .fade-enter-active {
    transition: all 0.8s ease-out;
    }

   .fade-leave-active {
   transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
   }

   .fade-enter-from,
   .fade-leave-to {
   opacity: 0;
   }

 </style>