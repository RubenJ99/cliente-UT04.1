'use strict';

function ObjectList(capacity,type,stg = []) {
    if (!(this instanceof ObjectList)) throw new InvalidAccessConstructorException();
    if(!type) throw new EmptyValueException('type');
    let _storage = stg;
    List.call(this,capacity,_storage);
    this.type = type;

    let _addObject = this.add;
    this.add = function (elem) {
        if(!(typeof(elem) === 'object')) throw new InvalidValueException("elem","Invalid type, object required");
        if(!(elem instanceof this.type)) throw new InvalidValueException("elem",`Object is not a ${this.type}`);
        _addObject.call(this,elem);
    }

    let _addAtObject = this.addAt;
    this.addAt = function (elem,index) {
        if(!(typeof(elem) === 'object')) throw new InvalidValueException("elem","Invalid type, object required");
        if(!(elem instanceof this.type)) throw new InvalidValueException("elem",`Object is not a ${this.type}`);
        
        _addAtObject.call(this,elem,index);
    }

    let _indexOfObject = this.indexOf;
    this.indexOf = function (elem) {
        if(!(typeof(elem) === 'object')) throw new InvalidValueException("elem","Invalid type, object required");
        if(!(elem instanceof this.type)) throw new InvalidValueException("elem",`Object is not a ${this.type}`);

        _indexOfObject.call(this,elem);
    }

    let _lastIndexOfObject = this.lastIndexOf;
    this.lastIndexOf = function (elem) {
        if(!(typeof(elem) === 'object')) throw new InvalidValueException("elem","Invalid type, object required");
        if(!(elem instanceof this.type)) throw new InvalidValueException("elem",`Object is not a ${this.type}`);

        _lastIndexOfObject.call(this,elem);
    }

    let _removeElementObject = this.removeElement;
    this.removeElement = function (elem) {
        if(!(typeof(elem) === 'object')) throw new InvalidValueException("elem","Invalid type, object required");
        if(!(elem instanceof this.type)) throw new InvalidValueException("elem",`Object is not a ${this.type}`);

        _removeElementObject.call(this,elem);
    }

    let _setObject = this.set;
    this.set = function (elem,index) {
        if(!(typeof(elem) === 'object')) throw new InvalidValueException("elem","Invalid type, object required");
        if(!(elem instanceof this.type)) throw new InvalidValueException("elem",`Object is not a ${this.type}`);

        _setObject.call(this,elem,index);
    }
}
ObjectList.prototype = Object.create(List.prototype);
ObjectList.prototype.constructor = ObjectList;

