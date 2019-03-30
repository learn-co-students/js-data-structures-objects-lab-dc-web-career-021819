// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}
  newDriver[key] = value;

  return newDriver;
}

// function nondestructivelyUpdateObject(obj, key, value) {
//   const newObj = { ...obj };
//
//   newObj[key] = value;
//
//   return newObj;
// }
//
// const sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, 'fries', 'Shoestring');
//
// tuesdayMenu.fries;

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}
