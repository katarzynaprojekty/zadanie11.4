function Phone(brand, price, color, ram, rom, batteryCapacity) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.ram = ram;
    this.rom = rom;
    this.batteryCapacity = batteryCapacity;
};

Phone.prototype.printInfo = function () {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ". ");
};
Phone.prototype.memoryInfo = function () {
	console.log("RAM Size: " + this.ram + " (GB), ROM Size: " + this.rom +  "(GB).");
};
Phone.prototype.batteryInfo = function () {
	console.log("Standard Battery Capacity: " + this.batteryCapacity + "(mAh).");
};

var iPhone6S = new Phone("Apple", 2250, "silver", 2, 16, 1715);
iPhone6S.printInfo();

var onePlusOne = new Phone("OnePlus", 1299, "black", 3, 16, 3100);
onePlusOne.printInfo();

var samsungGalaxyS6 = new Phone("Samsung", 1749, "white", 3, 32, 2550);
samsungGalaxyS6.printInfo();