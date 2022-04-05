//um cartao soh
//var retornoCartao = '{"success":true,"ws":{"return":{"cartoes":{"cartaoVO":{"digitoCartao":"1","emissorCartao":"31","formatado":"31.08.01016187-1","numeroCartao":"1016187","saldo":"0.0","tipoCartao":"8"},"control":{"errorCode":"0","success":"true"},"saldo":"2.78","status":"A","tipoCartao":"8"},"control":{"errorCode":"0","success":"true"}}}}';

var retornoCartao = '{"success":true,"ws":{"return":{"cartoes":[{"cartaoVO":{"digitoCartao":"2","emissorCartao":"31","formatado":"31.08.00198096-2","numeroCartao":"198096","saldo":"0.0","tipoCartao":"8"},"control":{"errorCode":"0","success":"true"},"saldo":"7.45","status":"A","tipoCartao":"8"},{"cartaoVO":{"digitoCartao":"1","emissorCartao":"31","formatado":"31.04.03614405-1","numeroCartao":"3614405","saldo":"0.0","tipoCartao":"4"},"control":{"errorCode":"0","success":"true"},"saldo":"0.05","status":"A","tipoCartao":"4"}],"control":{"errorCode":"0","success":"true"}}}}';

console.log('retornoCartao: '+retornoCartao);

retornoCartao = JSON.parse(retornoCartao);

var aplCartoes = retornoCartao.ws.return.cartoes;

console.log("dialog.length: "+aplCartoes.length);


if(aplCartoes.length == 'undefined' || aplCartoes.length == undefined){
    console.log('apenas-um-cartao');
}else if(aplCartoes.length > 0){
    console.log('mais-de-um-cartao');
}