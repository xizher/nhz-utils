'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class ArrayExtension {
    static _instance;
    _target;
    get $() {
        return this._target;
    }
    get last() {
        return this._target[this._target.length - 1];
    }
    constructor(target) {
        if (ArrayExtension._instance) {
            ArrayExtension._instance._target = target;
            return ArrayExtension._instance;
        }
        this._target = target;
        ArrayExtension._instance = this;
        return this;
    }
    insert(index, value) {
        this._target.splice(index, 0, value);
        return this;
    }
    removeIndex(index, returnRemoveItem) {
        const value = this._target[index];
        this._target.splice(index, 1);
        if (returnRemoveItem) {
            return value;
        }
        return this;
    }
    clear() {
        this._target.splice(0, this._target.length);
        return this;
    }
    reset(...items) {
        this._target.splice(0, this._target.length, ...items);
        return this;
    }
    removeValue(value, removeMany = false) {
        if (removeMany) {
            for (let i = 0; i < this._target.length; i++) {
                if (this._target[i] === value) {
                    this._target.splice(i--, 1);
                }
            }
        }
        else {
            for (let i = 0; i < this._target.length; i++) {
                if (this._target[i] === value) {
                    this._target.splice(i--, 1);
                    break;
                }
            }
        }
        return this;
    }
    unique() {
        this.reset(...new Set(this._target));
        return this;
    }
    getUnique() {
        return [...new Set(this._target)];
    }
    equal(anotherArr) {
        if (this._target.length !== anotherArr.length) {
            return false;
        }
        for (let i = 0; i < this._target.length; i++) {
            // eslint-disable-next-line
            // @ts-ignore
            if (this._target[i] !== anotherArr[i]) {
                return false;
            }
        }
        return true;
    }
    findItem(propName, propValue) {
        for (let i = 0; i < this._target.length; i++) {
            const item = this._target[i];
            if (item[propName] === propValue) {
                return item;
            }
        }
        return undefined;
    }
    findItems(propName, propValue) {
        const result = [];
        for (let i = 0; i < this._target.length; i++) {
            const item = this._target[i];
            if (item[propName] === propValue) {
                result.push(item);
            }
        }
        return result;
    }
    propToArr(prop) {
        return this._target.map(item => item[prop]);
    }
}
function arr(target) {
    return new ArrayExtension(target);
}

exports.arr = arr;
