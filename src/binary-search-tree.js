const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    if (this.start) {

      let temp = this.start;
      while (temp) {
        if (data > temp.data) {
          if (temp.right) {
            temp = temp.right;
          } else {
            temp.right = new Node(data);
            break;
          }

        } else {
          if (temp.left) {
            temp = temp.left;
          } else {
            temp.left = new Node(data);
            break;
          }
        }
      }
    } else {
      this.start = new Node(data);
    }

  }

  has(data) {
    let temp = this.start;

    while (temp) {
      if (temp.data === data) {
        return true;
      } else {
        if (data > temp.data) {
          temp = temp.right;
        } else {
          temp = temp.left;
        }
      }
    }
    return false;
  }

  find(data) {
    let temp = this.start;

    while (temp) {
      if (temp.data === data) {
        return temp;
      } else {
        if (data > temp.data) {
          temp = temp.right;
        } else {
          temp = temp.left;
        }
      }
    }
    return null;
  }

  remove(data) {
    let array = [];
    function prepare(temp) {
      if (temp == null) return;
      if (temp.data !== data) array.push(temp.data);
      prepare(temp.left);
      prepare(temp.right);
    }
    prepare(this.start);
    this.start = null;
    array.forEach((e) => this.add(e));
    return;
  }

  min() {
    let temp = this.start;
    while (temp.left) {
      temp = temp.left;
    }
    return temp.data;
  }

  max() {
    let temp = this.start;
    while (temp.right) {
      temp = temp.right;
    }
    return temp.data;
  }
}

module.exports = {
  BinarySearchTree,
};