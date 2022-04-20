const carMarket = require("./carMarket");

//?--------------------------------------------------------------------
/*TODO: Add another parameter to each method, the parameter
should be the thing we are working on (like carMarket)*/

//! agency's func's
//todo getters

//!--------------------------------------------------------------------

//* getAgencyByName
//? @param {string} - name
//? @return {Object} - agency object

carMarket.getAgencyByName = function (sellers, name) {
    for (const agency of sellers) {
        if (agency.agencyName === name) {
            return agency;
        }
    }
    return "This agency name is not found in this market.";
};

carMarket.getAgencyByName2 = function (sellers, name) {
    return sellers.filter((seller) => seller.agencyName === name);
};

// console.log(carMarket.getAgencyByName(carMarket.sellers, "Best Deal"));
// console.log(carMarket.getAgencyByName(carMarket.sellers, "Best"));
// console.log(carMarket.getAgencyByName(carMarket.sellers, "CarMax"));

// console.log(carMarket.getAgencyByName2(carMarket.sellers, "CarMax"));

//!--------------------------------------------------------------------

//* getAgencyIdByName
//? @param {String} - name
//? @return {String} - agencyId

carMarket.getAgencyIdByName = function (sellers, name) {
    const agencyId = carMarket.getAgencyByName(sellers, name).agencyId;
    if (agencyId === undefined) {
        return "This agency doesn't exist";
    }
    return agencyId;
};

console.log(carMarket.getAgencyIdByName(carMarket.sellers, "Best Deal"));
console.log(carMarket.getAgencyIdByName(carMarket.sellers, "Best"));
console.log(carMarket.getAgencyIdByName(carMarket.sellers, "CarMax"));

//!--------------------------------------------------------------------

//* getAllAgenciesName
//? @param {}
//? @return {string[]} - agenciesNameArr - Array of all agencies name

carMarket.getAllAgenciesName = function () {
    const agenciesNameArr = [];
    for (const agency of carMarket.sellers) {
        agenciesNameArr.push(agency.agencyName);
    }
    return agenciesNameArr;
};

// console.log(carMarket.getAllAgenciesName());

//!--------------------------------------------------------------------

//* getAllCarToBuy
//? @param {}
//? @return {object[]} - allCarsToBuy - arrays of all cars objects

carMarket.getAllCarToBuy = function () {
    const allCarsToBuy = [];
    for (const agency of carMarket.sellers) {
        for (const car of agency.cars) {
            allCarsToBuy.push(car);
        }
    }
    return allCarsToBuy;
};

// console.log(carMarket.getAllCarToBuy());

//!--------------------------------------------------------------------

//* getAllCarToBuyByAgencyId
//? @param {string} - id of agency
//? @return {object[]} - carsArray - arrays of all models objects of specific agency

carMarket.getAllCarToBuyByAgencyId = function (agencyId) {
    const carsArray = [];
    let agency;
    for (const seller of carMarket.sellers) {
        if (seller.agencyId === agencyId) {
            agency = seller;
        }
    }
    for (const car of agency.cars) {
        for (const model of car.models) {
            carsArray.push(model);
        }
    }
    console.log(carsArray.length);
    return carsArray;
};

// console.log(carMarket.getAllCarToBuyByAgencyId("Plyq5M5AZ"));

//!--------------------------------------------------------------------

//* getAllBrandsToBuyAgencyId
//? @param {string} - agencyId -  id of agency
// ? @return {string[]} - arrOfBrands - arrays of all brands name in specific agency

carMarket.getAllBrandsToBuyAgencyId = function (agencyId) {
    const arrOfBrands = [];
    let agency;
    for (const seller of carMarket.sellers) {
        if (seller.agencyId === agencyId) {
            agency = seller;
        }
    }
    for (const car of agency.cars) {
        arrOfBrands.push(car.brand);
    }
    return arrOfBrands;
};

// console.log(carMarket.getAllBrandsToBuyAgencyId("Plyq5M5AZ"));

//!--------------------------------------------------------------------

