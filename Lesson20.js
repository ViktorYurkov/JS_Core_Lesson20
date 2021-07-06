function addToLocalStorage(key, value){
    if(value === undefined){
        localStorage.removeItem('key')
    }else{
        localStorage.setItem(key, JSON.stringify(value));
    }
};

function setCookie(name,value,live){
        name = encodeURIComponent(name);
    value = encodeURIComponent(value);
    var cookieString = name + "=" + value
    if(typeof live === 'number'){
        cookieString += ';max-age='+(live*60*60*24);
    }; 
    if(typeof live === 'date'){
        cookieString += ';expires='+live;
    }; 
    
    document.cookie = cookieString;
};

$(document).ready(function () {
    $('#sendDataUser').click(function () {
        var userName = $('#userName').val();
        var userAge = $('#userAge').val();
        
        if (+userAge > 1 & +userAge < 100) {
            addToLocalStorage('userName', userName);
            addToLocalStorage('userAge', userAge);
            setCookie('userName', userName, '20.03.2020');
            setCookie('userAge', userAge, 1);
            /*
            var data = $('#userFormPost input[type="text"]').map(function (index, element) {
                if (this.value != '') {
                    return this.id + '=' + this.value + '';
                };
            }).get().join('&');

            $.post('/user-data', data, function () {
                console.log('end Post');
            });
            */
            console.log(document.cookie);
        } else {
            $('#userAge').val(null);
            $('#userAge').attr('placeholder', 'ввести вік від 1 до 100');
        };
    });
});


