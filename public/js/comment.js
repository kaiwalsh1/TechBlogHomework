$(document).ready(function() {
	const addCommentBtn = $("#addCommentBtn");
	const newComment = $("#newComment");
	const newComBlogId = $("#newComBlogId");
	
    addCommentBtn.on('click', async function(event) {
		event.preventDefault();
		await $.post('/api/comments/newcomment', {
			text: newComment.val(),
			blogId: newComBlogId.val(),
		});
        console.log(newComment.val());
		window.location.reload();
	});
});