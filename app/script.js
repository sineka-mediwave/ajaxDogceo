function getAllDogsFromApi() {
  // https://dog.ceo/api/breeds/list/all
  const url = "https://dog.ceo/api/breedsss/list/all";
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
    complete: function () {
      console.log("API request completed");
    },
  });
}

function getRandomImageOfDog(dogBreed) {
  // https://dog.ceo/api/breed/affenpinscher/images/random
  const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
  $.ajax(url, {
    method: "GET",
    success: function (resp) {
      console.log("Api request success");
      console.log(resp);
    },
    error: function () {
      console.log("Api request error");
    },
  });
}
