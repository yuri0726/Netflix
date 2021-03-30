var imgNumPrev = 0;

function changeBg() {
   var imgNum = Math.floor(Math.random() * 10);

   // if (imgNum == imgNumPrev) {
   //    imgNum = Math.floor(Math.random() * 10);
   //    if (imgNum == imgNumPrev) {
   //       imgNum = Math.floor(Math.random() * 10);
   //    }
   // }

   while ( true ) {
      imgNum = Math.floor(Math.random() * 10);

      if ( imgNum != imgNumPrev )
      break;
   }

   document.getElementById('hero_bg').style = "background-image: url(img/poster_" + imgNum + ".jpg);";

   document.getElementById('hero_bg').classList.remove('effect_fade_in');
   void document.getElementById('hero_bg').offsetWidth; // 초기화 시켜줌
   document.getElementById('hero_bg').classList.add('effect_fade_in');
   
   imgNumPrev = imgNum;

};

var changeHero = setInterval(changeBg, 5000);