// Fade Sample ////////////
$( function() {

  $(".fade").fadeTo(0,0.2); // 初期状態 20%

  $(".fade").hover(
    function(){
      $(this).fadeTo("500", 1.0); // マウスが載ったら100%までフェードする
    },
    function(){
      $(this).fadeTo("8000", 0.2); // マウスが離れたら20%に戻す
    }
  );

});

// Animate Sample //////////
$( function(){
  $("#left").click( function(){
    $('#move').animate( { 'left': '-=300px' } , { 'duration': 500 } );
  });
  $("#right").click( function(){
    $('#move').animate( { 'left': '+=300px' } , { 'duration': 500 } );
  });
  $("#center").click( function(){
    var optionObj = new Object();
    optionObj.left = $('body').outerWidth() / 2 - 100;
    $('#move').animate( optionObj , { 'duration': 2000 } );
  });
});
