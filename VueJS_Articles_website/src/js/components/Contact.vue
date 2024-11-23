<template>
    <div class="contacts">
        <div class="contact-wrapper">
            <h1>Contact us</h1>
            
            <div class="contact">
                <div class="icon">
                <i class="fas fa-phone"></i>
                </div>
                <div class="text">
                <h3>Call us</h3>
                <p>(+38) 067-111-11-11<br>(+38) 056-370-00-00</p>
                </div>
            </div>
            <div class="contact">
                <div class="icon">
                <i class="fas fa-envelope"></i>
                </div>
                <div class="text">
                <h3>Mail us</h3>
                <p>info@ourcompany.ua<br>help@ourcompany.ua</p>
                </div>
            </div>
            <div class="contact">
                <div class="icon">
                <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="text">
                <h3>Visit us</h3>
                <p>вул. Бр.Трофімових 4<br/> Дніпро, Україна, 49000</p>
                </div>
            </div>
        </div>
    <div>
      <form>
        <label for="name">Full name</label>
        <input type="text" name="name" placeholder="Sergey Dyakonov">

        <label for="email">Email</label>
        <input type="email" name="email" placeholder="your_email@gmail.com">

        <label for="website">Website (when you have)</label>
        <input type="text" name="website" placeholder="Ваш сайт (якщо є)">

        <label for="email">Message</label>
        <textarea placeholder="Напишіть повідомлення..."></textarea>

        <button type="button">Відправити</button>
      </form>
    </div>
  </div>
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


.contacts {
    margin-top: 10%;
    margin-bottom: 15%;
    color: #bbb;
   
    @media(min-width: 1100px){
    width: 80%;
    padding: 0 10%;
    margin: 30px auto; 
    display: flex;
    justify-content: space-between;
    }
    @media(max-width: 1100px) and (min-width: 300px){
    width: 100%;
    padding: 0 10%;
    margin: 0 auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
    }

  .contact-wrapper{
   

    h1 {
    color: #000;
    position: relative;
    font-size: 2.5em;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 12%;
    @media(min-width: 700px){font-size: 2.5em;}
    @media(max-width: 700px) and (min-width: 300px){font-size: 1.8em;}
  }

    .contact {
    display: flex;
    margin-bottom: 30px;

    .icon {
      width: 55px;
      height: 55px;
      text-align: center;
      line-height: 55px;
      background: #fff;
      color: #626dfc;
      border-radius: 50%;
      margin-right: 5%;

      .fa-phone {
        transform: rotate(90deg);
      }
    }

    h3 {
      color: #000;
      text-transform: uppercase;
      margin-bottom: 1%;
    }
  }
  }

  

  form {
    width: 330px;
    background: #fff;
    padding: 9% 9%;
    float: left;

    label {
      color: #000;
      font-size: 1em;
    }

    input, textarea {
      display: block;
      padding: 2% 5%;
      width: 100%;
      border: 0;
      background: #e7e5e5;
      font-size: 1em;
      margin-top: 2%;
      margin-bottom: 6%;
    }

    textarea {
      resize: none;
      height: 100px;
    }

    button {
      background: #626dfc;
      border: 0;
      width: 45%;
      height: 45px;
      color: #fff;
      text-transform: uppercase;
      font-size: 1em;
      cursor: pointer;
      border-radius: 3px;
      float: right;

      &:hover {background: #333}
    }
  }
}


 </style>