//! customer func's
//todo getters

//!--------------------------------------------------------------------

//* getCustomerByName
//? @param {string} - name
//? @return {Object} - customer

carMarket.getCustomerByName = function (name) {
    for (const customer of carMarket.customers) {
        if (customer.name === name) {
            return customer;
        }
    }
    return "This customer is not found.";
};

// console.log(carMarket.getCustomerByName("Lilah Goulding"));
// console.log(carMarket.getCustomerByName("Lilah Goulb"));

//!--------------------------------------------------------------------

//* getCustomerIdByName
//? @param {name}
//? @return {String} - customerId - The customer id

carMarket.getCustomerIdByName = function (name) {
    const customerId = carMarket.getCustomerByName(name).id;
    if (customerId === undefined) {
        return "This customer doesn't exist";
    }
    return customerId;
};

// console.log(carMarket.getCustomerIdByName("Lilah Goulding"));
// console.log(carMarket.getCustomerIdByName("Lilah Goulb"));

//!--------------------------------------------------------------------

//* getAllCustomersNames
//? @param {}
//? @return {string[]} - customersNameArr -  Array of all customers name

carMarket.getAllCustomersNames = function () {
    const customersNameArr = [];
    for (const customer of carMarket.customers) {
        customersNameArr.push(customer.name);
    }
    return customersNameArr;
};

// console.log(carMarket.getAllCustomersNames());

//!--------------------------------------------------------------------

//* getAllCustomerCars
//? @param {id} - costumerId - costumer id
//? @return {object[]} - customerCarsArr -  Array of all customer cars object

carMarket.getAllCustomerCars = function (costumerId) {
    let costumer;
    for (const person of carMarket.customers) {
        if (person.id === costumerId) {
            costumer = person;
        }
    }
    if (costumer === undefined) {
        return "This customer doesn't exist";
    }
    return costumer.cars;
};

// console.log(carMarket.getAllCustomerCars("cnTobUDy6"));
// console.log(carMarket.getAllCustomerCars("cnTobUD"));

//!--------------------------------------------------------------------

//* getCustomerCash
//? @param {id} - costumerId - costumer id
//? @return {number} - CustomerCash

carMarket.getCustomerCash = function (costumerId) {
    let costumer;
    for (const person of carMarket.customers) {
        if (person.id === costumerId) {
            costumer = person;
        }
    }
    if (costumer === undefined) {
        return "This customer doesn't exist";
    }
    return costumer.cash;
};

// console.log(carMarket.getCustomerCash("cnTobUDy6"));
// console.log(carMarket.getCustomerCash("cnTobUD"));

//!------------------------------------------------------------
//*  1) setPropertyBrandToAllCars
//? set all cars model object the current brand
//? @param {}
//? @return {}

carMarket.getBrandByCarName = function (carName) {
    for (const seller of carMarket.sellers) {
        for (const car of seller.cars) {
            for (const model of car.models) {
                if (model.name === carName) {
                    return car.brand;
                }
            }
        }
    }
    return null;
};

carMarket.setPropertyBrandToAllCars = function () {
    for (const seller of carMarket.sellers) {
        for (const car of seller.cars) {
            const brand = car.brand;
            for (const model of car.models) {
                model["brand"] = brand;
            }
        }
    }
    for (const customer of carMarket.customers) {
        for (const car of customer.cars) {
            car["brand"] = carMarket.getBrandByCarName(car.name);
        }
    }
    // console.log(carMarket.sellers[0].cars[1].models);
    // console.log(carMarket.customers[0].cars[0]);
};

carMarket.setPropertyBrandToAllCars();

//todo Agency setters

//!------------------------------------------------------------

//* setNewCarToAgency
//? @param {string} - id of agency
//? @param {object} - carObject
//? @return {}

carMarket.setNewCarToAgency = function (agencyId, carObject) {
    const currAgency = carMarket.sellers.find(
        (seller) => seller.agencyId === agencyId
    );
    if (!currAgency) {
        return "This agency is not found in this market.";
    }
    currAgency.cars.push(carObject);
};

