---
title: "Building and Drawing a Graph in Unity using Gizmos"
aliases: [/v/zdHvM6XU4rY/]
date: 2019-05-06
featured_image: https://i.ytimg.com/vi/zdHvM6XU4rY/mqdefault.jpg

---

{{% youtube id="zdHvM6XU4rY" %}}

Unity's Gizmos can be a really powerful way to debug your objects and relationships. In this video we're going to be focusing on drawing a graph, a set of nodes and edges with unique characteristics. We're going to be making a graph which can store nodes with a position and color as well as edges which store a weight and color. With `OnDrawGizmos` we'll draw both of these so we can actually see what's happening.

The graph we'll be creating in this video is a directed graph - a *digraph*. This means that edges in the graph are directed and represent a single connection from one node to another. Think of this like how a city might have one-way streets. We can limit and control our graphs relationships more closely this way.

To make our graph a bit more accommodating to a number of unique uses we'll be creating the graph using generic types. This will allow our edges and nodes to both store unique data. We can use this to store positioned nodes with weighted edges as you might want to do for pathfinding. Another solution might be to have your nodes store pieces of a technology tree and your edges store the requirements to unlock those nodes.

**To draw our graph we can use the following code:**

```csharp
void OnDrawGizmos() {
    // If a graph does not exist, generate one in Start()
    if (graph == null) { 
        Start();
    }

    // draw all the graphs nodes
    foreach(var node in graph.Nodes) {
        Gizmos.color = node.NodeColor;
        Gizmos.DrawSphere(node.Value, 0.125f);
    }

    // draw all the edges of the graph
    foreach(var edge in graph.Edges) {
        Gizmos.color = edge.EdgeColor;
        Gizmos.DrawLine(edge.From.Value, edge.To.Value);
    }
}
```

* More information about graph data types including some of the time complexities of them can be found here: https://en.wikipedia.org/wiki/Graph_(abstract_data_type)
* The Wikipedia page on digraphs: https://en.wikipedia.org/wiki/Directed_graph
* Join the World of Zero Discord Server: https://discord.gg/hU5Kq2u