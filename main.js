let myArray = [2, 3, 4];
let x = myArray;

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("output1").value=x[0]
    document.getElementById("output2").value=x[1]
    document.getElementById("output3").value=x[2]

    
    document.getElementById("cubed").addEventListener("click", function () {
        let x = myArray.map(myCubed, myArray[i]); // check understanding

        document.getElementById("output1").value=x[0]
        document.getElementById("output2").value=x[1]
        document.getElementById("output3").value=x[2]
    });

    

    
});

