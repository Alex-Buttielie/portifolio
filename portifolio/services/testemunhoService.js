angular
    .module("projetoPortifolio")
    .factory("relatosAPI", relatosAPI);

var vm = this;
    function relatosAPI($http, config) {
        

        vm.getRelatos = getRelatos;
        vm.saveRelato = saveRelato;
        vm.excluirRelato = excluirRelato;
        vm.alterarRelado = alterarRelado;

        function getRelatos() {
            return $http.get(config.baseUrl + "/relato/listarTodos")
        };

        function saveRelato(relato) {
            return $http.post(config.baseUrl + "/relato", relato);
        };

        function excluirRelato(relato){
            return $http.delete(config.baseUrl + "/relato/"+ relato.id)
        };

        function alterarRelado(relato){
            return $http.put(config.baseUrl + "/relato/", relato)
        };

        return{
            getRelatos: getRelatos,
            saveRelato: saveRelato,
            excluirRelato: excluirRelato,
            alterarRelado: alterarRelado
        };

    };