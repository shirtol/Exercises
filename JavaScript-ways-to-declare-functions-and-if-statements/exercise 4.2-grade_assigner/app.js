const gradeAssigner = (score) => {
    if (score <= 64 && score >= 0) {
        return "F";
    } else if (score >= 65 && score <= 69) {
        return "D";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 90 && score <= 100) {
        return "A";
    } else {
        return null;
    }
};

console.log(gradeAssigner(0));
console.log(gradeAssigner(65));
console.log(gradeAssigner(79));
console.log(gradeAssigner(85));
console.log(gradeAssigner(91));
console.log(gradeAssigner(100));
