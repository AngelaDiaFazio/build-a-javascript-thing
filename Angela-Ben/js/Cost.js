function Cost(travel, gift, hotel){
  this.travel = travel;
  this.gift = gift;
  this.hotel = hotel;
  this.totalCost = function() {
    return this.travel + this.gift + this.hotel;
  };
}

//Button
var add = document.getElementById('addCost');

add.onclick = function(){
  //Get values from user
  var trvCost = parseInt(document.getElementById('trv').value);
  var gftCost = parseInt(document.getElementById('gft').value);
  var htlCost = parseInt(document.getElementById('htl').value);
  //Instantiate new object
  var wedCost = new Cost(trvCost, gftCost, htlCost);
  var show = document.getElementById('showCost');
  show.innerHTML = wedCost.totalCost();


};
