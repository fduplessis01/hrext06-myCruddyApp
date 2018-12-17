$(document).ready(function(){
  console.log('jQuery loaded');

  var itemStorage = {};

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    //localStorage.setItem('inputFieldValue', $('.text-entry').val());
    //localStorage.setItem("lastname", "Smith");
    localStorage.setItem($('.text-discription').val(), $('.text-entry').val());
    //var myItemInStorage = localStorage.getItem('inputFieldValue');
    var key = $('.text-discription').val();
    console.log('key', key)
    var myItemInStorage = localStorage.getItem(key);
    console.log('myItemInStorage', myItemInStorage);
    itemStorage[key] = myItemInStorage
    console.log('itemStorage', itemStorage)

    // display the value here
     $('.list-display-field').text(key + ' : ' + myItemInStorage); // ??
     //add multiple values to the display
     //$('.list-display-field').append(key + ' : ' + myItemInStorage); // ??
    

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    //localStorage.removeItem('inputFieldValue');
    localStorage.removeItem($('.text-discription').val());
  });
  // delete all from local storage when delete all button clicked
  $('.btn-delete-all').on('click', function () {
    localStorage.clear();
  });

});



// // Store
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");