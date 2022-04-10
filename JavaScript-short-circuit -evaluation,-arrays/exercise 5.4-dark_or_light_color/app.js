const lightOrDarkColor = (color) => {
    let lowercaseColor = color.toLowerCase();
    switch (lowercaseColor) {
        case "yellow":
        case "pink":
        case "orange":
            return "light color";
        case "blue":
        case "purple":
        case "brown":
            return "dark color";
        default:
            return "Unknown color";
    }
};

console.log(lightOrDarkColor("Yellow"));
console.log(lightOrDarkColor("yellow"));
console.log(lightOrDarkColor("PURPLE"));
console.log(lightOrDarkColor("red"));
