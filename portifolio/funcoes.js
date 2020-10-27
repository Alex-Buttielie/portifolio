   function mudaFoto(foto) {

       document.getElementById("icone").src = foto;
   }

   function aumenta(obj) {
       obj.height = obj.height * 2;
       obj.width = obj.width * 2;
   }

   function diminui(obj) {
       obj.height = obj.height / 2;
       obj.width = obj.width / 2;
   }