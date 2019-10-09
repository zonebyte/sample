

var edit = document.getElementById('new');
var done = document.getElementById('done');
var sendInvoice = document.getElementById('save');
var username = document.getElementById('name');
var school = document.getElementById('sch');
var uni = document.getElementById('uni');
var next = document.getElementById('next');
var hiddentext = document.getElementById('text');

function hop(){
	if (uni.value.length != 0 && username.value.length != 0 && school.value.length != 0){
		username.id = 'not'
		school.id = 'not'
		uni.id = 'not'
		username.disabled= true;
		school.disabled= true;
		uni.disabled= true;
		next.style.display="none";
			edit.addEventListener('click', function(){
			editText();
			sendInvoice.id = 'save';
			sendInvoice.disabled= true;
		})
	}
}

next.addEventListener('click', function() {
	hop();

})

function editText(){
	if (uni.value.length != 0 && username.value.length != 0 && school.value.length != 0){
		username.id = 'plus'
		school.id = 'plus'
		uni.id = 'plus'
		username.disabled= false;
		school.disabled= false;
		uni.disabled= false;
		edit.style.display="none";
		hiddentext.style.display = "block";
	}
}


done.addEventListener('click', function() {
	hiddentext.style.display = "none";
	sendInvoice.id = 'after';
	sendInvoice.disabled= false;
	hop();
	edit.style.display="block";
})








