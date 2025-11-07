<script>
      function Selector(el){
         return document.querySelector(el);
      }

      let count = 0;

      Selector('.next').addEventListener('click', function () {
         if (count < 3) {
            count++;
            Selector('.container').style.transform = `translateX(-${count * 100}vw)`;
         }
      })
      
      Selector('.pre').addEventListener('click', function () {
         if (count > 0) {
            count--;
            Selector('.container').style.transform = `translateX(-${count * 100}vw)`;
         }