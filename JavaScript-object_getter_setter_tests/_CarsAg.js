const carMarket = require("./carMarket");

//?--------------------------------------------------------------------

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
    return undefined;
};

carMarket.getAgencyByName2 = function (sellers, name) {
    return sellers.find((seller) => seller.agencyName === name);
};

// console.log(carMarket.getAgencyByName(carMarket.sellers, "Best Deal"));
// console.log(carMarket.getAgencyByName(carMarket.sellers, "Best"));
// console.log(carMarket.getAgencyByName(carMarket.sellers, "CarMax"));

// console.log(carMarket.getAgencyByName2(carMarket.sellers, "CarMax"));
// console.log(carMarket.getAgencyByName2(carMarket.sellers, "c"));

//!--------------------------------------------------------------------

//* getAgencyIdByName
//? @param {String} - name
//? @return {String} - agencyId

carMarket.getAgencyIdByName = function (sellers, name) {
    const agency = carMarket.getAgencyByName(sellers, name);
    return agency ? agency.agencyId : undefined;
};

// console.log(carMarket.getAgencyIdByName(carMarket.sellers, "Best Deal"));
// console.log(carMarket.getAgencyIdByName(carMarket.sellers, "Best"));
// console.log(carMarket.getAgencyIdByName(carMarket.sellers, "CarMax"));

//!--------------------------------------------------------------------

//* getAllAgenciesName
//? @param {}
//? @return {string[]} - agenciesNameArr - Array of all agencies name

carMarket.getAllAgenciesName = function (sellers) {
    const agenciesNameArr = [];
    for (const agency of sellers) {
        agenciesNameArr.push(agency.agencyName);
    }
    return agenciesNameArr;
};

carMarket.getAllAgenciesName2 = function (sellers) {
    return sellers.map((seller) => seller.agencyName);
};

// console.log(carMarket.getAllAgenciesName(carMarket.sellers));
// console.log(carMarket.getAllAgenciesName2(carMarket.sellers));

//!--------------------------------------------------------------------

//* getAllCarToBuy
//? @param {}
//? @return {object[]} - allCarsToBuy - arrays of all cars objects

carMarket.getAllCarToBuy = function (sellers) {
    const allCarsToBuy = [];
    for (const agency of sellers) {
        for (const car of agency.cars) {
            allCarsToBuy.push(car);
        }
    }
    return allCarsToBuy;
};

carMarket.getAllCarToBuy2 = function (sellers) {
    return sellers.reduce((acc, agency) => {
        return acc.concat(agency.cars);
    }, []);
};

const combineTwoArrays = (firstArr, secondArr) => [...firstArr, ...secondArr];

carMarket.getAllCarToBuy3 = function (sellers) {
    return sellers.reduce(
        (acc, agency) => combineTwoArrays(acc, agency.cars),
        []
    );
};

// console.log(carMarket.getAllCarToBuy(carMarket.sellers));
// console.log(carMarket.getAllCarToBuy2(carMarket.sellers));
// console.log(carMarket.getAllCarToBuy3(carMarket.sellers));

//!--------------------------------------------------------------------

//* getAllCarToBuyByAgencyId
//? @param {string} - id of agency
//? @return {object[]} - carsArray - arrays of all models objects of specific agency

// Helper function:
carMarket.getAgencyById = function (sellers, agencyId) {
    return sellers.find((agency) => agency.agencyId === agencyId);
};

carMarket.getAllCarToBuyByAgencyId = function (sellers, agencyId) {
    const carsArray = [];
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    for (const car of agency.cars) {
        for (const model of car.models) {
            carsArray.push(model);
        }
    }
    console.log(carsArray.length);
    return carsArray;
};

carMarket.getAllCarToBuyByAgencyId2 = function (sellers, agencyId) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    return agency
        ? agency.cars.reduce(
              (acc, car) => combineTwoArrays(acc, car.models),
              []
          )
        : undefined;
};
// console.log(carMarket.getAllCarToBuyByAgencyId(carMarket.sellers, "Plyq5M5AZ"));
// console.log(
//     carMarket.getAllCarToBuyByAgencyId2(carMarket.sellers, "Plyq5M5AZ")
// );

//!--------------------------------------------------------------------

//* getAllBrandsToBuyAgencyId
//? @param {string} - agencyId -  id of agency
// ? @return {string[]} - arrOfBrands - arrays of all brands name in specific agency

carMarket.getAllBrandsToBuyAgencyId = function (sellers, agencyId) {
    const arrOfBrands = [];
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    for (const car of agency.cars) {
        arrOfBrands.push(car.brand);
    }
    return arrOfBrands;
};

carMarket.getAllBrandsToBuyAgencyId2 = function (sellers, agencyId) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    return agency.cars.map((car) => car.brand);
};

