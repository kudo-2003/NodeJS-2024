const url = require('url');

const params = new url.URLSearchParams('name=Copilot&occupation=AI+Assistant');
params.append('version', '1.0');
console.log(params.get('name'));
params.set('occupation', 'AI Developer');
params.delete('version');
for(let [key, value] of params){
    console.log(`${key}: ${value}`);
};
console.log(params.toString());