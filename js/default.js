$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true
	});
});

$(document).ready(function(){
    
   
        var imageUrl = "/bg.jpg";
        $(".box").css("background-image", "url(" + imageUrl + ")");
       
});