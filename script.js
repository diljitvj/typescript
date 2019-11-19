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
var Vendor = /** @class */ (function () {
    function Vendor(name) {
        this.name = name;
    }
    Vendor.prototype.greet = function () {
        return "Hello, welcome to " + this.name;
    };
    return Vendor;
}());
var shop = new Vendor("Ye Olde Shop");
console.log(shop.greet());
var FoodTruck = /** @class */ (function (_super) {
    __extends(FoodTruck, _super);
    function FoodTruck(name, cuisine) {
        var _this = _super.call(this, name) || this;
        _this.cuisine = cuisine;
        return _this;
    }
    FoodTruck.prototype.greet = function () {
        return "Hi, welcome to food truck " + this.name + ". We serve " + this.cuisine + " food.";
    };
    return FoodTruck;
}(Vendor));
var nameOnlyTruck = new FoodTruck("Salome's Adobo", "Spanish");
var truck = new FoodTruck("Dave's Doritos", "junk");
console.log(truck.greet());
