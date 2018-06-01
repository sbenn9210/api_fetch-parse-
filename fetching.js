var container_main = $("#container")

fetch('http://www.omdbapi.com/?s=batman&apikey=9c92f8bb')
.then(function(response) {
  return response.json()
}).then(function(json){
   container_main.html('')
   console.log(json.Search)
   var index = 0
   json.Search.forEach(function(item) {
          let movieCards = `
              <div class="container">
                <div class="col col-md-8 col-lg-6 col-xl-6" class="card-deck">
                <div class="card">
                  <img class="card-img-top" src="${item.Poster}" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">${item.Title}</h5>
                    <p>
                    <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample_${index}" aria-expanded="false" aria-controls="collapseExample">
                      More Information
                    </button>
                    </p>
                    <div class="collapse" id="collapseExample_${index}">
                    <div class="card card-body">
                      imdbID: ${item.imdbID} <br>
                      Movie Year: ${item.Year} <br>
                      Type: ${item.Type}
                    </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
                </div>
              </div>
            </div>

              `

        container_main.append(movieCards)
        index = index + 1

   })


  })
