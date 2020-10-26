angular
.module("listaTelefonica")
.service("operadorasAPI", operadorasAPI );
		var vm = this;

	function operadorasAPI ($http, config) {
	
		vm.getOperadoras = getOperadoras;

	function getOperadoras () {
		return $http.get(config.baseUrl + "/operadoras");
	};
		return { 
		getOperadoras: getOperadoras
	}
}
