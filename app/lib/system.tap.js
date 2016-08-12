/*
This script will set the hooks into the JS Loader pipeline to see when they are
called.
 */

var normalize = System.normalize;

System.normalize = function (name, parentName, parentAddress) {
  console.log('normalize:', JSON.stringify({
    name: name,
    parentName: parentName,
    parentAddress: parentAddress
  }));
  return normalize.call(this, name, parentName, parentAddress);
};

var locate = System.locate;
System.locate = function (load) {
  console.log('locate:', JSON.stringify(load));
  return locate.call(this, load);
};

var fetch = System.fetch;
System.fetch = function (load) {
  console.log('fetch:', JSON.stringify(load));
  return fetch.call(this, load);
};

var instantiate = System.instantiate;
System.instantiate = function (load) {
  console.log('instantiate:', JSON.stringify(load));
  return instantiate.call(this, load);
};

