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
Array.prototype.remove = function( from, to ) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};
Array.prototype.unique = function() {    
	var o = {}, i, l = this.length, r = [];    
	for(i=0; i<l;i+=1) o[this[i]] = this[i];    
	for(i in o) r.push(o[i]);    
	return r;
};