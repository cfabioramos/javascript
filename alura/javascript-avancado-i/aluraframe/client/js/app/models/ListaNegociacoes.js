class ListaNegociacoes{

	constructor(/*callBack*/){
		this._negociacoes = [];
		//this._callBack = callBack;
		//this._contexto = contexto;
	}

	adiciona(negociacao){
		this._negociacoes.push(negociacao);
		//this._callBack(this);
		//Reflect.apply(this._callBack, this._contexto, [this]);
	}

	esvazia() {
		this._negociacoes = [];
		//this._callBack(this);
	}

	get negociacoes(){
		return [].concat(this._negociacoes);
	}

}