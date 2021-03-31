var detailPane = null;

$('.FEATURE-ICON').hover(
  function()
  {
    $(this).children(".INFO").removeClass('hidden');
    $(".feature1").removeClass('base');
    switch($(this).children(".INFO").attr('id'))
    {
      case "info1":
        $(".feature1").addClass('color1');
        break;
      case "info2":
        $(".feature1").addClass('color2');
        break;
      case "info3":
        $(".feature1").addClass('color3');
        break;
    }



  },
  function()
  {
    $(this).children(".INFO").addClass('hidden');
    switch($(this).children(".INFO").attr('id'))
    {
      case "info1":
        $(".feature1").removeClass('color1');
        break;
      case "info2":
        $(".feature1").removeClass('color2');
        break;
      case "info3":
        $(".feature1").removeClass('color3');
        break;
    }
    $(".feature1").addClass('base');

  }
);
