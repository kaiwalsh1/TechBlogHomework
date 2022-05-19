$(document).ready(function() {
	const addCommentBtn = $("#addCommentBtn");
	const newComment = $("#newComment");
	const newComBlogId = $("#newComBlogId");

	console.log(addCommentBtn);
	
    addCommentBtn.on('click', async function(event) {
		event.preventDefault();
		console.log(newComment.val());
		await $.post('/api/comments/newcomment', {
			text: newComment.val(),
			blogId: newComBlogId.val(),
		});
		window.location.reload();
	});
	
});