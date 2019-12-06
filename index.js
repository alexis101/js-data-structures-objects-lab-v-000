// Write your solution in this file!
<<<<<<< HEAD
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign(driver, { [key]: value});
}

function deleteFromDriverByKey(driver, key){
 var copy = Object.assign({},driver);
 delete copy[key];
 return copy;
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
=======
const obj = {driver: "Sam"};

function updateDriverWithKeyAndValue(driver, key, value){
  return const newobj = Object.assign(drvier,{ [key]: value });
>>>>>>> ef31b92e155d5a959979e5ae2c52b39e63ea0a7a
}
