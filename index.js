var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes;
} 

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, obj)
  delete newObj.foo
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}

