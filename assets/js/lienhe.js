window.onload = function () {
    khoiTao();

    // thêm tags vào khung tìm kiếm
    var tags = ["Samsung", "iPhone", "Huawei", "Oppo", "Mobi"];
    for (var t of tags) addTags(t, "index.html?search=" + t);
}

function nguoidung() {
    var hoten = document.formlh.ht.value;
    var dienthoai = document.formlh.sdt.value;

    if (!checkName(hoten)) {
        addAlertBox('Họ tên không phù hợp.', '#f55', '#000', 3000);
        formlh.ht.focus();
        return false;
    }

    else if (!checkPhone(dienthoai)) {
        addAlertBox('Số điện thoại không phù hợp.', '#f55', '#000', 3000);
        return false;
    }

    addAlertBox('Gửi thành công.', '#5f5', '#000', 3000);
    // document.formlh.reset(); // làm sạch
    return false;
}

function checkName(str) {
    var special = '~!@#$%^&*()_+=-`./*{}[]|\'<>?;0123456789"';

    for (var i = 0; i < str.length; i++) {
        if (Number(str[i])) return false;
        for(var j = 0; j < special.length; j++)
            if (str[i] == special[j]) return false;
    }
    return true;
}

function checkPhone(phone) {
    for(var i =0 ; i< phone.length ;i++)
    {
        if(phone.charAt(i)<"0" || phone.charAt(i)>"9")
            return false;
    }
    return true;
}