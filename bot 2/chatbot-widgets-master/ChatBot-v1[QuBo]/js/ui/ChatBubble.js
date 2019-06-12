/**
 * @description An Enumeration to accompany Bubble object
 */
let BubbleType = {
    SEND : true,
    RECIEVE: false
}

/**
 * @param {DialogUtterance} obj_utterance
 * @param {BubbleType} bubble_type The type of bubble required
 */
var Bubble = function(obj_utterance, bubble_type){

    let _message = obj_utterance.getDialogUtterance();
    let _date = obj_utterance.getUtteranceDate();

    // Choosing the template attributes based on the type of Bubble[SEND/RECIEVE]
    if(bubble_type){
        var dialog_direction = "float-right flex-row";
        var text_color = "text-light";
        var text_align_direction = 'text-sm-left';
        var bg_color = "bg-secondary";
        var icon = "user";
    }else{
        var dialog_direction = "float-left flex-row-reverse";
        var text_color = 'text-secondary';
        var text_align_direction = 'text-sm-right';
        var bg_color = "bg-light";
        var icon = "robot";
    }

    var _template_common = `
        <div id="dialog-${_date.valueOf()}" class="container ">
            <div class=" ${dialog_direction} card ${bg_color} ${text_color} justify-content-around align-items-center shadow">
                <span id=${obj_utterance.getUserId()+'-'+_date.valueOf()} class=" card-body ${text_align_direction}">
                    <p class="card-text text">
                    ${_message}
                    </p>
                </span>
                <div class=" d-flex flex-column justify-content-around align-items-center p-1">
                    <i class="fas fa-${icon} "></i>
                    <span class="">${_date.getHours()+`:`+_date.getMinutes()}</span>
                </div>
            </div>
        </div>
    `

    let public_members = {
        render : (parent_id) => {
            let div = $(_template_common);
            $('#'+parent_id).append(div);
            $('#'+parent_id).animate({
                scrollTop: ($('#'+parent_id).get(0).scrollHeight+20)
            }, 500);
        }
    }

    return public_members;
}