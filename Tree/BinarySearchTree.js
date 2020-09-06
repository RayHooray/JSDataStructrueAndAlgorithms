const BinarySearchTree = (function(){
  class Node {
    constructor(key) {
      this.key = key
      this.left = null
      this.right = null
    }
  }
  let root = null
  let insertNode = function(node, newNode) {
    if(newNode.key < node.key) {
      if(node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if(node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  // 中序遍历
  let inOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      // console.log(node)
      inOrderTraverseNode(node.left, callback)
      console.log(node.key)
      // callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }
  // 先序遍历
  let preOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  // 后续遍历
  let postOrderTraverseNode = function(node, callback) {
    if(node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
  // 查询最小值
  let minNode = function(node) {
    if(node) {
      while(node && node.left) {
        console.log('mini', node)
        node = node.left
      }

      return node.key
    }
    return null
  }

  // 查询最大值
  let maxNode = function(node) {
    if(node) {
      while(node && node.right) {
        node = node.right
      }

      return node.key
    }
    return null
  }

  // 查询特定值(看起来像二分法)
  let searchNode = function(node, key) {
    if(node === null) {
      return false
    }
    if(key < node.key) {
      // console.log('<', node)
      return searchNode(node.left, key)
    }
    if(key > node.key) {
      // console.log('>', node)
      return searchNode(node.right, key)
    } else {
      // console.log('=', node)
      return true
    }
  }
  // 移除节点
  let removeNode = function(node, key) {
    if(node === null) {
      return null
    }
    else if(key < node.key) {
      node.left = removeNode(node.left, key)
      return node
    }
    else if(key > node) {
      node.right = removeNode(node.right, key)
    }
    else {
      if(!node.left && !node.right) {
        node = null
        return node
      }
      if(!node.left) {
        node = node.right
        return node
      }
      if(!node.right) {
        node = node.left
        return node
      }

      let aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  //
  let findMinNode = function(node) {
    while(node && node.left) {
      console.log('findMinNode', node)
      node = node.left
    }

    return node
  }

  return class BinarySearchTree {
    constructor() {
      // _root.set(this, null)
      // _insertNode(this, insertNode)
    }

    insert(key) {
      let newNode = new Node(key)
      if(root === null) {
        root = newNode
      } else {
        insertNode(root, newNode)
      }
    }

    search(key) {
      return searchNode(root, key)
    }
    // 中序遍历，以上行顺序访问 BST 所有节点，也就是以从最小到最大的顺序访问所有节点
    inOrderTraverse(callback) {
      inOrderTraverseNode(root, callback)
    }
    // 中序遍历，是以先于后代节点的顺序访问每个节点，用于打印一个结构化的文档
    preOrderTraverse(callback) {
      preOrderTraverseNode(root, callback)
    }
    // 后续遍历，先访问后代节点，在访问节点本身，用于计算目录和其子目录中所有文件所占空间的大小
    postOrderTraverse(callback) {
      postOrderTraverseNode(root, callback)
    }

    min() {
      return minNode(root)
    }

    max() {
      return maxNode(root)
    }

    remove(key) {
      root = removeNode(root, key)
    }

    printTree() {
      return root
    }

    printNode(value) {
      console.log(value)
    }
  }

})()

let tree = new BinarySearchTree()

tree.insert(11)
tree.insert(15)    
tree.insert(1)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)

tree.inOrderTraverse(tree.printNode)