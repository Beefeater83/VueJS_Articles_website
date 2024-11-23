<template>
    <section class="news container">
        <div class="article">
             <p class="article-header">Новини</p>
            <div class="news-block">
                <div class="card" id="engines">
					<img src="img/engines.png" class="card-img-top">
					<div class="card-body">
						<h5 class="card-title">Порівняння двигунів: Ureal Engine 4 проти Unity 5</h5>
						<p class="card-text">Вибрати двигун справа не проста, особливо коли обидва дуже добрі. У статті порівняємо два програми та з’ясуємо, який двигун підійде саме Вам.</p>
                        <p class="desc" style="display: none;">За функціоналом вони дуже схожі. Обидва движки обладнуються браузерами для ассетів, обробки скриптів та інших типів файлів. Об'єкти, що розробляються, просто перетягуємо до сцени, і вони вносяться в загальну ієрархію.</p>
						<button type="button" class="btn btn-warning" @click="showFoolForm('engines')">Читати далі</button>
					</div>
				</div>

                <div class="card" id="tools">
					<img src="img/tools.png" class="card-img-top">
					<div class="card-body">
						<h5 class="card-title">11 корисних інструментів для веб-розробника</h5>
						<p class="card-text">Розробники постійно намагаються зробити своє життя простішим або розширити власні можливості. Ми підготували 11 інструментів, які це забезпечать.</p>
                        <p class="desc" style="display: none;">Сучасні веб-додатки та сервіси активно використовують машинне навчання для покращення користувацького досвіду, персоналізації контенту та підвищення ефективності своїх продуктів. У цій статті ми розглянемо, як машинне навчання застосовується у веб-розробці та які сучасні підходи та технології дозволяють реалізувати найамбітніші проекти.</p>
						<button type="button" class="btn btn-warning" @click="showFoolForm('tools')">Читати далі</button>
					</div>
				</div>

                <div class="card" id="itgirls">
					<img src="img/itgirls.png" class="card-img-top">
					<div class="card-body">
						<h5 class="card-title">7 дівчат айтішніц з фільмів та серіалів</h5>
						<p class="card-text">Чи багато ви знаєте фільмів чи серіалів, де головні персонажі — дівчата-програмісти? Ми підібрали 7 таких фільмів із подібною концепцією.</p>
                        <p class="desc" style="display: none;">У картині, випущеній у 1995 році, команда хакерів озброюється проти лиходія з широкими можливостями у сфері IT. У міру сюжету «хороші» хакери докопуються до розуміння, що начальник служби безпеки «хробаком» проник у компанію нафту, що видобуває, і вкрав $25 млн.</p>
						<button type="button" class="btn btn-warning" @click="showFoolForm('itgirls')">Читати далі</button>
					</div>
				</div>

				<div class="card" id="learning">
					<img src="img/learning.png" class="card-img-top">
					<div class="card-body">
						<h5 class="card-title">Як працює Deep Learning? Як працює глибоке навчання?</h5>
						<p class="card-text">Як працює глибоке навчання і що воно є? У статті ми розповімо про Deep Learning та розберемося із ключовими поняттями.</p>
                        <p class="desc" style="display: none;">Машинне та Глибоке Навчання – ці терміни часто зустрічаються у технічних матеріалах та ЗМІ. Але, на жаль, їх часто плутають, а то й зовсім не розуміють різниці. Насправді це не синоніми: йдеться про окремі самостійні розділи сфери ІІ, що відрізняються між собою як призначенням, так і суттю.</p>
						<button type="button" class="btn btn-warning" @click="showFoolForm('learning')">Читати далі</button>
					</div>
				</div>
                 
                
                <div class="card" v-for="el in downloadedArray" :key="el.id" :id="el.id">
				    <img :src="el.foto" class="card-img-top">
				    <div class="card-body">
                        <h5 class="card-title">{{ el.title }}</h5>
					    <p class="card-text">{{ el.intro }}</p>
                        <p class="desc" style="display: none;">{{ el.desc }}</p>
					    <button type="button" class="btn btn-warning" @click="showFoolForm(el.id)">Читати далі</button>
				    </div>
			    </div>
                    
                             
            </div>
            
        </div>

        <div class="anons">
            <p class="article-header">Анонси</p>
            <div class="anons1">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repellendus est, explicabo dignissimos repellat dicta harum exercitationem eligendi! Laboriosam, expedita.
			</div>
            <div class="card" id="lorem">
				<img src="img/preview.png" class="card-img-top">
				<div class="card-body">
                    <h5 class="card-title" style="display: none;">Lorem ipsum dolor sit amet.</h5>
					<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam repellendus est, explicabo dignissimos repellat dicta harum exercitationem eligendi! Laboriosam, expedita.</p>
                    <p class="desc" style="display: none;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque inventore culpa quos molestias provident, id fugit veritatis facere quibusdam itaque animi beatae quam dolore hic dignissimos a debitis exercitationem ullam molestiae repellendus non cumque? Asperiores, voluptatem modi quos id veritatis et cupiditate dolores eius nihil ullam dolore iste. Pariatur?</p>
					<button type="button" class="btn btn-light" @click="showFoolForm('lorem')">Читати далі</button>
				</div>
			</div>
        </div>
        
    </section>
    <div class="download-btn-wrapper">
        <button type="button" v-if="hasMoreArticles" @click="downloadArticle()" class="btn btn-danger download-btn">Завантажити ще</button>
    </div>
    <Transition name="fade">
        <div v-if="foolform" class="foolform" id="foolform">
        <div class="card">
			<img src="" class="card-img-top">
			<div class="card-body">
				<h5 class="card-title"></h5>
				<p class="card-text"></p>
                <p class="desc"></p>
				<button type="button" class="btn btn-danger" @click="foolform = false">Закрити</button>
			</div>
		</div>
    </div>
    </Transition>
    <div class="up-btn" @click="scrollTop()">
       <i class="fa-solid fa-arrow-up"></i>
    </div>
