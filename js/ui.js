// // <!-- 화면 클릭 jquery -->
// $('html').click(function () {
//     alert('클릭')
// })
$(document).on('click', '#menuButton',function (){
    alert('햄버거 메뉴 나오기');
    $('#hamburgerMenu').show()
})

// html id 가 있어야 가능
$(document).on('click', '#hamburgerCloseButton',function (){
    $('#hamburgerMenu').hide();
    
    alert('햄버거 메뉴 나오기');
})



