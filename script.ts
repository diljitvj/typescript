class Vendor {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    greet() {
      return "Hello, welcome to " + this.name;
    }
  }
  
  const shop = new Vendor("Ye Olde Shop");
  console.log(shop.greet());
  
  
  class FoodTruck extends Vendor {
    cuisine: string;
  
    constructor(name: string, cuisine: string) {
      super(name);
      this.cuisine = cuisine;
    }
  
    greet() {
      return "Hi, welcome to food truck " + this.name + ". We serve " + this.cuisine + " food.";
    }
  }
  const nameOnlyTruck = new FoodTruck("Salome's Adobo", "Spanish");
  
  const truck = new FoodTruck("Dave's Doritos", "junk");
  console.log(truck.greet());