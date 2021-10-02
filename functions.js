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
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

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
    if (!element(this[i])
        return false;
  }
  return true;
}

// REDUCE //
Array.prototype.myReduce = function() {

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

}

// PUSH //
Array.prototype.myPush = function() 
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
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
