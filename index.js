require("datejs");
function combineUsers(...args) {
  combinedObject = {
    users: [],
  };
  //loop throught the args then merge as it adds thhrought the length
  for (let i = 0; i < args.length; i++) {
    combinedObject.users = [...combinedObject.users, ...args[i]];
  }

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== "undefined" && { combineUsers }),
};
