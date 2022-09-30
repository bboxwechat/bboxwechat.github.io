var BOB = {
    odCode: '2985423',
    h5Url: 'http://www.aefzy.com/entry/register?agent_code=5885115',
    pcUrl: 'https://www.4r2na.com:9900/entry/register?agent_code=5885115',
    dolowur: 'https://www.v7le5.com:9122/?agent_code=5885115',
}
var boyu = {
    odCode: '0465906',
    h5Url: 'https://www.boyu1018.com:30112/entry/register/?i_code=5586330',
    pcUrl: 'https://www.boyu1001.com:35559/register/?i_code=5586330',
}

//域名复制 
var easy_domain = "www.gzhrqm.com";

//判断是否是移动设备
var ua = navigator.userAgent;
var UA = {
    Android: function() { //安卓
        return ua.match(/Android/i) ? true : false;
    },
    BlackBerry: function() { //黑莓
        return ua.match(/BlackBerry/i) ? true : false;
    },
    IOS: function() { //IOS
        return ua.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    //这个其实没啥必要了,可以不用判断这个，毕竟IE是一种古老的东西
    Windows: function() {
        return ua.match(/IEMobile/i) ? true : false;
    },
    isMobile: function() { //移动设备
        return UA.Android() || UA.BlackBerry() || UA.IOS() || UA.Windows();
    }
}

function bob_fun() {
    if (UA.isMobile()) {
        window.open(BOB.h5Url, '_blank')
            // window.location.href = BOB.h5Url;
    } else {
        window.open(BOB.pcUrl, '_blank')
            // window.location.href = BOB.pcUrl;
    }
}

function bob_fun1() {
    if (UA.isMobile()) {
        window.open(BOB.dolowur, '_blank')
            // window.location.href = BOB.h5Url;
    } else {
        window.open(BOB.dolowur, '_blank')
            // window.location.href = BOB.pcUrl;
    }
}


function boyu_fun() {
    if (UA.isMobile()) {
        window.open(boyu.h5Url, '_blank')
            // window.location.href = boyu.h5Url;
    } else {
        window.open(boyu.pcUrl, '_blank')
            // window.location.href = boyu.pcUrl;
    }
}