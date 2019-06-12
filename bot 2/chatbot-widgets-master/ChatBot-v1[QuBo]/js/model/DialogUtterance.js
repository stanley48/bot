
/**
 * 
 * @param {string} txt_utterance The chat utterance given by the user.
 * @param {string} txt_user_id An ID that uniquely identifies the user.
 * @description A basic entity which represents all the data required by a chat utterance.
 */
var DialogUtterance = function(txt_utterance, txt_user_id){
    /**
     * Private members 
     */
    let _txt_utterance = txt_utterance;
    let _txt_user_id = txt_user_id;
    let _date_utterace = new Date();
    
    /**
     * Public members 
     */
    var public_members = {
        getDialogUtterance : () => {
            return _txt_utterance;
        },

        getUserId : () => {
            return _txt_user_id;
        },

        getUtteranceDate : (format) => {
            return _date_utterace;
        }
    }

    return public_members;
}