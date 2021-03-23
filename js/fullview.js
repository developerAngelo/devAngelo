
window.onload = function(){
    // alert("Welcome");

    var content_row = document.getElementById('content_row');
    var fullView_page = this.document.getElementById('fullView_page');

    var ramen_page = document.getElementById('ramen_page');
    var itadaki_page = document.getElementById('itadaki_page');
    var business_page = document.getElementById('business_page');
    var motivation_page = document.getElementById('motivation_page');
    var android_page = document.getElementById('android_page');


    var closing = document.getElementById('closing');
    var btnRamen = document.getElementById('btnRamen');
    var btnItadaki = document.getElementById('btnItadaki');
    var btnBusiness = document.getElementById('btnBusiness');
    var btnMotivation = document.getElementById('btnMotivation');
    var btnAndroid = document.getElementById('btnAndroid');

    hideall();

    closing.onclick = function(){
        content_row.style.display = 'block';
        hideall();
    }
    
    btnRamen.onclick = function(){
        content_row.style.display = 'none';
        fullView_page.style.display = 'block';
        ramen_page.style.display = 'block';
    }

    btnItadaki.onclick = function(){
        content_row.style.display = 'none';
        fullView_page.style.display = 'block';
        itadaki_page.style.display = 'block';
    }

    btnBusiness.onclick = function(){
        content_row.style.display = 'none';
        fullView_page.style.display = 'block';
        business_page.style.display = 'block';
    }

    btnMotivation.onclick = function(){
        content_row.style.display = 'none';
        fullView_page.style.display = 'block';
        motivation_page.style.display = 'block';
    }

    btnAndroid.onclick = function(){
        content_row.style.display = 'none';
        fullView_page.style.display = 'block';
        android_page.style.display = 'block';
    }

    function hideall(){
        fullView_page.style.display = 'none';
        ramen_page.style.display = 'none';
        itadaki_page.style.display = 'none';
        business_page.style.display = 'none';
        motivation_page.style.display = 'none';
        android_page.style.display = 'none';
    }




}