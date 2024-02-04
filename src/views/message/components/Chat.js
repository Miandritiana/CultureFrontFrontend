import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'jquery-mousewheel';
import './Chat.css';

const Chat = () => {

    // let d, h, m;
    // let i = 0;

    // useEffect(() => {
    //     const $messages = $('.messages-content');
    //     $messages.mCustomScrollbar();

    //     setTimeout(() => {
    //     fakeMessage();
    //     }, 100);

    //     return () => {
    //     // Clean up if needed
    //     };
    // }, []);

    // const updateScrollbar = () => {
    //     $('.messages-content').mCustomScrollbar('update').mCustomScrollbar('scrollTo', 'bottom', {
    //     scrollInertia: 10,
    //     timeout: 0
    //     });
    // };

    // const setDate = () => {
    //     d = new Date();
    //     if (m !== d.getMinutes()) {
    //     m = d.getMinutes();
    //     $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    //     }
    // };

    // const insertMessage = () => {
    //     const msg = $('.message-input').val();
    //     if ($.trim(msg) === '') {
    //     return false;
    //     }

    //     $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //     setDate();
    //     $('.message-input').val(null);
    //     updateScrollbar();

    //     setTimeout(() => {
    //     fakeMessage();
    //     }, 1000 + (Math.random() * 20) * 100);
    // };

    // $('.message-submit').click(() => {
    //     insertMessage();
    // });

    // $(window).on('keydown', (e) => {
    //     if (e.which === 13) {
    //     insertMessage();
    //     return false;
    //     }
    // });

    // const Fake = [
    //     'Hi there, I\'m Fabio and you?',
    //     'Nice to meet you',
    //     'How are you?',
    //     'Not too bad, thanks',
    //     'What do you do?',
    //     'That\'s awesome',
    //     'Codepen is a nice place to stay',
    //     'I think you\'re a nice person',
    //     'Why do you think that?',
    //     'Can you explain?',
    //     'Anyway I\'ve gotta go now',
    //     'It was a pleasure chat with you',
    //     'Time to make a new codepen',
    //     'Bye',
    //     ':)'
    // ];

    // const fakeMessage = () => {
    //     if ($('.message-input').val() !== '') {
    //     return false;
    //     }

    //     $('<div class="message loading new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    //     updateScrollbar();

    //     setTimeout(() => {
    //     $('.message.loading').remove();
    //     $('<div class="message new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //     setDate();
    //     updateScrollbar();
    //     i++;
    //     }, 1000 + (Math.random() * 20) * 100);
    // };


    return (
        <div class="chat">
            <div class="chat-title">
                <h1>Fabio Ottaviani</h1>
                <h2>Supah</h2>
                <figure class="avatar">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>
            </div>
            <div class="messages">
                <div class="messages-content"></div>
            </div>
            <div class="message-box">
                <textarea type="text" class="message-input" placeholder="Type message..."></textarea>
                <button type="submit" class="message-submit">Send</button>
            </div>

        </div>
    );

};
export default Chat;

    