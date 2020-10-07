$(document).ready(function () {

  

    $(".send-comment").click(function () {
        var commentText = $(".comment-text").val();

        var commentContainer = $(".comments-container");
        var commentRow = '<li class="list-group-item">' + commentText + '</li>';

        commentContainer.append(commentRow);

    });
	


	
	  for(var i = 0; i< posts.length; i++){
        var post = posts[i];
        if(post.public === true){
            createUIPost(post);
			
        }
    }
	$("#savePostBtn").click(addPost);
	var post;
	var etichetta;
	$.get({
		url:"https://api.npoint.io/24620ef625c768a4f3c4",
		success:function(data,textStatus,jqXHR)
		{ articolo=data;
			console.log("data",data);
			for(var i = 0; i< articolo.length; i++){
        var post = articolo[i];
        if(post.public === true)
		createUIPost(post);
	   
		
		else textStatus=204;
		
		
	}}});
    $("#postsRow").append(postContainer);
				
		
	});


	


