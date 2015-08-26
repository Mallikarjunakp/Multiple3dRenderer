function read_file(f) {

	var pBar = document.getElementById("pBar"+count);
	var reader = new FileReader();
				
	reader.onerror = function(e)
	{
		var error_str="";
		switch(e.target.error.code)
		{
			case e.target.error.NOT_FOUND_ERR:
				error_str="File not found";
			break;

			case e.target.error.NOT_READABLE_ERR:
				error_str="Can't read file - too large?";
			break;

			case e.target.error.ABORT_ERR:
				error_str="Read operation aborted";
			break; 
						
			case e.target.error.SECURITY_ERR:
				error_str="File is locked";
			break;

			case e.target.error.ENCODING_ERR:
				error_str="File too large";

			break;

			default:
				error_str="Error reading file";
		}
		alert(error_str);
		return after_error();
	}       
					
	reader.onload = function(e)
	{
		loadMesh(f.name, e.target.result);
		pBar.style.display = "none";
	};
	
	reader.onprogress = function(e)
	{
		pBar.value=e.loaded / e.total*100;
	};	
	
	reader.readAsArrayBuffer(f);
}