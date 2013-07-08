Array.prototype.sortAscByProp = function( p ){
  return this.sort(function(a,b){
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
};
Array.prototype.sortDescByProp = function( p ){
  return this.sort(function(a,b){
    return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
  });
};
Array.prototype.pushUnique = function ( obj, equalityFunction ) {
  equalityFunction  = (typeof equalityFunction === "undefined") ? function(a, b) { return a === b; } : equalityFunction;
  for(var n = 0; n < this.length; n++) {
    if(equalityFunction(this[n], obj)) { // contains
      return false;
    }
  }
  this.push(obj);
  return true;
};