// GRAPHS
// A graph data structure consists of a finite (and possibly mutalbe)
// set of vetices or nodes or points,
// together with a set of unordered pairs of these vertices for an 
// undirected graph or a set of ordered pairs for a directed graph
// i.e. NODES & CONNECTIONS 

// USES FOR GRAPHS (a bunch of nodes connected to eachother)
// Social Networks, location/mapping, routing algorithms
// visual hierarchy, file system optimizations, EVERYWHERE!
// recommendations "people also watched", "people you might know"

// GRAPH TERMS
// VERTEX - a node
// EDGE - connection between nodes
// WEIGHTED/UNWEIGHTED - values assigned to distances between vertices
// DIRECTED/UNDIRECTED - directions assigned to distanced between vertices

// DIRECTED GRAPH
// a direction assigned to an edge such as:
// two friends follow eachother, arrows pointing at both vetices
// one preson follows a famous person, arrow pointing only at famous person

// WEIGHTED GRAPH
// shows the value between vertices on edges
// i.e. distances of roads, how much someone gives attention to someone they follow

// UNDIRECTED GRAPH
// just shows connections that are connected, looks like web
// no values on edge

// REPRESENTING A GRAPH
// There are two main ways to represent a graph

// ADJACENCY MATRIX
// two dimentional structure with nested arrays
// Store in rows and collums, a matrix
// Below is an undirected graph, not symmetrical 
// A boulean matrix: 0 = false, 1=true
// 1   a b c d e
// 2 a 1 1 - - -
// 3 b - - 1 - -
// 4 c - - - 1 -
// 5 d - 1 1 - -

// ADJACENCY LIST
// use array/list, a has a connection with a and b
// it's undirected
// 1 a -> { a b }
// 2 b -> { c }
// 3 c -> { d }
// 4 d -> { b c }
// Real world data actually has few connections

// MATRIX vs LIST BIG O
// Adjacency list:
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// !Can be slower to lookup specific edge
// Adjecency Matrix:
// !Takes up more space (in sparse graphs)
// !Slower to iterate over all edges
// Faster to lookup specific edge
// WHICH WILL WE USE?
// Adjacency List!
// Most data in the real-world tends to lend itself to sparse and/
// or larger graphs

class Graph {
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}  // we are building an undirected graph