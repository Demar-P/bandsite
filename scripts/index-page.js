let comments = []



const commentContainer = document.querySelector('.comment-container');
const commentForm = document.querySelector('.comment-new__form');

function createCommentElement(comment) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.classList.add('comment--newest');

    const avatarElement = document.createElement('div');
    avatarElement.classList.add('comment__avatar');

    const contentElement = document.createElement('div');
    contentElement.classList.add('comment__content');


    const nameElement = document.createElement('p');
    nameElement.classList.add('comment__name');
    nameElement.textContent = comment.name;

    const dateElement = document.createElement('p');
    dateElement.classList.add('comment__date');
    let currentDate = new Date(comment.timestamp)
    let formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    dateElement.textContent = formattedDate;

    contentElement.appendChild(nameElement);
    contentElement.appendChild(dateElement);
    commentElement.appendChild(avatarElement);
    commentElement.appendChild(contentElement);

    const textSection = document.createElement('div');
    textSection.classList.add('comment__section');
    const textElement = document.createElement('p');
    textElement.classList.add('comment__text');
    textElement.textContent = comment.comment;
    
    textSection.appendChild(textElement);

    contentElement.appendChild(textSection);

    return commentElement;
}


function displayComment() {
    commentContainer.innerHTML = '';


    
    for (const comment of comments) {
        const commentElement = createCommentElement(comment);
        commentContainer.appendChild(commentElement);
    }
}


    
    


function displayNewComment(comment) {
    const commentElement = createCommentElement(comment);
    commentContainer.prepend(commentElement); 
}
    
console.log('this is trying to reverse the order',displayComment())




commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("submit button was clicked")
    
    const name = commentForm.name.value;
    const comment = commentForm.comment.value;
    const currentDate = new Date();
    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    const newComment = {
        name: name,
        comment:comment,   
    };
    console.log("this is the new comment" ,newComment)


    axios.post('https://project-1-api.herokuapp.com/comments?api_key=e5c0f0c1-2a94-4c3f-8166-06280b36bfb6', newComment)
        .then(results => {
        console.log("this is the result from post:",results.data);
        commentForm.name.value = '';
        commentForm.comment.value = '';
        displayNewComment(results.data);
        })       
});





axios.get('https://project-1-api.herokuapp.com/comments?api_key=e5c0f0c1-2a94-4c3f-8166-06280b36bfb6')
    .then(results => {
    comments = results.data.reverse();
    displayComment()
})


