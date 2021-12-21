"use strict";

function List(capacity) {
  if (!this instanceof List) throw new InvalidAccessConstructorException();
  if (capacity <= 0) throw new EmptyValueException("Capacity");
  this.capacity = capacity;
  let _storage = [];
  Object.defineProperty(this,'storage',{
    get: () => {return _storage},
  });

  this.isEmpty = function () {
    return _storage.length === 0;
  }

  this.isFull = function () {
    return _storage.length === this.capacity;
  }

  this.size = function () {
    return _storage.length;
  }

  this.add = function (elem) {
    if(this.isFull()) throw new BaseException("Maximum capacity reached");
    if(elem === undefined) throw new InvalidValueException("index","undefined");
    _storage.push(elem);
    return _storage.length;
  }

  this.addAt = function (elem,index) {
    if(this.isFull()) throw new BaseException("Maximum capacity reached");
    if(index < 0 || index > this.capacity) throw new InvalidValueException("index",index);
    _storage.splice(index,0,elem);
    return _storage.length;
  }

  this.get = function (index) {
    if(index < 0 || index > this.capacity) throw new InvalidValueException(index,index);
    return _storage[index];
  }

  this.toString = function () {
    let str;
    _storage.forEach((elem)=>{
      if(typeof(elem) === 'object'){
        str += JSON.stringify(elem) + '-';
      }
      str += elem + '-';
    });
    return str;
  }
  this.indexOf = function (elem) {
    if(elem === undefined) throw new InvalidValueException("index","undefined");
    return _storage.indexOf(elem);
  }

  this.lastIndexOf = function (elem) {
    if(elem === undefined) throw new InvalidValueException("index","undefined");
    return _storage.lastIndexOf(elem);
  }

}


let listita = new List(5);

listita.add(1)
console.log(listita.storage);
console.log(listita.indexOf(book))
