

function isPalindrome(name) {
    // Нэр доторх хоосон зайг хасаж, том үсгүүдийг болгоно
    name = name.toLowerCase().replace(/\s+/g, '');
  
    // Нэр доторх тэмдэгтүүдийг массив болгоно
    var nameArray = name.split('');
  
    // Массивыг шулуун дээрээс нь тогтоох
    nameArray.reverse();
  
    // Массивыг давтан дамжуулахдаа тэмдэгтүүдийг нэг нэгээр нь тэнд нь тэгшлэнэ
    for (var i = 0; i < name.length; i++) {
      if (name[i] !== nameArray[i]) {
        return 'Худал'; // Хоосон зай болон том үсгүүдийг шалгаж, биш бол лууна
      }
    }
  
    return 'Үнэн'; // Палиндром бол лууна
  }
  var name1 = "daadaad";
  
  console.log(name1 + " палиндром мөн уу? " + isPalindrome(name1));