$(".skiper").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
    scrollTop:200
    },
    'slow');
    });
    
    
    <noscript class="displaynoscript">This page uses Javascript. Your browser either doesn't support Javascript or you have it turned off. To see this page as it is meant to appear please use a Javascript enabled browser.</noscript> 
    
    
        $(function () {
            var options = {
    
            };
    
            $('.grid-stack').gridstack(options);
            $(".fancybox-thumbs").attr("data-fancybox-group","thumb")	
            $(".fancybox-thumbs").fancybox({
                padding: 0,
                openEffect: 'elastic',
                openSpeed: 150,
                closeEffect: 'elastic',
                closeSpeed: 150,
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                arrows: true,
                pixelRatio: 1, // Set to 2 for retina display support
                aspectRatio: true,
                /*afterLoad  : function () {
                $.extend(this, {
                aspectRatio : true,
                type    : 'html',
                width   : '100%',
                height  : '100%',
                content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
                });
                },*/
                helpers: {
                    title: {
                        type: 'inside'
                    },
                    overlay: {
                        showEarly: false
                    }
                }
            });
    
        });
    
    
    
        $(document).ready(function () {
    
            $('input[name="q"]').keypress(function (event) {
    
                debugger;
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if (keycode == '13') {
    
                    var v = $('input[name="q"]').val();
                    if (v == "") {
    
    
                        return false;
                    }
                    event.stopPropagation();
                }
            });
            $('input[name="Subscribe"]').click(function () {
                debugger;
                var emailid = $('input[name="newsletteremail"]').val();
                var webdept = $('#hdnWbDept').val();
    
                chk = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                if (emailid == "") {
                    isC = false;
                    alert("Email Address is required.");
                    return false;
                }
                if (chk.test(emailid)) {
    
                }
                else {
                    alert("Invalid Email Address.");
                    return false;
                }
    
    
                var data = { email: emailid, flag: 'en', wd: webdept };
    
                $.ajax({
                    type: "POST",
                    url: "./index.aspx/Insertnewsletter",
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                        alert("Subscribed successfully.");
                        $('input[name="newsletteremail"]').val('');
                    },
                    failure: function (response) {
                        alert(response.d);
                    }
                });
    
            });
        });
    
    
    
    
    jQuery(document).ready(function($) {
    $("#menu").accordion();
    $(".colors a").click(function() {
    if ($(this).attr("class") != "default") {
    $("#menu").removeClass();
    $("#menu").addClass("menu").addClass($(this).attr("class"));
    } else {
    $("#menu").removeClass();
    $("#menu").addClass("menu");
    }
    });
    });