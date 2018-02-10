"use strict";

function loadJSON(name){
  $.getJSON("./json/"+name+".json", function(data){
    $('#modal-title').text(data.title);
    $('#modal-description').text(data.description);
    $('#modal-technologies').text(data.technologies);
    $('#modal-img').attr('src',data.img);
    if(data.position !== undefined){ 
      $('#modal-position').text(data.position);
      $('#modal-position').parent().css("display","block");
    } else {
      $('#modal-position').parent().css("display","none");
    }
    $('#modal-date').text(data.dates);
    if(data.link!== undefined){
      $("#modal-li").css("display", "block");
      $("#modal-link").attr('href',data.link);
    } else {
      $("#modal-li").css("display", "none");
    }
  });
}