</template>

 
 <script>
 
 export default {
    props: ['data'],
    
     data() {
         return {
             articles: this.data,
             loadedCount: 0,
             downloadedArray: [],
             hasMoreArticles: true,
             foolform: false
         }
     },
     methods: {
        downloadArticle(){
            const articlesToDownload = 4;
            const totalArticles = this.articles.length;
            if (this.loadedCount < totalArticles){
                const newArticles = this.articles.slice(this.loadedCount, this.loadedCount + articlesToDownload);
                this.loadedCount += articlesToDownload;
                this.downloadedArray = this.downloadedArray.concat(newArticles);
                this.hasMoreArticles = this.loadedCount < totalArticles;
            } 
        },
        showFoolForm(id){
        let card = document.getElementById(id);
        let imgSrc = card.querySelector('.card-img-top').src;
        let title = card.querySelector('.card-title').innerText;
        let text = card.querySelector('.card-text').innerText;
        let desc = card.querySelector('.desc').innerText;
        this.foolform=true;
        this.$nextTick(() => { // после обновления DOM
        let foolcard = document.getElementById('foolform');
        foolcard.querySelector('.card-img-top').src = imgSrc;
        foolcard.querySelector('.card-title').innerText = title;
        foolcard.querySelector('.card-text').innerText = text;
        foolcard.querySelector('.desc').innerText = desc;
        });
        },
        scrollTop(){
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
       }
    }
     
 }
 </script>
 
 <style lang="scss" scoped>
 
  .news {
    width: 75%;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1300px){
        flex-direction: column-reverse;
        align-items: center;
        width: 100%;
    }

    .article{
        @media(max-width: 1300px) {
            display: flex;
        }    
        .article-header{
            font-size: 1.2em;
            font-weight: 500;
            @media(max-width: 1300px){display: none;}
          
          
        }
        .news-block{    
                display: flex;  
                flex-wrap: wrap;
                @media(max-width: 1300px) {justify-content: center;}  
            .card{
               width: 300px;
               margin-right: 15px;
               margin-bottom: 10px;
            }
            
        }
        
    }

    .anons{
        
        .article-header{
            font-size: 1.2em;
            font-weight: 500;
        }
        .anons1{
            background: #fff;
            padding: 5px 10px;
            border-radius: 3px;
            width: 300px;
        }
        .card{
            background: rgb(168, 168, 235);
            margin: 10px auto;
            color: #fff;
            width: 300px;
                .card-img-top{
                    width: 90%;
                    border: 4px solid #fff;
                    margin: 10px auto;
                }
        }
    }
  }
  .download-btn-wrapper {
     text-align: center; 
     margin-top: 10px; 

      .download-btn {
         display: inline-block;
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
   .up-btn{
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    line-height: 50px;
    background: transparent;
    border: 1px solid #3b3b3b;
    cursor: pointer;
    color: #3b3b3b;
    transition: transform 600ms ease;
    position: fixed;
    bottom: 10px;
    left: 20px;
 }
  .up-btn:hover{
    transform: translateY(-10px);
  }
 </style>