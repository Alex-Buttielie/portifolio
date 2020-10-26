angular
.module("listaTelefonica")
.factory('contatosAPI', contatosAPI) ;
var vm = this;
	function contatosAPI ($http, config){

			vm._getContatos = _getContatos;
			vm._saveContato = _saveContato;
	
	function _getContatos () {
		return $http.get(config.baseUrl + "/contatos")
		
	};

	function _saveContato (contato) {
		return $http.post(config.baseUrl + "/contatos", contato);
	};
		return {
			getContatos: _getContatos,
			saveContato: _saveContato
	};
}