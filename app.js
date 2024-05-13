var input = document.getElementById("input");
var result = document.getElementById("result");

function abc() {
    var birthDate = new Date(input.value);
    var currentDate = new Date();

    var ageMilliseconds = currentDate - birthDate;
    var ageSeconds = ageMilliseconds / 1000;
    var ageMinutes = ageSeconds / 60;
    var ageHours = ageMinutes / 60;
    var ageDays = ageHours / 24;
    var ageMonths = ageDays / 30.4375;
    var ageYears = ageMonths / 12;

    var years = Math.floor(ageYears);
    var months = Math.floor(ageMonths % 12);
    var days = Math.floor(ageDays % 30.4375);

    result.innerText = (`You are ${years} years, ${months} months, and ${days} days old.`);
}

