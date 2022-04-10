/* 
Language: string
isIsland: bool
population: int
country: string
*/

const countryToLiveIn = (language, isIsland, population, country) => {
    if (language === "English" && population < 50 && !isIsland) {
        console.log(`You should live in ${country}.`);
    } else {
        console.log(`${country} does not meet your criteria.`);
    }
};

countryToLiveIn("English", false, 51, "Israel"); // return false
countryToLiveIn("English", false, 45, "Israel"); // return true
