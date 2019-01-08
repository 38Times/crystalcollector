
var wins = 0;
var looses = 0;
var totalScore = 0;
var numArray = [1, 2, 5, 10];
numArray.sort(function (a, b) { return 0.5 - Math.random() });
var numCrys1 = numArray[0];
var numCrys2 = numArray[1];
var numCrys3 = numArray[2];
var numCrys4 = numArray[3];


var randNum = 10 + Math.floor(Math.random() * 21);
$(".output1").html("Random Number:" + "<br><br>" + randNum);



$("#pic1").on("click", function () {
    totalScore += numCrys1;
    console.log(totalScore);
});
$("#pic2").on("click", function () {
    totalScore += numCrys2;
    console.log(totalScore);
});
$("#pic3").on("click", function () {
    totalScore += numCrys3;
    console.log(totalScore);
});
$("#pic4").on("click", function () {
    totalScore += numCrys4;
    console.log(totalScore);
});


$("#pic1, #pic2, #pic3, #pic4").on("click", function () {
    $("#totalScore").html(totalScore);
    if (totalScore === randNum) {
        ++wins;
        $("#wins").html("Wins: " + wins);
        reset();
    }
    if (totalScore > randNum) {
        ++looses;
        $("#looses").html("Looses: " + looses);
        reset();
    }
});

function reset() {
    totalScore = 0;
    numArray.sort(function (a, b) { return 0.5 - Math.random() });
    randNum = 10 + Math.floor(Math.random() * 21);
    numCrys1 = numArray[0];
    numCrys2 = numArray[1];
    numCrys3 = numArray[2];
    numCrys4 = numArray[3];
    $("#totalScore").html(totalScore);
    $(".output1").html("Random Number:" + "<br><br>" + randNum);
}



$("#btnReset").on("click", function () {
    wins = 0;
    looses = 0;
    totalScore = 0;
    randNum = 10 + Math.floor(Math.random() * 21);
    $("#wins").html("Wins: " + wins);
    $("#looses").html("Looses: " + looses);
    $("#totalScore").html(totalScore);
    $(".output1").html("Random Number:" + "<br><br>" + randNum);
});
