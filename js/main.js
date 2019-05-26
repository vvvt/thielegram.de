$(() => {

  function getContent(url) {
    $.ajax({url: url, type: 'GET', success: function(result){
        $("main").html(result);
        console.log("Sent" + result);
      }});
  }

  $('#nav_code').click(function(){
    getContent('/api/code');
  });

  $('#nav_cv').click(function(){
    getContent('/api/cv');
  });

  $('#nav_music').click(function(){
    getContent('/api/music');
  });

  $('#nav_art').click(function(){
    getContent('/api/art');
  });

  $('#nav_back').click(function(){
    getContent('/api/color');
  });


});
