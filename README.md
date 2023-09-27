# Dog Ceo using Ajax

```
  // https://dog.ceo/api/breeds/list/all
  // https://dog.ceo/api/breed/affenpinscher/images/random

```

## Dropdown list usng jQuery

calling function inside the api succes

```
 const selectDog = Object.keys(resp.message);
      console.log(selectDog);
      addOption(selectDog);
```

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
