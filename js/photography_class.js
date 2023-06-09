(($, window, document)=>{

    class Photography { //클래스기반 
        init(){
            this.header();
            this.paralax();
            this.section8();
            this.section15();
        }
        header(){
            // 모바일 버튼
            $('.mobile-btn').on({
                click(e){
                    e.preventDefault();
                    $(this).toggleClass('on');
                    $('.nav-menu').slideToggle(300);
                }
            });

            // 섹션별 scrollTop값
            let sec1ScrTop = $('#section1').offset().top;
            let sec2ScrTop = $('#section2').offset().top; 
            let sec3ScrTop = $('#section3').offset().top; 
            let sec4ScrTop = $('#section4').offset().top; 
            let sec5ScrTop = $('#section5').offset().top; 
            let sec6ScrTop = $('#section6').offset().top; 
            let sec7ScrTop = $('#section7').offset().top; 
            let sec8ScrTop = $('#section8').offset().top; 
            let sec9ScrTop = $('#section9').offset().top; 
            let sec10ScrTop = $('#section10').offset().top; 
            let sec11ScrTop = $('#section11').offset().top; 
            let sec12ScrTop = $('#section12').offset().top; 
            let sec13ScrTop = $('#section13').offset().top; 
            let sec14ScrTop = $('#section14').offset().top; 
            let sec15ScrTop = $('#section15').offset().top; 
            let footerScrTop = $('#footer').offset().top;

            let scrNew = 0;
            let scrOld = scrNew;

            $(window).scroll(function(){
                // 네비게이션 - ABOUT - 섹션5부터 섹션6 미만
                if ($(window).scrollTop() > sec5ScrTop - 100 && $(window).scrollTop() < sec6ScrTop - 100) {
                    $('.nav-btn').eq(0).addClass('on');
                } else {
                    $('.nav-btn').eq(0).removeClass('on');
                }
                // 네비게이션 - SERVICES - 섹션6부터 섹션7 미만
                if ($(window).scrollTop() >= sec6ScrTop - 100 && $(window).scrollTop() < sec8ScrTop - 100) {
                    $('.nav-btn').eq(1).addClass('on');
                } else {
                    $('.nav-btn').eq(1).removeClass('on');
                }
                // 네비게이션 - PORTFOLIO - 섹션8부터 섹션9 미만
                if ($(window).scrollTop() >= sec8ScrTop - 100 && $(window).scrollTop() < sec9ScrTop - 100) {
                    $('.nav-btn').eq(2).addClass('on');
                } else {
                    $('.nav-btn').eq(2).removeClass('on');
                }
                // 네비게이션 - AWORDS - 섹션9부터 섹션10 미만
                if ($(window).scrollTop() >= sec9ScrTop - 100 && $(window).scrollTop() < sec10ScrTop) {
                    $('.nav-btn').eq(3).addClass('on');
                } else {
                    $('.nav-btn').eq(3).removeClass('on');
                }
                // 네비게이션 - BLOG - 섹션10부터 섹션15 미만
                if ($(window).scrollTop() > sec10ScrTop - 100 && $(window).scrollTop() < sec15ScrTop - 200) {
                    $('.nav-btn').eq(4).addClass('on');
                } else {
                    $('.nav-btn').eq(4).removeClass('on');
                }
                // 네비게이션 - CONTACT - 섹션15
                if ($(window).scrollTop() >= sec15ScrTop - 160) {
                    $('.nav-btn').eq(5).addClass('on');
                } else {
                    $('.nav-btn').eq(5).removeClass('on');
                }

                // 헤더 스크롤
                scrNew = $(window).scrollTop();

                if ($(window).scrollTop() === 0) { 
                    $('#header').removeClass('up');
                    $('#header').removeClass('down');
                } else {
                    if ((scrNew - scrOld) > 0) {
                        $('#header').addClass('down');
                        $('#header').removeClass('up');
                    }
                    if ((scrNew - scrOld) < 0) {
                        $('#header').removeClass('down');
                        $('#header').addClass('up');
                    }
                }

                scrOld = scrNew;
            });
        }
        paralax(){
            // 섹션별 scrollTop값
            let sec1ScrTop = $('#section1').offset().top;
            let sec2ScrTop = $('#section2').offset().top; 
            let sec3ScrTop = $('#section3').offset().top; 
            let sec4ScrTop = $('#section4').offset().top; 
            let sec5ScrTop = $('#section5').offset().top; 
            let sec6ScrTop = $('#section6').offset().top; 
            let sec7ScrTop = $('#section7').offset().top; 
            let sec8ScrTop = $('#section8').offset().top; 
            let sec9ScrTop = $('#section9').offset().top; 
            let sec10ScrTop = $('#section10').offset().top; 
            let sec11ScrTop = $('#section11').offset().top; 
            let sec12ScrTop = $('#section12').offset().top; 
            let sec13ScrTop = $('#section13').offset().top; 
            let sec14ScrTop = $('#section14').offset().top; 
            let sec15ScrTop = $('#section15').offset().top; 
            let footerScrTop = $('#footer').offset().top;

            // 2. section1 ~ section14
            $(window).scroll(function(){

                if ($(window).scrollTop() === 0) {
                    $('#section2').removeClass('on');
                    $('#section3').removeClass('on');
                    $('#section4').removeClass('on');
                    $('#section5').removeClass('on');
                    $('#section6').removeClass('on');
                    $('#section7').removeClass('on');
                    $('#section8').removeClass('on');
                    $('#section9').removeClass('on');
                    $('#section10').removeClass('on');
                    $('#section11').removeClass('on');
                    $('#section12').removeClass('on');
                    $('#section13').removeClass('on');
                    $('#section14').removeClass('on');
                }

                if ($(window).scrollTop() >= sec2ScrTop - 500) { 
                    $('#section2').addClass('on');
                }
                if ($(window).scrollTop() >= sec3ScrTop - 500) {
                    $('#section3').addClass('on');
                }
                if ($(window).scrollTop() >= sec4ScrTop - 500) {
                    $('#section4').addClass('on');
                }
                if ($(window).scrollTop() >= sec5ScrTop - 500) {
                    $('#section5').addClass('on');
                }
                if ($(window).scrollTop() >= sec6ScrTop - 500) {
                    $('#section6').addClass('on');
                }
                if ($(window).scrollTop() >= sec7ScrTop - 500) {
                    $('#section7').addClass('on');
                }
                if ($(window).scrollTop() >= sec8ScrTop - 500) {
                    $('#section8').addClass('on');
                }
                if ($(window).scrollTop() >= sec9ScrTop - 500) {
                    $('#section9').addClass('on');
                }
                if ($(window).scrollTop() >= sec10ScrTop - 500) {
                    $('#section10').addClass('on');
                }
                if ($(window).scrollTop() >= sec11ScrTop - 500) {
                    $('#section11').addClass('on');
                }
                if ($(window).scrollTop() >= sec12ScrTop - 500) {
                    $('#section12').addClass('on');
                }
                if ($(window).scrollTop() >= sec13ScrTop - 500) {
                    $('#section13').addClass('on');
                }
                if ($(window).scrollTop() >= sec14ScrTop - 500) {
                    $('#section14').addClass('on');
                }

            });
        }
        section8(){
            const galleryBtn = $('#section8 .gallery-btn');
            let btnIndex = 0;

            galleryBtn.each(function(index){
                $(this).click(function(event){
                    event.preventDefault();

                    btnIndex = index;
                    responseGallery();

                    galleryBtn.removeClass('on');
                    $(this).addClass('on');
                });
            });

            const imgWidth = 800; 
            const imgHeight1 = 797;
            const imgHeight2 = 1200;
            const heightRate1 = imgHeight1/imgWidth;
            const heightRate2 = imgHeight2/imgWidth;
            const gallery = $('.gallery');

            let winW = $(window).innerWidth(); 
            let galleryWidth = 1180;
            let rows = 4;
            let cols = 3;
            let imgW = $('.gallery img').innerWidth(); 
            let imgH1 = imgW*heightRate1;
            let imgH2 = imgW*heightRate2;
            let ulH = ((imgH1 * 2) + (imgH2 * 2)) - (40 * (rows - 1)); 

            $(window).resize(function(){
                responseGallery();
            });
            
            function responseGallery() { 

                winW = $(window).innerWidth();

                if (winW > 1170) {
                    cols = 3;
                } else if (winW > 600) {
                    cols = 2;
                } else {
                    cols = 1;
                }
        
                // 이미지너비 반응형
                if (winW <= 1170) {
                    galleryWidth = winW + 40;
                } else {
                    galleryWidth = 1180;
                }
                imgW = (galleryWidth / cols) - 40;
                
                imgH1 = imgW*heightRate1;
                imgH2 = imgW*heightRate2;
                
        
        
                // 이미지 너비
                $('.gallery .list').css({width: imgW});
                $('.gallery img').removeClass('on');
                if (btnIndex === 0) {
        
                    // 줌 효과
                    $('.list').removeClass('on');
        
                    if (cols === 3) {
                        $('.list1').stop().show().animate({top: (imgH1 + 40) * 0, left: 0}, 300);
                        $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                        $('.list3').stop().show().animate({top: (imgH1 + 40) * 0, left: (imgW * 2) + (40 * 2)}, 300);
        
                        $('.list4').stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list5').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                        $('.list6').stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                        $('.list7').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list8').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                        $('.list9').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                        $('.list10').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list11').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40 + imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                        $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40 + imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                        rows = 4; 
                        ulH = ((imgH1 * 2) + (imgH2 * 2)) + (40 * (rows - 1));
                    } else if (cols === 2) {
                        $('.list1').stop().show().animate({top: (imgH1 + 40) * 0, left: 0}, 300); 
                        $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                        
                        $('.list3').stop().show().animate({top: (imgH1 + 40) * 1, left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list4').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 1) + (40 * 1)}, 300);
                        
                        $('.list6').stop().show().animate({top: (imgH1 + 40) * 2, left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list5').stop().show().animate({top: (imgH2 + 40) * 2, left: (imgW * 1) + (40 * 1)}, 300);
        
                        $('.list7').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list8').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                        
                        $('.list9').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list10').stop().show().animate({top: ((imgH2 + 40) * 3) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                        
                        $('.list12').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                        $('.list11').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
        
                        rows = 6; 
                        ulH = ((imgH1 * 2) + (imgH2 * 4)) + (40 * (rows - 1));
                    } else {
                        $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300); 
                        $('.list2').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);             
                        $('.list3').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: 0}, 300);
                        $('.list4').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: 0}, 300);
                        $('.list6').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 2), left: 0}, 300);
                        $('.list5').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 3), left: 0}, 300);
                        $('.list7').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
                        $('.list8').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 3), left: 0}, 300);               
                        $('.list9').stop().show().animate({top: ((imgH1 + 40) * 4) + ((imgH2 + 40) * 4), left: 0}, 300);
                        $('.list10').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 4), left: 0}, 300);                
                        $('.list12').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 5), left: 0}, 300);
                        $('.list11').stop().show().animate({top: ((imgH1 + 40) * 5) + ((imgH2 + 40) * 6), left: 0}, 300);
        
                        rows = 12; 
                        ulH = ((imgH1 * 6) + (imgH2 * 6)) + (40 * (rows - 1));
                    }
        
                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height: ulH}, 300);
        
                } else if (btnIndex === 1) {
                    // 줌 효과
                    // 줌 효과
                    $('.list').removeClass('on');
        
        
                    $('.list1').hide(); 
                    $('.list3').hide();
                    $('.list7').hide();
                
                    switch(cols) {
                        case 3:
                            $('.list2').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list4').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list6').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                        
                            $('.list5').stop().show().animate({top: (imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list8').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list9').stop().show().animate({top: (imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                            $('.list10').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list11').stop().show().animate({top: (imgH2 + 40 + imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list12').stop().show().animate({top: (imgH2 + 40 + imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                            rows = 3; 
                            ulH = (imgH1 * 1) +(imgH2 * 2) + (40 * (rows - 1));
                            break;
                        case 2:
                            $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list4').stop().show().animate({top: (imgH2 + 40) * 0, left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list5').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 0) + (40 * 0)}, 300);           
                            $('.list6').stop().show().animate({top: (imgH2 + 40) * 1, left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list8').stop().show().animate({top: ((imgH2 + 40) * 1) + ((imgH1 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list9').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list10').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list11').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list12').stop().show().animate({top: ((imgH2 + 40) * 2) + ((imgH1 + 40) * 2), left: (imgW * 1) + (40 * 1)}, 300);
        
                            rows = 5; 
                            ulH = (imgH1 * 2) + (imgH2 * 3) + (40 * (rows - 1));
                            break;
                        default:
                            $('.list2').stop().show().animate({top: (imgH2 + 40) * 0, left: 0}, 300);
                            $('.list4').stop().show().animate({top: (imgH2 + 40) * 1, left: 0}, 300);                   
                            $('.list6').stop().show().animate({top: (imgH2 + 40) * 2, left: 0}, 300);           
                            $('.list5').stop().show().animate({top: (imgH2 + 40) * 3, left: 0}, 300);                    
                            $('.list8').stop().show().animate({top: ((imgH2 + 40) * 3) + ((imgH1 + 40) * 1), left: 0}, 300);
                            $('.list9').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 1), left: 0}, 300);                    
                            $('.list10').stop().show().animate({top: ((imgH2 + 40) * 4) + ((imgH1 + 40) * 2), left: 0}, 300);
                            $('.list11').stop().show().animate({top: ((imgH2 + 40) * 5) + ((imgH1 + 40) * 2), left: 0}, 300);                 
                            $('.list12').stop().show().animate({top: ((imgH2 + 40) * 5) + ((imgH1 + 40) * 3), left: 0}, 300);
        
                            rows = 9; 
                            ulH = (imgH1 * 3) + (imgH2 * 6) + (40 * (rows - 1));
                    }
        
                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height: ulH}, 300);
        
                } else if (btnIndex === 2) {
                    // 줌 효과
                    $('.list').removeClass('on');
        
                    $('.list1').hide();
                    $('.list4').hide();
                    $('.list5').hide();
                    $('.list10').hide();
                    $('.list11').hide();
        
                    switch(cols) {
                        case 3:
                            $('.list2').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list3').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list6').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                            
                            $('.list8').stop().show().animate({top: (imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list7').stop().show().animate({top: (imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list9').stop().show().animate({top: (imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                            $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
        
                            rows = 3; 
                            ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                            break;
                        case 2:
                            $('.list2').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list6').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                            $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list7').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 2), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list9').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
        
                            $('.list12').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
        
                            rows = 4; 
                            ulH = (imgH1 * 2) + (imgH2 * 2) + (40 * (rows - 1));
                            break;
                        default:
                            $('.list2').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                            $('.list6').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);                   
                            $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 2), left: (imgW * 0) + (40 * 0)}, 300);                   
                            $('.list7').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list9').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: (imgW * 0) + (40 * 0)}, 300);
        
                            rows = 7; 
                            ulH = (imgH1 * 3) + (imgH2 * 4) + (40 * (rows - 1));
                    }
                
                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height: ulH}, 300);
                } else if (btnIndex === 3) {
                    // 줌 효과
                    $('.list').removeClass('on');
        
                    $('.list2').hide();
                    $('.list4').hide();
                    $('.list6').hide();
                    $('.list7').hide();
                    $('.list9').hide();
                
                    switch(cols) {
                        case 3:
                            $('.list1').stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list3').stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list5').stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                            
                            $('.list8').stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list10').stop().show().animate({top: (imgH1 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list12').stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                            $('.list11').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 0) + (40 * 0)}, 300);
        
                            rows = 3; 
                            ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                            break;
                        case 2:
                            $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list3').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                           
                            $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);     
                            $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list10').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list12').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list11').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
        
                            rows = 4; 
                            ulH = ((imgH1 * 3) + (imgH2 * 1)) + (40 * (rows - 1));
                            break;
                        default:
                            $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300);
                            $('.list3').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);       
                            $('.list5').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: 0}, 300);     
                            $('.list8').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 0), left: 0}, 300);                   
                            $('.list10').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: 0}, 300);
                            $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 2), left: 0}, 300);                
                            $('.list11').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
        
                            rows = 7; 
                            ulH = ((imgH1 * 4) + (imgH2 * 3)) + (40 * (rows - 1));
                    }
        
                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height: ulH}, 300);
                } else if (btnIndex === 4) {
                    // 줌 효과
                    $('.list').removeClass('on');
        
                    $('.list2').hide();
                    $('.list3').hide();
                    $('.list6').hide();
                    $('.list9').hide();
                
                    switch(cols) {
                        case 3:
                            $('.list1') .stop().show().animate({top: 0, left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list4') .stop().show().animate({top: 0, left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list5') .stop().show().animate({top: 0, left: (imgW * 2) + (40 * 2)}, 300);
                            
                            $('.list7') .stop().show().animate({top: (imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list10').stop().show().animate({top: (imgH2 + 40), left: (imgW * 1) + (40 * 1)}, 300);
                            $('.list8') .stop().show().animate({top: (imgH1 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                            $('.list12').stop().show().animate({top: (imgH1 + 40 + imgH1 + 40), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list11').stop().show().animate({top: (imgH1 + 40 + imgH2 + 40), left: (imgW * 2) + (40 * 2)}, 300);
        
                            rows = 3; 
                            ulH = ((imgH1 * 2) + (imgH2 * 1)) + (40 * (rows - 1));
                            break;
                        case 2:
                            $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list4').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list7').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list10').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 0), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list8').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: (imgW * 1) + (40 * 1)}, 300);
                            
                            $('.list12').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: (imgW * 0) + (40 * 0)}, 300);
                            $('.list11').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 2), left: (imgW * 1) + (40 * 1)}, 300);
        
                            rows = 4; 
                            ulH = ((imgH1 * 2) + (imgH2 * 2)) + (40 * (rows - 1));
                            break;
                        default:
                            $('.list1').stop().show().animate({top: ((imgH1 + 40) * 0) + ((imgH2 + 40) * 0), left: 0}, 300);
                            $('.list4').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 0), left: 0}, 300);                   
                            $('.list5').stop().show().animate({top: ((imgH1 + 40) * 1) + ((imgH2 + 40) * 1), left: 0}, 300);
                            $('.list7').stop().show().animate({top: ((imgH1 + 40) * 2) + ((imgH2 + 40) * 1), left: 0}, 300);                 
                            $('.list10').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 1), left: 0}, 300);
                            $('.list8').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 2), left: 0}, 300);                
                            $('.list12').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 3), left: 0}, 300);
                            $('.list11').stop().show().animate({top: ((imgH1 + 40) * 3) + ((imgH2 + 40) * 4), left: 0}, 300);
        
                            rows = 8; 
                            ulH = ((imgH1 * 4) + (imgH2 * 4)) + (40 * (rows - 1));
                    }
        
                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height: ulH}, 300);
                }
        
            }
            responseGallery();

            // modal
            let cnt = 13;
            let imgSrc = '';

            $('#section8 .img-box').on({
                click: function(e){
                    e.preventDefault();
                    $('#galleryModal').stop().fadeIn(300);
                    
                    // 현재(this)클릭한 박스의 자식요소 이미지 속성 중 src를 가져오기
                    imgSrc = $(this).find('img').attr('src');
                    $('.gallery-modal-img').attr('src', imgSrc);

                    // 스크롤바 없애기
                    $('html').addClass('on');

                    // cnt
                    cnt = $(this).find('img').data('num');
                }
            });
            $('#galleryModal .close-btn').on({
                click: function(e){
                    e.preventDefault();
                    $('#galleryModal').stop().fadeOut(300);

                    // 스크롤바 다시 돌려놓기
                    $('html').removeClass('on');
                }
            });

            $('#galleryModal .img-btn').on({
                click: function(e){
                    e.preventDefault();
                    e.stopPropagation(); //클릭이벤트를 하면 부모에게 이벤트가 전파되는데, 그걸 막는 것
                    nextImageSlide();
                }
            });
            $('#galleryModal .container').on({
                click: function(e){
                    e.preventDefault();
                    $('#galleryModal').stop().fadeOut(300);

                    // 스크롤바 다시 돌려놓기
                    $('html').removeClass('on');
                }
            });

            function modalImage(){
                imgSrc = `./img/photography-img${cnt}.jpg`;
                $('.gallery-modal-img').stop().fadeOut(0).fadeIn(600).attr('src', imgSrc);
            }
            function nextImageSlide(){
                cnt++;
                if (cnt > 24) {
                    cnt = 13;
                }
                modalImage();
            }
            function prevImageSlide(){
                cnt--;
                if (cnt < 13) {
                    cnt = 24;
                }
                modalImage();
            }
            // next click event
            $('.next-btn').on({
                click(e){
                    e.stopPropagation();
                    nextImageSlide();
                }
            });

            // prev click event
            $('.prev-btn').on({
                click(e){
                    e.stopPropagation();
                    prevImageSlide();
                }
            });
        }
        section15(){
            // 비동기전송방식사용
            // API->웹페이지->AJAX,API->서버사이드스크립언어(JSP,JPA,PHP(mysql),ASP..)->데이터베이스

            $('.send-btn').on({
                click(e){
                    e.preventDefault();

                    const irum = $('#userName').val(); //name말고 id속성으로해줘야 코딩이 간단해짐
                    const email = $('#userEmail').val();
                    const message = $('#userMessage').val();
                    const toDay = `${new Date().getFullYear()+1}-${new Date().getMonth()}-${new Date().getDate()}`;
                    const formData = {
                        이름: irum,
                        이메일: email,
                        메시지: message,
                        날짜: toDay
                    };
                    $.ajax({
                        // ajax는 제이쿼리를 포괄하는 개념(이벤트를 실행시키는 모든 것을 API라고 함)
                        url: 'https://qkrguswls309.dothome.co.kr/photograpy_8/form_mail_ajax_insert.php', //form의 action부분, 서버파일 폼데이터를 받음
                        // 마이닷홈에서 유료전환-서비스변경-리눅스결제 ,,, 상세보기 - 무료SSL신청하기 - 서비스상품선택할때 유료도메인이 있어야함(리눅스결제 후에 해야함) ,,,, 신청 후에는 하루이틀 기다려야함 ,,,, 도메인 - 도메인검색 - 도메인신청하기
                        type: 'POST',
                        data: formData, //폼데이터, php에 폼데이터를 보냄
                        success(result){ //변수이름 맘대로!, 응답결과확인
                            console.log(result.includes('성공'));
                            console.log(`AJAX 성공 ${result}`);

                            // 1초후에 실행되도록
                            setTimeout(()=>{
                                if (result.includes('성공') === true){
                                    $('.error-message').removeClass('on');
                                    $('.success-message').addClass('on');
                                    // 초기화
                                    $('#userName').val('');
                                    $('#userEmail').val('');
                                    $('#userMessage').val('');
                                } else {
                                    // required(필수입력사항)해놔서 내용이 들어갈때까지 기다림 so 에러메시지 안뜸
                                    $('.success-message').removeClass('on');
                                    $('.error-message').addClass('on');
                                    alert("다시 확인하고 시도해주세요.");
                                }
                            }, 1000); 
                        },
                        error(error){
                            console.log(`AJAX 실패 ${error}`);
                        }
                    });
                }
            });
        }
    }
    // 클래스 생성자(new) 만들기
    const newPhotography = new Photography(); //클래스도 함수임
    newPhotography.init();

})(jQuery, window, document);