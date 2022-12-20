let button = document.getElementById("finish");
button.addEventListener("click", checkTest);
function checkTest() {

    let result = 0;

    let answers1 = document.getElementById("questions1").value;
    if (answers1 == "25") {
        result++;
    }

    let answers2 = document.getElementById("questions2").value;
    if (answers2 == "15") {
        result++;
    }

    let answers3 = document.getElementById("questions3").value;
    if (answers3 == "80") {
        result++;
    }

    let answers4 = document.getElementById("questions4").value;
    if (answers4 == "4") {
        result++;
    }

    let answers5 = document.getElementById("questions5").value;
    if (answers5 == "200") {
        result++;
    }

    alert("Кількість правильних відповідей: " + result);

    


}