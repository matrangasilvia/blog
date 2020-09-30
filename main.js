$(document).ready(function () {

    var users = [
        'mario', 'giulio', 'alberto', 'claudia'
    ]

    $(".send-comment").click(function () {
        var commentText = $(".comment-text").val();

        var commentContainer = $(".comments-container");
        var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + users[Math.round(Math.random(0, 3))
        ] + '</a>' + commentText + '</li>';

        commentContainer.append(commentRow);

    });
	$("#savePostBtn").click(addPost);
	});

function addPost() {
    var title = $("#postTitle").val();
    var body = $("#postBody").val();
    var post = new Post(title, body, true);
	var contain=$(".container");
   var testo='<div class="card" style="width: 18rem;"><img class="card-img-top" src="..." alt="Card image cap"><div class="card-body"><h5 class="card-title">'+post.title+'</h5><p class="card-text">'+post.body+'</p></div</div>'
 
    contain.append(testo);
	
}
