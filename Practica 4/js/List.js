"use strict";
/**
 * Clase padre principal, de esta heredara la clase ObjectList.
 * Esta Clase admite cualquier tipo de valor dentro de si, sin restricciones de tipo y de forma no ordenada
 * @param {*} capacity Maximo de valores a la lista
 * @param {*} stg Array en el que se basa el almacenamiento de la lista, no es necesario insertarlo al instanciar la clase,
 * existe para poder relizar correctamente la herencia del campo privado _storage
 */
function List(capacity,stg = []) {
  if (!(this instanceof List)) throw new InvalidAccessConstructorException();
  if(!capacity) throw new EmptyValueException('capacity');
  this.capacity = capacity;
  let _storage = stg;
  Object.defineProperty(this,'storage',{
    get: () => {return _storage},
  });
  /**
   * Comprueba si la longitud del array es 0 en cuyo caso esta vacio
   * @returns Boolean
   */
  this.isEmpty = function () {
    return _storage.length === 0;
  }
  /**
   * Comprueba si la longitud del array es igual al maximo, en cuyo caso esta lleno
   * @returns Boolean
   */
  this.isFull = function () {
    return _storage.length === this.capacity;
  }
  /**
   * Retorna el tamaño del array simplemente
   * @returns Number
   */
  this.size = function () {
    return _storage.length;
  }
  /**
   * En la funcion añadir lo que hacemos previamente es comprobar que no este ya la lista llena y que se nos ha pasado un elemento,
   * luego como no nos importa el tipo lo que hacemos es insertarlo, retornamos la nueva length
   * @param {*} elem Nuevo elemento a insertar en la lista
   * @returns Number
   */
  this.add = function (elem) {
    if(this.isFull()) throw new BaseException("Maximum capacity reached");
    if(elem === undefined) throw new EmptyValueException('elem');
    _storage.push(elem);
    return _storage.length;
  }
  /**
   * En esta funcion despues de comprobar que el elemento no esta vacio y que la posicion pasada es correcta, no esta fuera de limites
   * realizamos un splice para insertar en esa posicion
   * @param {*} elem Nuevo elemento a insertar
   * @param {*} index Posicion en la que insertar
   * @returns Number
   */
  this.addAt = function (elem,index) {
    if(this.isFull()) throw new BaseException("Maximum capacity reached");
    if(index < 0 || index > this.capacity) throw new InvalidValueException("index",'Index out of Bounds');
    _storage.splice(index,0,elem);
    return _storage.length;
  }
  /**
   * Comprobamos que la posicion no este fuera de rango y que tengamos un valor en esa posicion que extraer
   * @param {*} index Posicion de la cual extraemos el elemento o valor requerido
   * @returns Any
   */
  this.get = function (index) {
    if(index < 0 || index > this.capacity) throw new InvalidValueException('index','Index out of Bounds');
    let dat = _storage[index];
    if(!dat) throw new InvalidValueException('index','No records for this Index value');
    return dat;
  }
  /**
   * Recorremos la lista entera, y dependiendo de si es un objeto o no tratamos los datos de una manera u otra para
   * poder visualizarlo en modo string
   * @returns String
   */
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
