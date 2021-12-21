'use strict';
function OrderedObjectList(capacity,type,order) {
    if (!(this instanceof OrderedObjectList)) throw new InvalidAccessConstructorException();
    if(!order) throw new EmptyValueException('order');
    let _storage = [];
    ObjectList.call(this,capacity,type,_storage);
    this.order = order;

    let addOrdObjList = this.add;
    this.add = function (elem) {
        addOrdObjList.call(this,elem);
        _storage.sort(this.order);
    }

    let removeOrdObjList = this.remove;
    this.remove = function (index) {
        removeOrdObjList.call(this,index);
        _storage.sort(this.order);
    }

    let removeElementOrdObjList = this.removeElement;
    this.removeElement = function (elem) {
        removeElementOrdObjList.call(this,elem);
        _storage.sort(this.order);
    }

    this.addAt = undefined;
    this.lastIndexOf = undefined;
    this.set = undefined;

}
OrderedObjectList.prototype = Object.create(ObjectList.prototype);
OrderedObjectList.prototype.constructor = OrderedObjectList;
