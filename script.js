$(function(){
    $('.button-icon-wrapper').on('click',function(){
        // 画面切り替え
        $('.screen').removeClass('is-show');
        var index = $('.button-icon-wrapper').index(this);
        $('.screen').eq(index).addClass('is-show');
        //アイコン切り替え
        var buttonsrc2 = [
            'img/home2.png',
            'img/search2.png',
            'img/post2.jpg',
            'img/heart3.png'
        ];
        $('.home').attr('srck', 'img/home1.png')
        .parent('.button-icon-wrapper').next().find('.search').attr('src', 'img/search1.png')
        .parent('.button-icon-wrapper').next().find('.newpost').attr('src', 'img/post1.jpg')
        .parent('.button-icon-wrapper').next().find('.goodlist').attr('src', 'img/heart1.jpg')
        .parent('.button-icon-wrapper').next().find('.profile').css('box-shadow', '0 0 0 0 #fff');
        $(this).find('.button-icon').attr('src', buttonsrc2[index]);
        $(this).find('.profile').css('box-shadow','0 0 0 1px #000');
    });

    
    //投稿 ボタン
    function togglebutton (icon, src1, src2) {
        $(icon).on('click',function(){
        if($(this).find('.button').attr('src') == src1) {
            $(this).find('.button').attr('src', src2);
        } else {
            $(this).find('.button').attr('src', src1);
        }
        });
    };
    togglebutton('.good-button', 'img/heart1.jpg', 'img/heart2.png');
    togglebutton('.collection-button', 'img/collection1.png', 'img/collection2.jpg');


});