document.querySelector("#reset-field button").addEventListener('click',function(){
  // TASK #1
  var textBox = document.querySelector("#reset-field input");
  textBox.value = "";
})


document.querySelector("#validate-field button").addEventListener('click',function(){
  // TASK #2
  var textBox = document.querySelector("#validate-field input");
  var long = textBox.value.length;
  var msg = document.querySelector(".flash-message");

  //inputlength = textBox.value.length;
  //msg.textContent = "";

  //if (inputlength === 0) {

  //}
  if (long < 6) {
    msg.textContent = "Input not long enough";
    msg.className = "flash-message invalid";
  } else { 
    msg.textContent = "Field Valid";
    msg.className = "flash-message valid";
  }
})

var textCaja = document.querySelector("#validate-field input");

textCaja.addEventListener("kaydown", function(event) {
  key_enter = 13;

})


document.querySelector("#calculate-items button").addEventListener('click',function(){
  // TASK #3
 var cheboxes = document.querySelectorAll('.cars-list input');
  var showSuma = document.querySelector('.sum-total');
  var suma = 0;

  cheboxes.forEach(function(check){
    if(check.checked === true){
      var valor = parseInt(check.value);
    
      suma += valor;
    }
  })
  showSuma.textContent = "$ " + suma;
})


document.querySelector("#select-to-show-more button").addEventListener('click',function(){
  // TASK #4
  cars = document.querySelectorAll('.selection option')
  console.log(cars);

  cars.forEach(function(car) {
    if (car.selected === true) {
      document.querySelector('.img-box').innerHTML = "<img src='./images/" + car.dataset.img+ "' />"
      document.querySelector('.model').textContent = car.value;
      document.querySelector('.msrp').textContent= car.dataset.msrp;
      document.querySelector('.mpg').textContent= car.dataset.mpg;
      document.querySelector('.edmunds').textContent= car.dataset.edmunds;
    }
  })

})
