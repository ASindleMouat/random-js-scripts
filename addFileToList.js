/*!
* addFileToList.js
* ASindleMouat
*/
function addFileToList() {
    $('#trackForm').parsley();
    $('#trackForm').parsley().validate();
    $('#trackForm').parsley().whenValid().done(function () {
        viewModelTrackFiles.addFile(viewModelTrackFiles.trackfile);
        viewModelTrackFiles.trackfile.Barcode("");
    });
}
$(document).ready(function () {
    //Autocomplete Turned Off
    $('form,input,select,textarea').attr("autocomplete", "off")
});
