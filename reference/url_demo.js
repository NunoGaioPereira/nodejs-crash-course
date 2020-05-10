const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
// Host name
console.log(myUrl.hostname); // doesn't include the port

// Pathname
console.log(myUrl.pathname); // file

// Serialzed qury
console.log(myUrl.search);
// Serach params
console.log(myUrl.searchParams);
// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
