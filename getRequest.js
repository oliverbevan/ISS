const axios = require('axios');
var lat;
var lon;
const publicIp = require('public-ip');

//let result = publicIp.v4()

(async () => {
    console.log(await publicIp.v4());
    //=> '46.5.21.123'

    //console.log(await publicIp.v6());
    //=> 'fe80::200:f8ff:fe21:67cf'

    result = await publicIp.v4()

    console.log(result);

    axios.get("http://api.ipstack.com/"+result+"?access_key=ad7acb0e407be99c7d2bae0da19ca7fc")
      .then(response => {
        //console.log(response);
        console.log(response.data);
        let lat = response.data.latitude
        let lon = response.data.longitude







        axios.get('http://api.open-notify.org/iss-pass.json?lat='+lat+'&lon='+lon)
          .then(response => {
            //console.log(response);
            console.log(response.data);

          })
          .catch(error => {
            console.log(error);
          });







        console.log("lat 1st"+lat);
        console.log("lon 1st"+lon);

      })
      .catch(error => {
        console.log(error);
      });

console.log("lat 2nd"+lat);
console.log("lat 2nd"+lon);







})();



/*

axios.get("http://api.ipstack.com/"+result+"?access_key=ad7acb0e407be99c7d2bae0da19ca7fc")
  .then(response => {
    //console.log(response);
    console.log(response.data);

  })
  .catch(error => {
    console.log(error);
  });

axios.get('http://api.open-notify.org/iss-pass.json?lat=53.0&lon=-0.2')
  .then(response => {
    //console.log(response);
    //console.log(response.data);

  })
  .catch(error => {
    console.log(error);
  });
*/
