// ==UserScript==
// @name         Douban AutoReply
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.douban.com/group/topic/*
// @grant        window.close
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function random_int(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max-min)) + min;
    }
    
    var topic = '西溪金座loft (文一西路荆长大道)';
    var title = document.getElementsByTagName('h1')[0].textContent;
    var is_right_topic = (title.toUpperCase().indexOf(topic.toUpperCase()) == -1 ? false: true);
    
    
    if (! is_right_topic) {
        console.log('This is not a' + topic + 'topic!');
        return;
    }
    
    var replyments = ['m', 'mark'];
    var has_captcha = document.getElementById('captcha_image');
    if (has_captcha){
        console.log('There is a captcha image in this page, we can do it later, Not now...');
        return;
    }
    
    var textarea = document.querySelector('textarea[id=last]');
    if(!textarea){
        console.log('You have posted a comment, close the window and exit.');
        setTimeout(function(){window.close();}, 3000);
        return;
    }
    
    textarea.innerHTML = replyments[random_int(0, replyments.length)];
    
    var submit_button = document.querySelector('input[name=submit_btn]');
    submit_button.click();
})();
    