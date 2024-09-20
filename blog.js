document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment');
    const blogPosts = document.getElementById('blog-posts');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        // Crear un nuevo comentario
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p>${commentInput.value}</p>`;
        
        // Agregar el comentario a la sección de blog
        blogPosts.appendChild(newComment);
        
        // Limpiar el formulario
        commentInput.value = '';
    });
});
