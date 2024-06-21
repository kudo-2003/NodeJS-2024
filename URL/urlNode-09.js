const url = require('url');
const punycodeDomain = 'xn--mnchen-3ya-de';
const unicodeDomain = url.domainToUnicode(punycodeDomain);
console.log(unicodeDomain);
function isInternationalizedDomain(domain){
    return domain !== url.domainToASCII(domain);
};
console.log(isInternationalizedDomain(unicodeDomain));

function createAndParseUrl(domain){
    const completeUrl = new url.URL(`http://${domain}/path?query=example`);
    return {
        href: completeUrl.href,
        protocol: completeUrl.protocol,
        hostname: completeUrl.hostname,
        pathname: completeUrl.pathname,
        searchParams: Array.from(completeUrl.searchParams.entries())
    };
};
console.log(createAndParseUrl(unicodeDomain));
