let origArray = [2, 3, 4];

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("outSq").value = origArray[0];
  document.getElementById("outCube").value = origArray[1];
  document.getElementById("outFour").value = origArray[2];

  document.getElementById("cube").addEventListener("click", function () {
    let x = origArray.map(doCube);

    document.getElementById("outSq").value = x[0];
    document.getElementById("outCube").value = x[1];
    document.getElementById("outFour").value = x[2];

    console.log(x);
  });

  document.getElementById("fourthPW").addEventListener("click", doFourth);
});

function doSquare(square) {
  let newArr = origArray.map(square);
  document.getElementById("outSq").value = newArr[0];
  document.getElementById("outCube").value = newArr[1];
  document.getElementById("outFour").value = newArr[2];

  function square(num) {
    return num * num;
  }

  console.log(newArr);
}

let doCube = function (num) {
  return num * num * num;
};

function doFourth(fourth) {
  let newArr = origArray.map(fourth);

  document.getElementById("outSq").value = newArr[0];
  document.getElementById("outCube").value = newArr[1];
  document.getElementById("outFour").value = newArr[2];

  function fourth(num) {
    return Math.pow(num, 4);
  }
  console.log(newArr);
}
