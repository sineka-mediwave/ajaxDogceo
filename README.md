# Dog Ceo using Ajax

```
  // https://dog.ceo/api/breeds/list/all
  // https://dog.ceo/api/breed/affenpinscher/images/random

```

While fetching data from the api, the page have to load (like loading....). Then droplist for choose the dog breed. while click the button, the dog image will be loaded form the api.

## Dropdown list usng jQuery

calling function inside the api succes

```
 const selectDog = Object.keys(resp.message);
      console.log(selectDog);
      addOption(selectDog);
```

From api while getting the list of all breeds name, append them to the option category.

```
function addOption(selectDog) {
  console.log(selectDog[0]);
  for (let i = 0; i < selectDog.length; i++) {
    let dogName = selectDog[i];
    $("#dogBreed").append(`<option value="${dogName}">
    ${dogName}
</option>`);
  }
}
```
