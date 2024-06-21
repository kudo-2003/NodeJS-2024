const url = require('url');

class URLParser{
    static canParse(inputUrl){
        try{
            const parsedUrl = new url.URL(inputUrl);
            console.log(`The protocol is: ${parsedUrl.protocol}`);
            console.log(`The hostname is: ${parsedUrl.hostname}`);
            console.log(`The pathname is: ${parsedUrl.pathname}`);
            return true;
        }catch(error){
            console.error('Error parsing URL: ', error.message);
            return false;
        }
    }
}

const urlString = 'http://www.google.com/path/name?query=tring';
if(URLParser.canParse(urlString)){
    console.log('URL was successfully parsed');
}else{
    console.log('URL could not be parsed');
}