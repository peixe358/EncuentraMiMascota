$(document).ready(function() {
  $('.btn-next').on('click', function(e) {
    e.preventDefault();
    console.log('click');
    console.log(this);
    $('#myTab a[href="#info"]').tab('show')
  })
})