carMarket.setNewCarToAgency("Plyq5M5AZ", { brand: "toledano", models: [] });
// console.log(carMarket.sellers[0].cars);

//!------------------------------------------------------------

//* deleteCarFromAgency
//? @param {string} - id of agency
//? @param {string} -  Car id
// ? @return {}
// Assumption: Car id is carNumber, so one car model will be deleted.

carMarket.deleteCarFromAgency = function (agencyId, carId) {
    const agency = carMarket.sellers.find(
        (seller) => seller.agencyId === agencyId
    );

    if (!agency) return null;

    for (const car of agency.cars) {
        let modelIdx;
        for (const model of car.models) {
            if (carId === model.carNumber) {
                modelIdx = car.models.indexOf(model);
            }
        }
        car.models.splice(modelIdx, 1);
    }
};

// carMarket.deleteCarFromAgency("Plyq5M5AZ", "S6DL1");
// console.log(carMarket.sellers[0].cars[0].models);

//!------------------------------------------------------------

//* decrementOrIncrementCashOfAgency
//? @param {string} - agencyId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - agencyCash

carMarket.decrementOrIncrementCashOfAgency = function (agencyId, amount) {
    const agency = carMarket.sellers.find(
        (seller) => seller.agencyId === agencyId
    );

    if (!agency) return null;
    const currAgencyCash = agency.cash + amount;
    if (currAgencyCash < 0) {
        return null;
    }
    agency.cash = currAgencyCash;
    return currAgencyCash;
};
// console.log(carMarket.decrementOrIncrementCashOfAgency("Plyq5M5AZ", 5000));
// console.log(carMarket.decrementOrIncrementCashOfAgency("Plyq5M5AZ", -10000));

//* decrementOrIncrementCreditOfAgency
//? @param {string} - agencyId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - agencyCash

carMarket.decrementOrIncrementCreditOfAgency = function (agencyId, amount) {
    const agency = carMarket.sellers.find(
        (seller) => seller.agencyId === agencyId
    );

    if (!agency) return null;

    const currAgencyCredit = agency.credit + amount;
    if (currAgencyCredit < 0) {
        return null;
    }
    agency.credit = currAgencyCredit;
    return currAgencyCredit;
};

// console.log(carMarket.decrementOrIncrementCreditOfAgency("Plyq5M5AZ", 5000));
// console.log(carMarket.decrementOrIncrementCreditOfAgency("Plyq5M5AZ", -10000));
// console.log(carMarket.decrementOrIncrementCreditOfAgency("Plyq5M5AZ", -200000));

//* setAmountOfCarsToBuyToAllAgency's
//? set a new property amountOfCars to all agency's, that represent the amount of cars available in the agency.
//? @param {}
// ? @return {objects[]} - sellers - array of all agency's

carMarket.setAmountOfCarsToBuyToAllAgency = function () {
    for (const seller of carMarket.sellers) {
        let carCount = 0;
        for (const car of seller.cars) {
            for (const model of car.models) {
                carCount++;
            }
        }
        seller["amountOfCars"] = carCount;
    }
    return carMarket.sellers;
};

// console.log(carMarket.setAmountOfCarsToBuyToAllAgency());

//todo setters

//* setCarToCostumer
//? @param {string} - costumerId
//? @param {object} - carObject
//? @return {object[]} - allCarsOfCostumer

carMarket.setCarToCustomer = function (customerId, carObject) {
    const customer = carMarket.customers.find(
        (person) => person.id === customerId
    );

    if (!customer) return null;
    customer.cars.push(carObject);
    return customer.cars;
};

// console.log(
//     carMarket.setCarToCustomer("BGzHhjnE8", {
//         name: "picanto",
//         year: 2020,
//         price: 80000,
//         carNumber: "111111",
//         ownerId: "BGzHhjnE8",
//     })
// );

//* deleteCarOfCostumer
//? @param {string} - costumerId
//? @param {string} - carId
//? @return {object[]} - allCarsOfCostumer

