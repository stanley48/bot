let render_space_id = "chat-space";
let token = 'b4544c2b4ac4490cbff10faec956b708';

//Send on button click
$("#btn-send").click(popInputMessage);

//Send on Enter Hit
$(document).keypress((event) => {
    if(event.which == 13){
        event.preventDefault();
        popInputMessage();
    }
    
});

$("#btn-popup").click(()=>{
    $('#box-container').animate({
        width: 'toggle'
    });
    $('#popup-icon').toggleClass('fa-times',500, 'linear');
});

//Get the message from input Text box and pop it into 
function popInputMessage(){
    let message = $("#txt-input").val().trim();
    message = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let wait_filler = WaitFiller(render_space_id);

    //Validation for Empty String/Message
    if(message != ''){
        //reset input area
        $("#txt-input").val('');

        let obj_utterance = DialogUtterance(message, "user");
        let bubble = Bubble(obj_utterance, BubbleType.SEND);

        bubble.render(render_space_id);
        wait_filler.showWaitFiller();
        makeResponse(obj_utterance.getDialogUtterance(),(obj_utterance)=>{
            wait_filler.removeWaitFiller();
            Bubble(obj_utterance, BubbleType.RECIEVE).render(render_space_id);
        });
    }
}

//Connect to DialogFlow and Request for a response
function makeResponse(txt_dialog_utterance, callBackFunction=()=>{}){
    let client = new ApiAi.ApiAiClient({accessToken: token});
    response = client.textRequest(txt_dialog_utterance);

    response.then((value)=>{
            response_utterance = DialogUtterance(value['result']['fulfillment']['speech'], 'simple-bot-'+value['id'], new Date(value['timestamp']));
            callBackFunction(response_utterance);
    });
}
