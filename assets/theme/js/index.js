(function() {
  window.onload=function(){
  document.getElementById("clickOnChild").addEventListener("click", function() {
        document.getElementById("children").style.display = "block";
        document.getElementById("youth").style.display = "none";
        document.getElementById("clickOnChild").classList.remove("active__userchoice");
        document.getElementById("clickOnYouth").classList.add("active__userchoice");
    });

document.getElementById("clickOnYouth").addEventListener("click", function() {
        document.getElementById("children").style.display = "none";
        document.getElementById("youth").style.display = "block";
        document.getElementById("clickOnChild").classList.add("active__userchoice");
        document.getElementById("clickOnYouth").classList.remove("active__userchoice");
    });
}
})();













$(function () {
  var $sections = $('.form-section');

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    // Show only the navigation buttons that make sense for the current section:
    $('.form-navigation .previous').toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $('.form-navigation .next').toggle(!atTheEnd);
    $('.form-navigation [type=submit]').toggle(atTheEnd);
  }

  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.current'));
  }

  // Previous button is easy, just go back
  $('.form-navigation .previous').click(function() {
    navigateTo(curIndex() - 1);
  });

  // Next button goes forward iff current block validates
  $('.form-navigation .next').click(function() {
    if ($('.demo-form').parsley().validate('block-' + curIndex()))
      navigateTo(curIndex() + 1);
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(0); // Start at the beginning
});
