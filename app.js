

$('#submit').on('click', function() {
	console.log($('#textArea').val());
	var word = $('#textArea').val();
	$('#word').text(`Word: ${word}`);

	// ajax request
	$.ajax({
	url: `https://wordsapiv1.p.mashape.com/words/${word}/definition`,
	headers: {
		'X-Mashape-Key': '106624fc06msh1baa630c0f6146dp135500jsn211d59e66158'
	},
	method: 'GET',
	success: function(response) {
		console.log(response);
		var definition = response.definition[0];
		$('#definition').text(`Definition: ${definition}.`);
	},
	error: function() {
		$('#definition').text('Error: Word Not Found');
	}
})
});

// unirest.get("https://wordsapiv1.p.mashape.com/words/lovely/synonyms")
// .header("X-Mashape-Key", "106624fc06msh1baa630c0f6146dp135500jsn211d59e66158")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

function isInteger(arg) {
	if (Number.isInteger(arg)) {
		return true;
	}
	return false;
};
