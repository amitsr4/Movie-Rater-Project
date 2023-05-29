const TOKEN = "9f5e580e5fa1e43b5a7a48941a7652c7246e1148";

export class API {
  static loginUser(body) {
    return fetch(`http://127.0.0.1:8000/auth/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }



  static updateMovie(mov_id, body) {
    //a static method so i don't need to initiate class API
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static createMovie(body) {
    return fetch(`http://127.0.0.1:8000/api/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static deleteMovie(mov_id) {
    return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${TOKEN}`,
      },
    });
  }
}
