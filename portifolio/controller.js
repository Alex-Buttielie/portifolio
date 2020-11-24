angular
.module("portifolio")
.controller("portifolioController", portifolioController);

        function projetoCtrl(portifolioController, $scope) {
          
        var vm = this;

        vm.mudaFoto =mudaFoto;
        vm.aumenta  =aumenta;
        vm.diminui  =diminui;

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

    };