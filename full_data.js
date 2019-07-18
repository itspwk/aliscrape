const rp = require('request-promise');
const cheerio = require('cheerio');

const AliexScrape = (productId) => {
  const data = {};
  return rp(`https://www.aliexpress.com/item/xxx/${productId}.html`)
    .then(response => {
      return(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = AliexScrape;
