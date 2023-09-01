// Write your solution here!
const cats = [ "Milo", "Otis", "Garfield"]

  function destructivelyAppendCat(name) {
  cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat() {
    cats.pop();
  }

  function destructivelyRemoveFirstCat() {
    cats.shift();
  }

  function appendCat(name) {
    const copyofCats = [...cats, name];
    return copyofCats;
  }

  function prependCat(name) {
    const copyofCats = [name, ...cats];
    return copyofCats;
  }

  function removeLastCat() {
    const copyofCats = [...cats];
    copyofCats.splice(2);
    return copyofCats;
  }

  function removeFirstCat() {
    const copyofCats = [...cats];
    copyofCats.splice(0,1);
    return copyofCats;
  }