// console.log(
//     carMarket.getAllBrandsToBuyAgencyId(carMarket.sellers, "Plyq5M5AZ")
// );
// console.log(
//     carMarket.getAllBrandsToBuyAgencyId2(carMarket.sellers, "Plyq5M5AZ")
// );

//!--------------------------------------------------------------------

//! customer func's
//todo getters

//!--------------------------------------------------------------------

//* getCustomerByName
//? @param {string} - name
//? @return {Object} - customer

carMarket.getCustomerById = function (customers, customerId) {
    return customers.find((person) => person.id === customerId);
};

carMarket.getCustomerByName = function (customers, name) {
    for (const customer of customers) {
        if (customer.name === name) {
            return customer;
        }
    }
    return undefined;
};

carMarket.getCustomerByName2 = function (customers, name) {
    return customers.find((customer) => customer.name === name);
};

// console.log(carMarket.getCustomerByName(carMarket.customers, "Lilah Goulding"));
// console.log(carMarket.getCustomerByName(carMarket.customers, "Lilah Goulb"));
// console.log(
//     carMarket.getCustomerByName2(carMarket.customers, "Lilah Goulding")
// );
// console.log(carMarket.getCustomerByName2(carMarket.customers, "Lilah Goulb"));

//!--------------------------------------------------------------------

//* getCustomerIdByName
//? @param {name}
//? @return {String} - customerId - The customer id

carMarket.getCustomerIdByName = function (customers, name) {
    const customer = carMarket.getCustomerByName(customers, name);
    return customer ? customer.id : undefined;
};

// console.log(
//     carMarket.getCustomerIdByName(carMarket.customers, "Lilah Goulding")
// );
// console.log(carMarket.getCustomerIdByName(carMarket.customers, "Lilah Goulb"));

//!--------------------------------------------------------------------

//* getAllCustomersNames
//? @param {}
//? @return {string[]} - customersNameArr -  Array of all customers name

carMarket.getAllCustomersNames = function (customers) {
    const customersNameArr = [];
    for (const customer of customers) {
        customersNameArr.push(customer.name);
    }
    return customersNameArr;
};

carMarket.getAllCustomersNames2 = function (customers) {
    return customers.map((customer) => customer.name);
};

// console.log(carMarket.getAllCustomersNames(carMarket.customers));
// console.log(carMarket.getAllCustomersNames2(carMarket.customers));

//!--------------------------------------------------------------------

//* getAllCustomerCars
//? @param {id} - costumerId - costumer id
//? @return {object[]} - customerCarsArr -  Array of all customer cars object

carMarket.getAllCustomerCars = function (customers, costumerId) {
    const customer = carMarket.getCustomerById(customers, costumerId);
    return customer ? customer.cars : undefined;
};

// console.log(carMarket.getAllCustomerCars(carMarket.customers, "cnTobUDy6"));
// console.log(carMarket.getAllCustomerCars(carMarket.customers, "cnTobUD"));

//!--------------------------------------------------------------------

//* getCustomerCash
//? @param {id} - costumerId - costumer id
//? @return {number} - CustomerCash

carMarket.getCustomerCash = function (customers, costumerId) {
    const customer = carMarket.getCustomerById(customers, costumerId);
    return customer ? customer.cash : undefined;
};

// console.log(carMarket.getCustomerCash(carMarket.customers, "cnTobUDy6"));
// console.log(carMarket.getCustomerCash(carMarket.customers, "cnTobUD"));

//!------------------------------------------------------------
//*  1) setPropertyBrandToAllCars
//? set all cars model object the current brand
//? @param {}
//? @return {}

carMarket.getBrandByCarName = function (sellers, carName) {
    for (const seller of sellers) {
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

// console.log(carMarket.getBrandByCarName(carMarket.sellers, "X6"));

carMarket.setPropertyBrandToAllCars = function (sellers, customers) {
    for (const seller of sellers) {
        for (const car of seller.cars) {
            const brand = car.brand;
            for (const model of car.models) {
                model["brand"] = brand;
            }
        }
    }
    for (const customer of customers) {
        for (const car of customer.cars) {
            car["brand"] = carMarket.getBrandByCarName(
                carMarket.sellers,
                car.name
            );
        }
    }
    // console.log(carMarket.sellers[0].cars[1].models);
    // console.log(carMarket.customers[0].cars[0]);
};

// carMarket.setPropertyBrandToAllCars(carMarket.sellers, carMarket.customers);

//todo Agency setters

//!------------------------------------------------------------

//* setNewCarToAgency
//? @param {string} - id of agency
//? @param {object} - carObject
//? @return {}

carMarket.setNewCarToAgency = function (sellers, agencyId, carObject) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    agency.cars.push(carObject);
};
carMarket.setNewCarToAgency2 = function (sellers, agencyId, carObject) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) throw new Error("Invalid agency id");
    agency.cars.push(carObject);
};

