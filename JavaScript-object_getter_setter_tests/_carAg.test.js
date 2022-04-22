const carMarket = require("./_CarsAg");

const sellers = [
    {
        agencyName: "Best Deal",
        cash: 1245000,
        credit: 200000,
        agencyId: "Plyq5M5AZ",
        cars: [
            {
                brand: "bmw",
                models: [
                    {
                        name: "3",
                        year: 2015,
                        price: 13,
                        carNumber: "AZJZ4",
                        ownerId: "Plyq5M5AZ",
                    },
                ],
            },
        ],
    },
    {
        agencyName: "Dantol&sons",
        cash: 10,
        credit: 5,
        agencyId: "A1B2C3",
        cars: [
            {
                brand: "Tesla",
                models: [
                    {
                        name: "S",
                        year: 2022,
                        price: 1000000,
                        carNumber: "25390302",
                        ownerId: "A1B2C3",
                    },
                ],
            },
        ],
    },
];

test("Test 1 for getAgencyByName2 function", () => {
    expect(carMarket.getAgencyByName2(sellers, "Dantol&sons")).toStrictEqual({
        agencyName: "Dantol&sons",
        cash: 10,
        credit: 5,
        agencyId: "A1B2C3",
        cars: [
            {
                brand: "Tesla",
                models: [
                    {
                        name: "S",
                        year: 2022,
                        price: 1000000,
                        carNumber: "25390302",
                        ownerId: "A1B2C3",
                    },
                ],
            },
        ],
    });
});

const customers = [
    {
        name: "Dantol",
        id: "543126",
        cars: [
            {
                name: "Picanto",
                year: 2020,
                price: 80000,
                carNumber: "35420354",
                ownerId: "543126",
            },
        ],
        cash: 100000,
    },
    {
        name: "Michael",
        id: "112351",
        cars: [
            {
                name: "Civic",
                year: 2010,
                price: 15000,
                carNumber: "33446",
                ownerId: "112351",
            },
            {
                name: "Ionic",
                year: 2016,
                price: 35000,
                carNumber: "2424242",
                ownerId: "112351",
            },
        ],
        cash: 500,
    },
];

test("Test 1 for getCustomerCash function", () => {
    expect(carMarket.getCustomerCash(customers, "112351")).toBe(500);
});
