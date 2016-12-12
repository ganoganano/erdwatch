var gulp = require("gulp");
var exec = require('child_process').exec;

gulp.task("watch", function() {
  var targets = ['./*.er',];
  var watcher = gulp.watch(targets, []);
  watcher.on('change', function(event) {
    var command = "stack exec erd -- -i " + event.path + " -o " + event.path + ".png"
    exec(command, function (err, stdout, stderr) {
      console.log(stdout);
    });
  });
});
