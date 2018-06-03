class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._ordemAtual = '';
         
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem');
       
        this._mensagem = new Bind(
            new Mensagem(), new MensagemView($('#mensagemView')),
            'texto');
    }
    
    adiciona(event) {
        
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso'; 
        this._limpaFormulario();   
    }

    importaNegociacoes() {
        
        let service = new NegociacaoService();
        //SOLUÇÃO 3
        console.log(this._listaNegociacoes.negociacoes);
        Promise.all([service.obterNegociacoesDaSemana(),
            service.obterNegociacoesDaSemanaAnterior(),
            service.obterNegociacoesDaSemanaRetrasada()])
            .then(negociacoes => {
                negociacoes
                    .reduce((arrayResultado, arrayRetorno) => arrayResultado.concat(arrayRetorno), [])
                    .filter(negociacao => !this._listaNegociacoes.negociacoes.some(
                        negociacaoExistente => {
                            return JSON.stringify(negociacao) == JSON.stringify(negociacaoExistente);
                        }))
                    .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto = 'Negociações importadas com sucesso.';
            })
            .catch(erro => this._mensagem.texto = erro);

        //SOLUÇÃO 2
        /*
        service.obterNegociacoesDaSemana().then(negociacoes => {
            negociacoes.forEach(negociacao => 
                        this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso.';
        }).catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaAnterior().then(negociacoes => {
            negociacoes.forEach(negociacao => 
                        this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso.';
        }).catch(erro => this._mensagem.texto = erro);

        service.obterNegociacoesDaSemanaRetrasada().then(negociacoes => {
            negociacoes.forEach(negociacao => 
                        this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso.';
        }).catch(erro => this._mensagem.texto = erro);
        */
        //SOLUÇÃO 1
        //Isso aqui é para lembrar do padrão error first dos call backs.
        /*
        service.obterNegociacoesDaSemana((err, negociacoes) => {
            if (err) {
                this._mensagem.texto = err;
                return;
            }
            negociacoes.forEach(negociacao => 
                        this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso.';
        });
        */
    }
    
    apaga() {
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
    }
    
    _criaNegociacao() {
        
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();   
    }

    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

}