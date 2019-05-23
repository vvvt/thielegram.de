$(() => {

  function getContent(url) {
    $.ajax({url: url, type: 'GET', success: function(result){
        $("main").html(result);
        console.log("Sent" + result);
      }});
  }

  $('#but_prog').click(function(){
    getContent('/api/prog');
  });

  $('#but_cv').click(function(){
    getContent('/api/cv');
  });

  $('#but_music').click(function(){
    getContent('/api/music');
  });

  $('#but_art').click(function(){
    getContent('/api/art');
  });

  $('#but_back').click(function(){
    getContent('/api/back');
  });


});
