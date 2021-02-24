const endpointURL = "http://localhost:9000/graphql"

export async function loadMovies() {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      query: `{
        movies {
          _id
          name
          genre {
            type
          }
          year
          language {
            name
          }
          image
        }
      }`
    })
  });
  const responseBody = await response.json();
  return responseBody.data.movies;
}


export async function loadFilterMovies(genre) {
  const response = await fetch(endpointURL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      query: `query($genre: String){
        filterMovies(genre:$genre){
        name
        year
        image
        language{name}
        genre{type}
      }
    }`,
    variables:{genre}
    })
  });
  const responseBody = await response.json();
  return responseBody.data.filterMovies;
}
