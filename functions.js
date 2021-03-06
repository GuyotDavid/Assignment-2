// FOR EACH //
Array.prototype.myEach = function(callBack) 
{
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === undefined) continue;
    callBack (this[i], i, this);
  }
}

// MAP //
Array.prototype.myMap = function(callback) {
  arr = [];
  for (var i = 0; i < this.length; i++)
    arr.push(callback(this[i], i, this));
  return arr;
};

// FILTER //
Array.prototype.myFilter = function(callback) {
  var filtered = [];
  for(let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filtered.push(this[i]);
  }
  return filtered;
};

// SOME //
Array.prototype.mySome = function(element) 
{
  for (let i = 0 ; i < this.length; i++)
  {
    if (element(this[i]))
      return true;
  }
  return false;
}

// EVERY //
Array.prototype.myEvery = function(element) 
{
  for (let i = 0; i < this.length; i++)
  {
    if (!element(this[i]))
      return false;
  }
  return true;
}

// REDUCE //
Array.prototype.myReduce = function(callback, initialVal) {
  var accumulator = (initialVal === undefined) ? undefined : initialVal;
  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined)
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    else
      accumulator = this[i];
  }
  return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function(element) 
{
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === element)
      return true;
  }
  return false;
}

// INDEXOF //
Array.prototype.myIndexOf = function(element) 
{
  for (let i = 0; i < this.length; i++)
  {
    if (this[i] === element)
      return i;
  }
  return -1;
}

// PUSH //
Array.prototype.myPush = function(...args) 
{
  let arg_i = 0;
  let length = this.length;
  for (let i = length; i < length + args.length; i++)
  {
    this[i] = args[arg_i];
    arg_i++;
  }
  return this.length;
}

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element) 
{
  for (let i = this.length; i > 0; i--)
  {
    if (this[i] === element)
      return i;
  }
  return -1;
}

// KEYS //
Object.grabKeys = function(object) {
  arr = [];
  for (let key in object) {
    arr.push(key);
  }
  return arr;
};

// VALUES //
Object.grabValues = function(object) {
  let arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
};