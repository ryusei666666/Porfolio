$(function () {
    $('.battu').on('click', function () {
        console.log('baka');
        $('.contentsWrap').css({
            'display': 'none'
        })
        $('.contents').css({
            'display': 'none'
        })
    })
})