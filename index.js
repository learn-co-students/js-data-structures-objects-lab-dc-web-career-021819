// Write your solution in this file!
const driver = {name: 'Sam'}

function updateDriverWithKeyAndValue(driver, key, value) {
  newObject = {...driver, [key]: value}
  return newObject
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newObject = {...driver}
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
