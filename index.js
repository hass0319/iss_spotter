// const { fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');
const { fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIp((error, ip) => {
// if (error) {
//   console.log("It didn't work!" , error);
//   return;
// }
//   console.log('It worked! Returned IP:' , ip);
// });

// const ip = '162.245.144.188';

// fetchCoordsByIp(ip, (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error, coordinates);
//     return;
//   }
//   console.log('It worked! Returned coordinates:' , coordinates);
// });
// fetchCoordsByIp(ip);


// const coords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error, passTimes);
//     return;
//   }
//   console.log('It worked! Returned passTimes:' , passTimes);
// });
// fetchISSFlyOverTimes(coords);

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
module.exports = {printPassTimes};