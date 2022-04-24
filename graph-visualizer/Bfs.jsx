import { NavLink } from "react-router-dom";
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
      <h1>What is Breadth First Search?</h1>
      <a target="_blank" href={links.google}>
        [visualize Here]
      </a>
      <p>
        The <strong>Breadth First Search</strong> (<code>BFS</code>) is an
        algorithm for traversing or searching tree or graph data structures. It
        explores all the nodes at the present depth before moving on to the
        nodes at the next depth level.
      </p>
      <blockquote>
        <p>
          Note: It can be implemented using a <em>queue.</em>
        </p>
      </blockquote>
      <h2>The algorithm</h2>
      <p>
        Here are the steps for the <code>BFS</code> algorithm:
      </p>
      <ul>
        <li>
          <p>Pick a node and enqueue all its adjacent nodes into a queue.</p>
        </li>
        <li>
          <p>
            Dequeue a node from the queue, mark it as visited and enqueue all
            its adjacent nodes into a queue.
          </p>
        </li>
        <li>
          <p>
            Repeat this process until the queue is empty or you meet a goal.
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
        <code>queue.</code>
      </p>
      <img alt="bfs1" width="600px" src={require("./images/bfs1.png")} />
      <img alt="bfs2" width="600px" src={require("./images/bfs2.png")} />
      <img alt="bfs3" width="600px" src={require("./images/bfs3.png")} />
      <img alt="bfs4" width="600px" src={require("./images/bfs4.png")} />
      <img alt="bfs5" width="600px" src={require("./images/bfs5.png")} />
      <img alt="bfs6" width="600px" src={require("./images/bfs6.png")} />
      <img alt="bfs7" width="600px" src={require("./images/bfs7.png")} />
      <br></br>

      <h2>Explanation</h2>
      <p>
        Starting from the source node <em>A</em>, we keep exploring down the
        branches in an ordered fashion i.e. from <em>A</em> to <em>B</em> to{" "}
        <em>C</em> where the level completes. Then we go to the next level and
        explore <em>D</em> and <em>G</em>.
      </p>
      <h2>Time complexity</h2>
      <p>
        The time complexity of <code>BFS</code> if the entire tree is traversed
        is O(V) where V is the number of nodes. In the case of a graph, the time
        complexity is O(V + E) O(V+E) where V is the number of vertexes and E is
        the number of edges.
      </p>
    </div>
  );
}

export default Bfs;
