function main() {
  $(".project_content").hide();
  $(".project_button").on("click", function() {
    $(this).next().slideToggle(400);
    $(this).next().show();
  })
}
$(document).ready(main);
