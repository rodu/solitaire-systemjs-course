System.trace = true;

window.showModuleRelationshipts = function () {
  var modules = Object.keys(System.loads)
    .map(function (moduleName) {
      return System.loads[moduleName];
    });

  function displayName(name) {
    return name.replace('http://127.0.0.1:8080/app/', '');
  }
  var moduleDefinitions = modules.map(function (module) {
    var name = displayName(module.name);
    return '[' + name + ']';
  });

  var dependencyDefinition = [];
  modules.filter(function (module) {
    return module.deps.length;
  })
  .forEach(function (module) {
    var name = displayName(module.name);

    var deps = module.deps
      .map(displayName)
      .map(function (dep) {
        return '[' + name + ']->[' + dep + ']';
      });

    dependencyDefinition = dependencyDefinition.concat(deps);
  });

  var definitions = moduleDefinitions.concat(dependencyDefinition);

  window.open('http://yuml.me/diagram/plain/class/' + definitions);
};
