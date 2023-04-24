// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(hqLocation - pickupLocation);
} 
function distanceFromHqInFeet(pickupLocation) {
    const numberOfBlocks = distanceFromHqInBlocks(pickupLocation);
    return numberOfBlocks * 264;
  } 
  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * 264;
  } 
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
    let fare;
  
    if (distanceInFeet <= 400) {
      fare = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      fare = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
      fare = 25;
    } else {
      return 'cannot travel that far';
    }
  
    return fare;
  }

  
  
  
  
  
  
  