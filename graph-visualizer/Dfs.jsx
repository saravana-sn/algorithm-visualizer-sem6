const links = {
  google: "https://www.google.com",
};
function Bfs() {
  const mystyle = {
    content: "center",
    align: "center",
    padding: "7vh",
    fontFamily: "Arial",
  };

  return (
    <div style={mystyle}>
      <h1>What is Depth First Search?</h1>
      <a target="_blank" href={links.google}>
        [visualize Here]
      </a>
      <p>
        The <strong>Depth First Search</strong> (<code>DFS</code>)is an
        algorithm for traversing or searching tree or graph data structures
        which uses the idea of backtracking. It explores all the nodes by going
        forward if possible or uses backtracking.
      </p>
      <blockquote>
        <p>
          Note: It can be implemented using a <em>stack.</em>
        </p>
      </blockquote>
      <h2>The algorithm</h2>
      <p>
        Here are the steps for the <code>BFS</code> algorithm:
      </p>
      <ul>
        <li>
          <p>Pick a node and enqueue all its adjacent nodes into a stack.</p>
        </li>
        <li>
          <p>
            Pop a node from the stack and push all its adjacent nodes into a
            stack.
          </p>
        </li>
        <li>
          <p>
            Repeat this process until the stack is empty or you meet a goal.
          </p>
        </li>
      </ul>
      <p>
        The program can be stuck in an infinite loop if a node is revisited and
        was not marked as <code>visited</code> before. Hence, prevent exploring
        nodes that are visited by marking them as visited.
      </p>
      <h2>Example</h2>
      <p>
        We have a directed graph of five nodes with <em>G</em> being the node to
        be searched. The nodes will be marked as visited using the{" "}
        <code>visited</code> array while adjacent nodes will be added to the{" "}
        <code>stack.</code>
      </p>
      <img alt="dfs1" width="600px" src={require("./images/dfs1.png")} />
      <img alt="dfs2" width="600px" src={require("./images/dfs2.png")} />
      <img alt="dfs3" width="600px" src={require("./images/dfs3.png")} />
      <img alt="dfs4" width="600px" src={require("./images/dfs4.png")} />
      <img alt="dfs5" width="600px" src={require("./images/dfs5.png")} />
      <img alt="dfs6" width="600px" src={require("./images/dfs6.png")} />
      <img alt="dfs7" width="600px" src={require("./images/dfs7.png")} />
      <img alt="dfs8" width="600px" src={require("./images/dfs8.png")} />
      <br></br>
      <h2>Explanation</h2>
      <p>
        Starting from the source node <em>A</em>, we keep moving to the adjacent
        nodes <em>A</em> to <em>B</em> to <em>D</em> where we reach the farthest
        level. Then we backtrack to the previous node <em>B</em> and pick an
        adjacent node. Once again, we probe till the farthest level where we hit
        the desired node <em>G</em>.
      </p>
      <h2>Time complexity</h2>
      <p>
        The time complexity of <code>DFS</code> if the entire tree is traversed
        is O(V) where V is the number of nodes. In the case of a graph, the time
        complexity is O(V + E) O(V+E) where V is the number of vertexes and E is
        the number of edges.
      </p>
    </div>
  );
}

export default Bfs;
