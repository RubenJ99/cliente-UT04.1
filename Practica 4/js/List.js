"use strict";

function List(capacity,stg = []) {
  if (!(this instanceof List)) throw new InvalidAccessConstructorException();
  if(!capacity) throw new EmptyValueException('capacity');
  this.capacity = capacity;
  let _storage = stg;
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
    let str = " ";
    _storage.forEach((elem)=>{
      if(typeof(elem) === 'object'){
        str += JSON.stringify(elem) + '-';
      }else{
        str += elem + '-';
      }
    });
    return str.trimStart();
  }
  this.indexOf = function (elem) {
    if(!elem) throw new InvalidValueException("index","undefined");
    return _storage.indexOf(elem);
  }

  this.lastIndexOf = function (elem) {
    if(!elem) throw new InvalidValueException("index","undefined");
    return _storage.lastIndexOf(elem);
  }

  this.capacity = function () {
    return this.capacity;
  }

  this.clear = function (){
    _storage.length = 0;
  }

  this.firstElement = function () {
    return _storage.find((elem)=>{
      return elem != undefined;
    });
  }

  this.lastElement = function () {
    let _stgCopy = [..._storage];
    return _stgCopy.reverse().find((elem) => {
      return elem != undefined;
    })
  }

  this.remove = function (index) {
    if(index < 0 || index > this.capacity) throw new InvalidValueException("index","Out of bounds");
    let data = _storage[index];
    if(!data) throw new InvalidValueException("index","No records for this position");
    _storage.splice(index,1);
    return data;
  }

  this.removeElement = function (elem) {
    if(!elem) throw new EmptyValueException("Element can not be empty");
    return _storage.find((e) => {
      return e === elem;
    });
  }

  this.set = function(elem,index){
    if(!elem) throw new EmptyValueException("Element can not be empty");
    if(!index) throw new EmptyValueException("Index can not be empty");
    if(index < 0 || index > this.capacity) throw new InvalidValueException("index","Out of bounds");
    let prev = _storage[index];
    if(!prev) throw new InvalidValueException("index","No records for this position");
    _storage[index] = elem;
    return prev;
  }
}

List.prototype.constructor = List;
