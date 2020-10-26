angular
.module("listaTelefonica")
.controller("listaTelefonicaCtrl", listaTelefonicaCtrl)
	

	function listaTelefonicaCtrl(contatosAPI, operadorasAPI, serialGenerator, $scope){
	
			var vm = this
			vm.contatos = [];
			vm.operadoras = [];

			vm.carregarContatos     = carregarContatos;
			vm.adicionarContato     = adicionarContato;
			vm.apagarContatos       = apagarContatos;
			vm.isContatoSelecionado = isContatoSelecionado;
			vm.ordenarPor    		= ordenarPor;
			vm.carregarOperadoras   = carregarOperadoras;
	 
	function carregarContatos(){
			contatosAPI.getContatos().then(function(response){
			response.data.forEach(function (item) {
			item.serial = serialGenerator.generate();
			console.log(item);
			});
			vm.contatos = response.data;
});
	(function responde (error, data, status){
			vm.responde.error ='não foi possível carregar pos dados';
		});
		
	};
	
	function carregarOperadoras () {
	operadorasAPI.getOperadoras().then(function (data) {
			vm.operadoras = data;
	});
	};

	function adicionarContato  (contato) {

			contatosAPI.saveContato(contato).then(function (data) {
			
			contato.serial = serialGenerator.generate();
			contato.data = new Date();
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	 	
	};
	function apagarContatos (contatos) {
		vm.contatos = vm.contatos.filter(function (contato) {
			if (!contato.selecionado) return contato;
		});
	};
	function  isContatoSelecionado (contatos) {
			return vm.contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	function ordenarPor (campo) {
			vm.criterioDeOrdenacao = campo;
			vm.direcaoDaOrdenacao = !vm.direcaoDaOrdenacao;
	};
			carregarContatos();
			carregarOperadoras();
};