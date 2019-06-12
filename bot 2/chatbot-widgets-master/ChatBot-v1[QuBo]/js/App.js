let render_space_id = "chat-space";
let token = '[DialogFlow Access Token]';

//Get the message from input Text box and pop it into 
function popInputMessage(){
    let message = $("#txt-input").val().trim();

    //Validation for Empty String/Message
    if(message != ''){
        $("#txt-input").val('');
        let obj_utterance = DialogUtterance(message, "user");
        let bubble = Bubble(obj_utterance, BubbleType.SEND);
        bubble.render(render_space_id);
        getResponseDialogFlow(obj_utterance.getDialogUtterance());
    }
}

function getResponseDialogFlow(txt_dialog_utterance){
    let client = new ApiAi.ApiAiClient({accessToken: token});
    response = client.textRequest(txt_dialog_utterance);
   response.then((value)=>{
        response_utterance = DialogUtterance(value['result']['fulfillment']['speech'], 'simple-bot-'+value['id'], new Date(value['timestamp']));
        Bubble(response_utterance, BubbleType.RECIEVE).render(render_space_id);
   });
}

//Send on button click
$("#btn-send").click(popInputMessage);

//Send on Enter Hit
$(document).keypress((event) => {
    if(event.which == 13){
        popInputMessage();
    }
    
});
