function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function validate() {
    sessionStorage.clear();
    const user = {
        firstname: document.forms["signin"]["first_name"].value,
        // lastname: document.forms["signin"]["last_name"].value,
        // email: document.forms["signin"]["email"].value,
        // id_number: document.forms["signin"]["id_number"].value,
        // age: document.forms["signin"]["age"].value,
        // phone: document.forms["signin"]["phone"].value,
        // password: document.forms["signin"]["password"].value,
        role: document.forms["signin"]["role"].value,
    }

    const subjects = []
    const subjectProgress = []

    if (user.role == "student") {
        const numberoflessons = getRandomInt(3, 9);

        for (var i = 0; i < numberoflessons; i++) {
            let value = getRandomInt(3, 9)
            if (subjects.includes(value)) {
                i--;
            } else {
                subjects.push(value)
            }
        }
        for (var i = 0; i < numberoflessons; i++) {
            let value = getRandomInt(10, 100)
            subjectProgress.push(value)
        }
        sessionStorage.setItem('subjects', subjects);
        sessionStorage.setItem('progress', subjectProgress);
    } else if (user.role == "facilitator") {
        subjects.push(getRandomInt(3, 9))
        subjectProgress.push(getRandomInt(3, 9))
        sessionStorage.setItem('subjects', subjects);
        sessionStorage.setItem('progress', subjectProgress);
    }

    for (var key in user) {
        if (user.hasOwnProperty(key)) {
            sessionStorage.setItem(key, user[key]);
        }
    }
    location.href = "home.html";
    return true;
}