$(function() {
  var $ccField = $('#card_num');
  $ccField.mask('0000000000000000');
  if ($ccField.length) {
    $('#card_num').validateCreditCard(function(result) {
      $('.mps').removeClass('show');
      if (result.card_type) {
        switch (result.card_type.name) {
          case 'visa':
            $('.cards').addClass('hide');
            $('.visa').addClass('show');
            break;
              case 'mastercard':
            $('.cards').addClass('hide');
            $('.mastercard').addClass('show');
            break;
              case 'maestro':
            $('.cards').addClass('hide');
            $('.maestro').addClass('show');
            break;
              }
      } else {
        $('.cards').addClass('show');
      }
    });
  }
});

function validCardNum(cls) {
  $(cls).parent().find('.mps').remove();
  str = '';
  $(cls).each(function(e) {
    str += $(this).val();
  });
  if (str.length > 0) {
    if (str[0] == 2 || str[0] == 5) {
      $(cls).eq(0).before('<img src="../images/m_mastercard.svg">');
    } else if (str[0] == 6) {
      $(cls).eq(0).before('<img src="../images/m_mastercard.svg">');
    } else if (str[0] == 4) {
      $(cls).eq(0).before('<img class="visa" src="img/visa.svg">');
    } else if (str[0] == 9) {
      $(cls).eq(0).before('<img class="prostir" src="img/prostir.png">');
      if (str.length >= 6 && (str.substring(0, 6) != '980440' && str.substring(0, 6) != '980470')) {
        $('.mps').remove();
      }
    } else {
      $(cls).eq(0).before('<img src="../images/card.png"></span>');
    }
  }
}
$('#card_exp_month').on('keyup', function() {
  var firstChar = $(this).val().substr(0, 1),
      secondChar = $(this).val().substr(1, 1);
  if (secondChar != '') {
    var total = firstChar + secondChar;
    if (total == 01 || total == 02 || total == 03 || total == 04 || total == 05 || total == 06 || total == 07 || total == 08 || total == 09 || total == 10 || total == 11 || total == 12) {
      $(this).next().focus();
    } else {
      $(this).val('');
      $(this).focus();
    }
  }
});
$('#card_exp_year').on('keyup', function() {
  var firstChar = $(this).val().substr(0, 1),
      secondChar = $(this).val().substr(1, 1),
      thirdChar = $(this).val().substr(2, 1),
      fourthChar = $(this).val().substr(3, 1);
  if (fourthChar != '') {
    var total = firstChar + secondChar + thirdChar + fourthChar;
    if (total >= '2018') {
      $(this).next().focus();
    } else {
      $(this).val('');
      $(this).focus();
    }
  }
});
$(function() {
  var cvv = document.getElementById('cvv');
  var cardcvvrec = document.getElementById('cvv-rec');
  $('input[name=cvv], input[name=cvv-rec]').on('keypress keyup keydown', function(e) {
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
      var chr = getChar(e);
    if (chr == null) return;
      if (chr[1] < '48' || chr[1] > '57' || chr['1'] == 37 || chr['1'] == 38 || chr['1'] == 39 || chr['1'] == 40) {
        return false;
      }
  });
  
  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) {
        return null;
      }
      return [String.fromCharCode(event.keyCode), event.which];
    }
    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) {
        return null;
      }
      return [String.fromCharCode(event.keyCode), event.which];
    }
    return null;
  }
});