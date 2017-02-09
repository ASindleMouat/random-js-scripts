//Knockout
$(document).ready(function(){



  var TrackFile = function (data) {
    var self = this;
    self.Barcode = ko.observable(data.Barcode());
  }

  function oTrackFile() {
    var self = this;
    self.Barcode = ko.observable("");
  };

  var viewModelTrackFiles = function () {

    var self = this;
    self.trackfile = new oTrackFile();
    self.files = ko.observableArray();
    self.removeFile = function (file) {
      self.files.remove(file);
    }
    self.addFile = function () {
      var index = 0;

      if(index < self.files().length){
        var i = 0;

        for (x in self.files()){
          var fb = self.files()[x].Barcode();
          var tb = self.trackfile.Barcode();

          if(fb==tb){
            i += 1;
          }
        }
        if(i > 0){
          alert("Error: File Already Exists in List");
        }
        else {
          self.files.push(new TrackFile(self.trackfile));
        }
      }
      else {
        self.files.push(new TrackFile(self.trackfile));
      }
    }
  }

  // Define View Model masterVM
  var masterVM = (function () {
    var self = this;
    self.viewModelTrackFiles = new viewModelTrackFiles(),
      ko.applyBindings(masterVM);
  });

  
  
});
