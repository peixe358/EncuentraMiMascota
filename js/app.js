$(document).ready(function() {
  $('.btn-next').on('click', function(e) {
    e.preventDefault();
    console.log('click');
    console.log(this);
    $('#myTab a[href="#info"]').tab('show')
  })

  if ($('.datetimepicker-date input').val() == '') {
    $('.datetimepicker-date input').val(moment().format('DD/MM/YYYY'));
  }
  if ($('.datetimepicker-time input').val() == '') {
    $('.datetimepicker-time input').val(moment().format('LT'));
  }
})
