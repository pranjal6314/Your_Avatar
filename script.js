
$(document).ready(function(){
    $('button').click(function(){
        const a=$('#nameid').val();
        // alert(a);
        $('.change_img').attr('src',`https://joeschmoe.io/api/v1/${a}`);
        const b=$('change_img');
        console.log(b);
    })
})
