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

function carouselNormalization() {
  var items   = $('#carousel-id .item'),              // grab all the slides
      heights = [],                                   // array to store heights
      tallest;                                        // tallest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function() {
        heights.push($(this).height());               // add each slide's height
      });                                             // to the array

      tallest = Math.max.apply(null, heights);        // find the largest height

      items.each(function() {
        $(this).css('min-height', tallest + 'px');    // set each slide's minimum
      });                                             // height to the largest
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function() {
      tallest = 0, heights.length = 0;               // reset the variables

      items.each(function() {
        $(this).css('min-height', '0');              // reset each slide's height
      });

      normalizeHeights();                            // run it again
    });
  }
}