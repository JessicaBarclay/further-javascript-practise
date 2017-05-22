var exclaim = require('./exclaim').exclaim;

if(exclaim('hi') !== 'hi!!!!!') {
  throw new Error('Exlaiming hi should equal hi!!!!!');
} else {
  console.log('.');
}
