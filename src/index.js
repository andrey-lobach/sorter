class Sorter {
  constructor(array) {
    this.array = [];
    this.compareFunction = function(a, b){
      return a - b;
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let temp = [];
    for(let i = 0; i < indices.length; i++)
      temp[i] = this.array[indices[i]];
    indices.sort(function(a, b){ return a - b;});
    temp.sort(this.compareFunction);
    for(let i = 0; i < indices.length; i++)
      this.array[indices[i]] = temp[i];
  }



  setComparator(compareFunction){
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;