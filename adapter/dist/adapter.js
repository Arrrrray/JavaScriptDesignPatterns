/*
 * @Author: junchao
 * @Date: 2020-12-10 16:33:36
 * @LastEditTime: 2020-12-10 16:34:33
 * @LastEditors: junchao
 * @Description:
 * @FilePath: /JavaScriptDesignPatterns/adapter/adapter.ts
 * @可以输入预定的版权声明、个性签名、空行等
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* The Target defines the domain-specific interface used by the client code.
*/
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.request = function () {
        return 'Target: The default target\'s behavior.';
    };
    return Target;
}());
/**
* The Adaptee contains some useful behavior, but its interface is incompatible
* with the existing client code. The Adaptee needs some adaptation before the
* client code can use it.
*/
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return '.eetpadA eht fo roivaheb laicepS';
    };
    return Adaptee;
}());
/**
* The Adapter makes the Adaptee's interface compatible with the Target's
* interface.
*/
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.request = function () {
        var result = this.adaptee.specificRequest().split('').reverse().join('');
        return "Adapter: (TRANSLATED) " + result;
    };
    return Adapter;
}(Target));
/**
* The client code supports all classes that follow the Target interface.
*/
function clientCode(target) {
    console.log(target.request());
}
console.log('Client: I can work just fine with the Target objects:');
var target = new Target();
clientCode(target);
console.log('');
var adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log("Adaptee: " + adaptee.specificRequest());
console.log('');
console.log('Client: But I can work with it via the Adapter:');
var adapter = new Adapter(adaptee);
clientCode(adapter);