carMarket.deleteCarOfCostumer = function (customerId, carId) {
    const customer = carMarket.customers.find(
        (person) => person.id === customerId
    );

    if (!customer) return null;

    const carToDelete = customer.cars.find((car) => car.carNumber === carId);

    if (!carToDelete) return null;

    const carIdx = customer.cars.indexOf(carToDelete);
    customer.cars.splice(carIdx, 1);
    return customer.cars;
};

// console.log(carMarket.deleteCarOfCostumer("2RprZ1dbL", "WIh0U"));

//* decrementOrIncrementCashOfCostumer
//? @param {string} - costumerId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - costumerCash

carMarket.decrementOrIncrementCashOfCustomer = function (customerId, amount) {
    const customer = carMarket.customers.find(
        (person) => person.id === customerId
    );

    if (!customer) return null;

    const currCustomerCash = customer.cash + amount;
    if (currCustomerCash < 0) {
        return null;
    }
    customer.cash = currCustomerCash;
    return currCustomerCash;
};
// console.log(carMarket.decrementOrIncrementCashOfCustomer("2RprZ1dbL", 1000));
// console.log(carMarket.decrementOrIncrementCashOfCustomer("2RprZ1dbL", -2000));

//! -------------------------------------------------------
//* 2) sortAndFilterByYearOfProduction
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by year of production.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year
//?   @param {number} - toYear - Will display vehicles up to this year
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//?   @return {object[]} - arrayOfModels - array of sorted cars

// Assumption: the value of fromYear (including) and toYear (excluding).

carMarket.sortAndFilterByYearOfProduction = function (
    arrOfCars,
    fromYear,
    toYear,
    isAscendingOrder
) {
    const filteredArr = arrOfCars.filter(
        (car) => car.year >= fromYear && car.year <= toYear
    );

    filteredArr.sort((car1, car2) =>
        isAscendingOrder ? car1.year - car2.year : car2.year - car1.year
    );

    return filteredArr;
};

// console.log(
//     carMarket.sortAndFilterByYearOfProduction(
//         carMarket.customers[1].cars,
//         2010,
//         2020,
//         true
//     )
// );
// console.log(
//     carMarket.sortAndFilterByYearOfProduction(
//         carMarket.customers[1].cars,
//         2010,
//         2020,
//         false
//     )
// );
// console.log(
//     carMarket.sortAndFilterByYearOfProduction(
//         carMarket.customers[1].cars,
//         2010,
//         2013,
//         false
//     )
// );

//* 3) sortAndFilterByPrice
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by price of the cars.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromPrice - Will display vehicles starting at this price
//?   @param {number} - fromPrice - Will display vehicles up to this price
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//?   @return {object[]} - arrayOfModels - array of sorted cars

// Assumption: the value of fromYear (including) and toYear (excluding).

carMarket.sortAndFilterByPrice = function (
    arrOfCars,
    fromPrice,
    toPrice,
    isAscendingOrder
) {
    const filteredArr = arrOfCars.filter(
        (car) => car.price >= fromPrice && car.price <= toPrice
    );

    filteredArr.sort((car1, car2) =>
        isAscendingOrder ? car1.price - car2.price : car2.price - car1.price
    );

    return filteredArr;
};

// console.log(
//     carMarket.sortAndFilterByPrice(
//         carMarket.customers[1].cars,
//         10,
//         1000000,
//         true
//     )
// );
// console.log(
//     carMarket.sortAndFilterByPrice(
//         carMarket.customers[1].cars,
//         10,
//         1000000,
//         false
//     )
// );
// console.log(
//     carMarket.sortAndFilterByPrice(
//         carMarket.customers[1].cars,
//         570000,
//         600000,
//         false
//     )
// );

//* 4 ) searchCar
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year
//?   @param {number} - toYear - Will display vehicles up to this year
//?   @param {number} - fromPrice - Will display vehicles starting at this price
//?   @param {number} - fromPrice - Will display vehicles up to this price
//?   optional @param {string} - brand - Look only for cars of this brand

