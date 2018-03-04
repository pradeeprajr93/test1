window.onscroll = function() {scrollCheck()};

function scrollCheck() {
    console.log('scrolling!');
    var page_1_height = document.getElementById('page-1').getBoundingClientRect().height;
    var page_2_height = document.getElementById('page-2').getBoundingClientRect().height;
    var page_3_height = document.getElementById('page-3').getBoundingClientRect().height;
    var page_4_height = document.getElementById('page-4').getBoundingClientRect().height;
    var current_scroll_pos = window.scrollY;

    if(current_scroll_pos > page_1_height/2){
        document.getElementById('exp-button-1').style.display = 'none';
    }
    if(current_scroll_pos <= page_1_height/2){
        document.getElementById('exp-button-1').style.display = 'flex';
    }

    if(current_scroll_pos > page_1_height + (page_2_height/1.5)){
        document.getElementById('exp-button-2').style.display = 'none';
    }
    if(current_scroll_pos <= page_1_height + (page_2_height/1.5)){
        document.getElementById('exp-button-2').style.display = 'flex';
    }

    if(current_scroll_pos > page_1_height + page_2_height + (page_3_height/2)){
        document.getElementById('exp-button-3').style.display = 'none';
    }
    if(current_scroll_pos <= page_1_height + page_2_height + (page_3_height/2)){
        document.getElementById('exp-button-3').style.display = 'flex';
    }
}