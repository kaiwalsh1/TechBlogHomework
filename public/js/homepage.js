$(document).ready(function() {
    const titleField = $('#titleField');
    const contentField = $('#contentField');
    const addBlogBtn = $('#addBlogBtn');
    const editBlogBtn = $('#editBlogBtn');
    const deleteBlogBtn = $('#deleteBlogBtn');

    addBlogBtn.on('click', function(event) {
        event.preventDefault();
        await $.post('/api/blogs/newblog', {
            title: titleField.val(),
            content: contentField.val(),
        });
        window.location.href = '/homepage';
    });

    // editBlogBtn.on('click', function(event) {
    //     event.preventDefault();

    // })

});