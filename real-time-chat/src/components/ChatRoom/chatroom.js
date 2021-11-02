import "./chatroom.css";

const ChatRoom = () => {
    const myName = "blue";
 
    function ChatRoom() {
        
        $(document).on('keydown', 'div.input-div textarea', function(e){
            if(e.keyCode == 13 && !e.shiftKey) {
                e.preventDefault();
                const message = $(this).val();
 
                
                sendMessage(message);
                
                clearTextarea();
            }
        });
    }
 
    
    function createMessageTag(LR_className, senderName, message) {
        
        let chatLi = $('div.chat.format ul li').clone();
 
       
        chatLi.addClass(LR_className);
        chatLi.find('.sender span').text(senderName);
        chatLi.find('.message span').text(message);
 
        return chatLi;
    }
 
    
    function appendMessageTag(LR_className, senderName, message) {
        const chatLi = createMessageTag(LR_className, senderName, message);
 
        $('div.chat:not(.format) ul').append(chatLi);
 
        
        $('div.chat').scrollTop($('div.chat').prop('scrollHeight'));
    }
 
    
    function sendMessage(message) {
        
        const data = {
            "senderName"    : "blue",
            "message"        : message
        };
 
        
        resive(data);
    }
 
    
    function clearTextarea() {
        $('div.input-div textarea').val('');
    }
 
    
    function resive(data) {
        const LR = (data.senderName != myName)? "left" : "right";
        appendMessageTag("right", data.senderName, data.message);
    }
 
    return {
        'init': init
    };
})();
 
$(function(){
    Chat.init();
});