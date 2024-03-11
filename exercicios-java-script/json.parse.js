let exemploJson = '{"ong":"recode","contatos": [{"nome":"Luana","numero":"55"},{"nome":"Victor","numero":"51"}]}';
let exemploConversao = JSON.parse(exemploJson);
console.log(exemploConversao);
console.log(JSON.stringify(exemploConversao));
console.log(exemploConversao.contatos[0]);