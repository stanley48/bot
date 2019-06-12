
/**
 * 
 * @param {string} render_space_id The id of the parent element inside which the filler is appended
 */
var WaitFiller = function(render_space_id){
    var _filler_id = 'wait-filler';
    var _filler_template = $(`
    <div id="`+_filler_id+`" class="container text-secondary wait-filler">
        ...
    </div>
    `);
    
    let public_members = {
        showWaitFiller: function(){
            $('#'+render_space_id).append(_filler_template);
        },

        removeWaitFiller: function(){
            $('#'+render_space_id).find('#'+_filler_id).remove();
        }
    }

    return public_members;
}