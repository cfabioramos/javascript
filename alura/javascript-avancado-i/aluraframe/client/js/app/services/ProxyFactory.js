class ProxyFactory {

	static create(objeto, props, acao) {

		return new Proxy(objeto, {

            get(target, prop, receiver) {
                if (props.includes(prop) && (typeof(target[prop])) == typeof(Function) ) {
                    /*
                        1. Tem que ser function para ter o this dinâmico.
                        Não pode ser arrow function que possui escopo léxico.
                    */
                    /*
                        2. substitui o método destino (do objeto real) por este (do proxy).
                    */
                    return function(){
                        console.log(`Interceptando ${prop}`);
                        console.log(target);
                        Reflect.apply(target[prop], target, arguments);
                        return acao(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                console.log(`Valor anterior: ${target[prop]}. Novo valor: ${value}`);
                if (props.includes(prop)) {
                    target[prop] = value;
                    acao(target);
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });

	}

}