// try {
//     carMarket.setNewCarToAgency2(carMarket.sellers, "Plyq5M5AZ", {
//         brand: "toledano",
//         models: [],
//     });
//     console.log(carMarket.sellers[0].cars);
// } catch (ex) {
//     console.log(ex);
// }

//!------------------------------------------------------------

//* deleteCarFromAgency
//? @param {string} - id of agency
//? @param {string} -  Car id
// ? @return {}
// Assumption: Car id is carNumber, so one car model will be deleted.

carMarket.deleteCarFromAgency = function (sellers, agencyId, carId) {
    const isSearchedCar = (model) => model.carNumber === carId;
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    const car = agency.cars.find((car) => car.models.some(isSearchedCar));
    if (!car) return undefined;
    const modelIdx = car.models.findIndex(isSearchedCar);
    car.models.splice(modelIdx, 1);
};

carMarket.deleteCarFromAgency(carMarket.sellers, "Plyq5M5AZ", "S6DL1");
// console.log(carMarket.sellers[0].cars[0].models);

//!------------------------------------------------------------

//* decrementOrIncrementCashOfAgency
//? @param {string} - agencyId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - agencyCash

carMarket.decrementOrIncrementCashOfAgency = function (
    sellers,
    agencyId,
    amount
) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    agency.cash += amount;
    return agency.cash;
};

// console.log(
//     carMarket.decrementOrIncrementCashOfAgency(
//         carMarket.sellers,
//         "Plyq5M5AZ",
//         5000
//     )
// );
// console.log(
//     carMarket.decrementOrIncrementCashOfAgency(
//         carMarket.sellers,
//         "Plyq5M5AZ",
//         -100000000
//     )
// );

//!------------------------------------------------------------

//* decrementOrIncrementCreditOfAgency
//? @param {string} - agencyId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - agencyCash

carMarket.decrementOrIncrementCreditOfAgency = function (
    sellers,
    agencyId,
    amount
) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    if (!agency) return undefined;
    agency.credit += amount;
    return agency.credit;
};

// console.log(
//     carMarket.decrementOrIncrementCreditOfAgency(
//         carMarket.sellers,
//         "Plyq5M5AZ",
//         5000
//     )
// );
// console.log(
//     carMarket.decrementOrIncrementCreditOfAgency(
//         carMarket.sellers,
//         "Plyq5M5AZ",
//         -10000
//     )
// );
// console.log(
//     carMarket.decrementOrIncrementCreditOfAgency(
//         carMarket.sellers,
//         "Plyq5M5AZ",
//         -200000
//     )
// );

//!------------------------------------------------------------

//* setAmountOfCarsToBuyToAllAgency's
//? set a new property amountOfCars to all agency's, that represent the amount of cars available in the agency.
//? @param {}
// ? @return {objects[]} - sellers - array of all agency's

carMarket.setAmountOfCarsToBuyToAllAgency = function (sellers) {
    for (const seller of sellers) {
        let carCount = 0;
        for (const car of seller.cars) {
            carCount += car.models.length;
        }
        seller["amountOfCars"] = carCount;
    }
    return carMarket.sellers;
};

carMarket.setAmountOfCarsToBuyToAllAgency2 = function (sellers) {
    for (const seller of sellers) {
        seller["amountOfCars"] = seller.cars.reduce(
            (acc, car) => acc + car.models.length,
            0
        );
    }
    return carMarket.sellers;
};

// console.log(carMarket.setAmountOfCarsToBuyToAllAgency2(carMarket.sellers));

//todo setters
//!------------------------------------------------------------

//* setCarToCostumer
//? @param {string} - costumerId
//? @param {object} - carObject
//? @return {object[]} - allCarsOfCostumer

carMarket.setCarToCustomer = function (customers, customerId, carObject) {
    const customer = carMarket.getCustomerById(customers, customerId);
    if (!customer) return undefined;
    customer.cars.push(carObject);
    return customer.cars;
};

// console.log(
//     carMarket.setCarToCustomer(carMarket.customers, "BGzHhjnE8", {
//         name: "picanto",
//         year: 2020,
//         price: 80000,
//         carNumber: "111111",
//         ownerId: "BGzHhjnE8",
//     })
// );

//!------------------------------------------------------------

//* deleteCarOfCostumer
//? @param {string} - costumerId
//? @param {string} - carId
//? @return {object[]} - allCarsOfCostumer

