/* global $*/
/* global WOW */


"use strict";

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


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

(function() {
            $(document).ready(function() {
                return $('#contact-form').submit(function(e) {
                    var email, message, name;
                    name = document.getElementById('inputName');
                    email = document.getElementById('inputEmail');
                    message = document.getElementById('inputMessage');
                    if (!name.value || !email.value || !message.value) {
                        alertify.error('Please check your entries');
                        return false;
                    } else {
                        $.ajax({
                            method: 'POST',
                            url: '//formspree.io/juandg161@gmail.com',
                            data: $('#contact-form').serialize(),
                            datatype: 'json'
                        });
                        e.preventDefault();
                        $(this).get(0).reset();
                        return alertify.success('Message sent');
                    }
                });
            });

        }).call(this);


