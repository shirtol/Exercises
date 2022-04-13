const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],

    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],

    findPerson: function (type, id) {
        return type.find((person) => person.id === id);
    },

    assignStudent: function (studentId, subject) {
        const student = this.findPerson(this.students, studentId);
        const availableTeachersArr = this.teachers.filter(
            (teacher) =>
                teacher.subjects.includes(subject) && teacher.capacityLeft !== 0
        );
        if (availableTeachersArr.length === 0) {
            return "Sorry, no available teachers left";
        } else {
            let chosenteacher = availableTeachersArr[0];
            chosenteacher.students.push(student);
            chosenteacher.capacityLeft--;
        }
    },

    assignTeachersSubject: function (teacherId, newSubject) {
        const teacher = this.findPerson(this.teachers, teacherId);
        if (!teacher.subjects.includes(newSubject)) {
            teacher.subjects.push(newSubject);
        }
    },

    favoriteTeacher: function () {
        let favTeacher;
        let maxStudents = 0;
        for (teacher of this.teachers) {
            if (teacher.students.length > maxStudents) {
                maxStudents = teacher.students.length;
                favTeacher = teacher;
            }
        }
        return [favTeacher, maxStudents];
    },
};

// console.log(school.findPerson(school.students, 12));

// school.assignStudent(12, "history");
// console.log(school);
// console.log(school.teachers[0].students);
// console.log(school.teachers[1].students);

// school.assignTeachersSubject(2, "history");
// school.assignTeachersSubject(2, "biology");
// console.log(school.teachers[1].subjects);
// console.log(school.favoriteTeacher());