carMarket.deleteCarOfCostumer = function (customers, customerId, carId) {
    const customer = carMarket.getCustomerById(customers, customerId);
    if (!customer) return undefined;

    const carToDelete = customer.cars.find((car) => car.carNumber === carId);
    if (!carToDelete) return undefined;

    const carIdx = customer.cars.indexOf(carToDelete);
    customer.cars.splice(carIdx, 1);
    return customer.cars;
};

// console.log(
//     carMarket.deleteCarOfCostumer(carMarket.customers, "2RprZ1dbL", "WIh0U")
// );

//!------------------------------------------------------------

//* decrementOrIncrementCashOfCostumer
//? @param {string} - costumerId
//? @param {number} - amount - negative or positive amount
// ? @return {number} - costumerCash

carMarket.decrementOrIncrementCashOfCustomer = function (
    customers,
    customerId,
    amount
) {
    const customer = carMarket.getCustomerById(customers, customerId);
    if (!customer) return undefined;

    const currCustomerCash = customer.cash + amount;
    if (currCustomerCash < 0) {
        return undefined;
    }
    customer.cash = currCustomerCash;
    return currCustomerCash;
};
// console.log(
//     carMarket.decrementOrIncrementCashOfCustomer(
//         carMarket.customers,
//         "2RprZ1dbL",
//         1000
//     )
// );
// console.log(
//     carMarket.decrementOrIncrementCashOfCustomer(
//         carMarket.customers,
//         "2RprZ1dbL",
//         -20000000
//     )
// );

//! -------------------------------------------------------
//* 2) sortAndFilterByYearOfProduction
//?   filter and Sort in a Ascending or Descending order all vehicles for sale by year of production.
//?   @param {object[]} - arrOfCars - array of cars
//?   @param {number} - fromYear - Will display vehicles starting this year
//?   @param {number} - toYear - Will display vehicles up to this year
//?   @param {boolean} - isAscendingOrder - true for ascending order, false for descending order
//?   @return {object[]} - arrayOfModels - array of sorted cars

// Assumption: the value of fromYear and toYear inclusive.

carMarket.sortAndFilterByYearOfProduction = function (
    arrOfCars,
    fromYear,
    toYear,
    isAscendingOrder
) {
    return arrOfCars
        .filter((car) => car.year >= fromYear && car.year <= toYear)
        .sort((car1, car2) =>
            isAscendingOrder ? car1.year - car2.year : car2.year - car1.year
        );
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
    return arrOfCars
        .filter((car) => car.price >= fromPrice && car.price <= toPrice)
        .sort((car1, car2) =>
            isAscendingOrder ? car1.price - car2.price : car2.price - car1.price
        );
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

const checkIfCarIsInAgency = function (agency, carModel) {
    return agency
        ? agency.cars.some((car) => car.models.includes(carModel))
        : undefined;
};

const doesCustomerHasEnoughCash = function (customer, price) {
    return customer ? customer.cash - 1.17 * price >= 0 : undefined;
};

const handleSaleFromAgency = function (sellers, agency, carModel) {
    carMarket.decrementOrIncrementCashOfAgency(
        sellers,
        agency.agencyId,
        carModel.price
    );

    carMarket.deleteCarFromAgency(sellers, agency.agencyId, carModel.carNumber);
};

const handleSaleToCustomer = function (customers, customer, carModel) {
    carMarket.decrementOrIncrementCashOfCustomer(
        customers,
        customer.id,
        -1.17 * carModel.price
    );
    carModel.ownerId = customer.id;
    carMarket.setCarToCustomer(customers, customer.id, carModel);
};

const handleSaleTax = function (carModel) {
    carMarket.taxesAuthority.totalTaxesPaid += 0.17 * carModel.price;
    carMarket.taxesAuthority.numberOfTransactions++;
    carMarket.taxesAuthority.sumOfAllTransactions += 1.17 * carModel.price;
};

carMarket.sellCar = function (
    sellers,
    customers,
    agencyId,
    customerId,
    carModel
) {
    const agency = carMarket.getAgencyById(sellers, agencyId);
    const customer = carMarket.getCustomerById(customers, customerId);
    if (!checkIfCarIsInAgency(agency, carModel))
        return "The vehicle does not exist at the agency";

    if (!doesCustomerHasEnoughCash(customer, carModel.price))
        return "The customer does not exist or does not have enough money";

    handleSaleFromAgency(sellers, agency, carModel);
    handleSaleToCustomer(customers, customer, carModel);
    handleSaleTax(carModel);
    return carModel;
};

console.log(
    carMarket.sellCar(
        carMarket.sellers,
        carMarket.customers,
        "Plyq5M5AZ",
        "BGzHhjnE8",
        carMarket.sellers[0].cars[0].models[0]
    )
);

module.exports = carMarket;
