$(document).ready(function() {
  $('.btn-next').on('click', function(e) {
    e.preventDefault();
    // var tabId = $($($(this).parents('.tab-pane')[0]).siblings()[0]).attr('aria-labelledby')
    var tabId = $(this).attr('href')
    $('#'+tabId+'-tab').tab('show')
  })

  if ($('.datetimepicker-date input').val() == '') {
    $('.datetimepicker-date input').val(moment().format('DD/MM/YYYY'));
  }
  if ($('.datetimepicker-time input').val() == '') {
    $('.datetimepicker-time input').val(moment().format('LT'));
  }
})
