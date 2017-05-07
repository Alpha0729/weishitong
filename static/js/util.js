$(function(){

    //$(".tabList-tit,.tabList-tit02,.tabList-tit03,.tabList-tit04,.tabList-tit05").find("ul").children("li").unbind("click").click(function(){
    //    $(this).addClass("on").siblings("li").removeClass("on");
    //    $(".tabList-con").find(".tabList-con-txt").children().eq($(this).index()).show().siblings().hide();
    //});


    dSelect($('.dSelect1'));
    dSelect($('.dSelect2'));

    function dSelect(se){
        var ulList=se.find('.d_SelectList') || se.find('.d_SelectList2');
        var inSelect=se.find('.d_inSelect');
        var pDown=se.find('.d_posDown');
        var cHide=se.find('.d_hideCha');

        mClick(inSelect);
        mClick(pDown);
        mClick(cHide);

        function mClick(obj){
            obj.click(function(){
                var ulList=$(this).siblings('.d_SelectList') || $(this).siblings('.d_SelectList2');
                if (ulList.css("display") == "none") {
                    ulList.slideDown("fast");
                } else {
                    ulList.slideUp("fast");
                }
                return false;
            });
        };
        ulList.children('li').mouseenter(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
        ulList.find('.d_click').click(function(){
            inSelect.focus();
            var txt=$(this).text();
            $(this).parents(".d_select").find(".d_inSelect").val(txt);
            ulList.slideUp("fast");
            return false;
        });
        $(document).click(function(){
            ulList.slideUp("fast");
        });
    };

    $(".goTop .goTop-con .gt-btn").click(function(){
        $("html,body").animate({scrollTop:0},500);
    })




    //$(".gs-jianjie").find("ul").children("li").click(function(){
    //    $(this).addClass("ac-on").siblings("li").removeClass("ac-on");
    //    $(".gs-jianjie-con").find(".gs-jianjie-text").children().eq($(this).index()).show().siblings().hide();
    //
    //});



    $(".zw-list-con ul li .openBtn").click(function(){
        if(!$(this).hasClass("openBtn-tran"))
        {
            $(this).parent().hasClass("add-bg");
            $(this).parent().siblings().removeClass("openBtn-tran");
            $(this).parent().siblings().find(".openbtn").removeClass("openBtn-tran");
        }
        $(this).toggleClass("openBtn-tran");
        $(this).parent().toggleClass("add-bg");
    });



    $(".lj-we-list-con .lj-weTit .sid-btn").click(function(){
        if($(this).parent().siblings().css("display")=="none"){
            $(this).parent().siblings().slideDown(500);
        }else{
            $(this).parent().siblings().slideUp(500);
        }
        $(this).toggleClass("sid-btn-active");
    });


    $(".header-mobile .header-mobileCon .mobile-nav .mobile-menu").click(function(){
        if($(this).parent().siblings(".mobile-box").css("display")=="none"){
            $(this).parent().siblings(".mobile-box").slideDown(500);
        }else{
            $(this).parent().siblings(".mobile-box").slideUp(500);
        }
        $(this).toggleClass("mobile-menu-A");
    })

    $(".mobile-box ul .mList-bg").click(function(){
        if($(this).children("dl").css("display")=="none"){
            $(this).children("dl").slideDown(500);
        }else{
            $(this).children("dl").slideUp(500);
        }
        $(this).toggleClass("mList-bg-j");
    })

    $(".mobile-footer-con ul li span").click(function(){
        if($(this).siblings().css("display")=="none"){
            $(this).siblings().slideDown(500);
        }else{
            $(this).siblings().slideUp(500);
        }
        $(this).toggleClass("ac-bgCon");
    })


    $(".ck-dt .ck-tuBtn").click(function(){
        if($(this).siblings().css("display")=="none"){
            $(this).siblings().show();
        }else{
            $(this).siblings().hide();
        }
    })

    $(".ck-tuCon .gbBtn").click(function(){
        $(this).parent().hide();
    })

    //tabClickAct();

});

function tabClickAct(){


    pcClick = function (){

    }

    mobileClick = function (){
        //$(".tabList-tit,.tabList-tit02,.tabList-tit03,.tabList-tit04,.tabList-tit05").find("ul").children("li").unbind("click").click(function(){
        //    console.log("123");
        //});


    }

    changeWidth = function (){
        if($(document).outerWidth()>768){
            pcClick();
        }else{
            mobileClick();
        }
    }

    $(window).resize(function(){
        changeWidth();
    });

    changeWidth();

}


