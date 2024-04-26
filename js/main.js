const url = "https://api.wit.ai/message?v=20140826&q=";

const options = {
  headers: {
    Authorization: "Bearer 6Q************"
  }
};

fetch(url, options)
  .then( res => res.json() )
  .then( data => console.log(data) );