carMarket.searchCar = function (
    arrOfCars,
    fromYear,
    toYear,
    fromPrice,
    toPrice,
    brand
) {
    return arrOfCars
        .filter((car) => car.price >= fromPrice && car.price <= toPrice)
        .filter((car) => car.year >= fromYear && car.year <= toYear)
        .filter((car) => (brand ? car.brand === brand : true));
};

// console.log(
//     carMarket.searchCar(carMarket.customers[6].cars, 2020, 2020, 260000, 300000)
// );
// console.log(
//     carMarket.searchCar(carMarket.customers[6].cars, 2019, 2019, 260000, 300000)
// );

//* 5 ) sellCar
//?   Sell ​​a car to a specific customer
//?   @param {string} - agencyId
//?   @param {string} - customerId
//?   @param {string} - carModel
//?   @return {object} - The object of the car purchased by the customer or an explanation message
// *    - 5a. Subtract the vehicle amount + 17% (tax) from the customer's cash.
// *     - 5b. Add the vehicle value to the car agency cash.
// *     - 5c. Change the car owner's id to the customer's id.
// *     - 5d. Remove the car from the array of the agency's car models.
// *     - 5e. Add the car to the client cars array.
// *
// *     Taxes Authority:
// *     - 5f. Pay 17 percent of the vehicle value to the tax authority. (add the amount to totalTaxesPaid)
// *     - 5g. Increase the number of transactions made in one (numberOfTransactions)
// *     - 5h. Add the vehicle amount + tax to sumOfAllTransactions
// !     - Check that there is the requested vehicle at the agency in not return 'The vehicle does not exist at the agency'
// !     - Check that the customer has enough money to purchase the vehicle, if not return 'The customer does not have enough money'

//!      - Try to divide the tasks into several functions and try to maintain a readable language.

const getAgencyById = function (agencyId) {
    const agency = carMarket.sellers.find(
        (agency) => agency.agencyId === agencyId
    );

    if (!agency) return null;
    return agency;
};

const getCustomerById = function (customerId) {
    const customer = carMarket.customers.find(
        (person) => person.id === customerId
    );

    if (!customer) return null;
    return customer;
};

const subtractCarPriceFromCustomerCash = function (customer, price) {
    customer.cash -= 1.17 * price;
    return customer.cash;
};

const checkIfCarIsInAgency = function (agency, carModel) {
    return agency.cars.find((car) => car.models.includes(carModel))
        ? true
        : false;
};

const doesCustomerHasEnoughCash = function (customer, price) {
    return customer.cash - 1.17 * price >= 0;
};

const handleSaleFromAgency = function (agency, carModel) {
    agency.cash += carModel.price;
    carMarket.deleteCarFromAgency(agency.agencyId, carModel.carNumber);
};

const handleSaleToCustomer = function (customer, carModel) {
    subtractCarPriceFromCustomerCash(customer, carModel.price);
    carModel.ownerId = customer.id;
    carMarket.setCarToCustomer(customer.id, carModel);
};

const handleSaleTax = function (carModel) {
    carMarket.taxesAuthority.totalTaxesPaid += 0.17 * carModel.price;
    carMarket.taxesAuthority.numberOfTransactions++;
    carMarket.taxesAuthority.sumOfAllTransactions += 1.17 * carModel.price;
};

carMarket.sellCar = function (agencyId, customerId, carModel) {
    const agency = getAgencyById(agencyId);
    const customer = getCustomerById(customerId);
    if (!checkIfCarIsInAgency(agency, carModel))
        return "The vehicle does not exist at the agency";

    if (!doesCustomerHasEnoughCash(customer, carModel.price))
        return "The customer does not have enough money";

    handleSaleFromAgency(agency, carModel);
    handleSaleToCustomer(customer, carModel);
    handleSaleTax(carModel);
    return carModel;
};

// console.log(
//     carMarket.sellCar(
//         "Plyq5M5AZ",
//         "BGzHhjnE8",
//         carMarket.sellers[0].cars[0].models[0]
//     )
// );
