var id_counter = 0;
function addCard(interest){
    var tweet = $('<div class="card" id="'+String(id_counter)+'"><img class="card-image-top" src="tweet.png" alt="Twitter logo" style="height:30vh; width: 100%;object-fit: cover;"><div class="card-body"><a class="btn btn-primary btn-sm" style="background-color:red; border:none; border-radius: 50%; float:right;" onclick="deleteCard('+String(id_counter)+')">-</a><h5 class="card-title">Tweet</h5><p>This is a sample tweet!</p></div></div>'); 
    tweet.appendTo('#'+interest);
    id_counter+=1;
}

function deleteCard(elem){
    document.getElementById(elem).remove();
}

