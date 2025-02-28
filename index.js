// Write your solution in this file!
let driver = {};
// function updateDriverWithKeyAndValue(driver, key, value) {
//   driver[key] = value;
//   return driver;
// }

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  let objTwo = Object.assign({}, driver);
  delete objTwo[key];
  return objTwo;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
