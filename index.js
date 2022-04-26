let employee = {};
let newEmployee = {};
let deleteEmployee = {};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  newEmployee = Object.assign({}, obj);
  newEmployee[key] = value

  return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;

  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  deleteEmployee = Object.assign({}, obj)
  delete deleteEmployee[key]

  return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];

  return obj;
}