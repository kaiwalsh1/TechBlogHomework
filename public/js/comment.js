$(document).ready(function() {
	const addComment = $("#addCommentBtn");
	const newComment = $("#newComment");
	const newComBlogId = $("#newComBlogId");
	
    addCommentBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/comments/newcomment', {
			text: newComment.val(),
			blogId: newComBlogId.val(),
		});
		window.location.reload();
	});
});