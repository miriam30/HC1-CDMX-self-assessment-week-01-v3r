/*Tree Map

- [ ] Implement a higher order function, `map`, on the given `Tree` class using pseudoclassical instantiation

Available resources for this prompt
MDN
*/

/**
  * Implement a `map` method on this Tree class, using pseudoclassical instantiation.
  *
  * Map accepts a mapping function as its only argument. It traverses the tree,
  * passing each node's value into the mapping function, and generates a new
  * tree containing the results.
  *
  * So `map` should return a tree with the same structure, and different values,
  * but it should NOT modify the tree that was passed in.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   var newTree = root1.map(function (value) {
  *     return value * 2;
  *   })
  *  newTree.value // 2
  *  newTree.children[0].value // 4
  *  newTree.children[1].value // 6
  *  newTree.children[0].children[1].value // 10
  *  newTree.children[1].children[1].value // 14
  *  root1.value // still 1
  */
var Tree = function(){
  //for pseudoclassical we have to create a var that attaches our mapping funcion
  var root1 = Object.create(mapping)
  root1.child = []

  root1.value = 0
 //return that original var
  return root1

}
//create add tree function
root1.addChild = function(){
  var children = this.value
  //we push each child in our child array
  this.child.push(children)
}
//create mapping funcion that returns the value of each child * by 2
root1.mapping = function(){
  // we iterate through our branch
  for(var i= 0; i < this.newTree.length; i++){
    // return
    return this.newTree[i] + mapping(this.newTree[i],2--)
  }

}
