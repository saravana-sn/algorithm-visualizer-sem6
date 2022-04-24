import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./index.css";
import Navbar from "./UI/Navbar";
import Home from "./UI/Home";
import Algorithms_list from "./UI/Algorithms_list";
import Contact from "./UI/Contact";
import Success from "./UI/Success";
import { Component } from "react";
import "./App.css";
import "./AppDark.css";

import AppControls from "./components/molecules/AppControls";
import TopBar from "./components/organisms/TopBar";
import AppDrawer from "./components/organisms/AppDrawer";
import SortVisualizer from "./components/organisms/SortVisualizer";
import  BinS  from "./visualize/algorithms/search/BinS";
import Bfs from "./visualize/algorithms/graphs/Bfs";
import Dfs from "./visualize/algorithms/graphs/Dfs";

import BubbleSort, {
  BubbleSortKey,
  BubbleSortDesc,
} from "./visualize/algorithms/BubbleSort";

import InsertionSort, {
  InsertionSortKey,
  InsertionSortDesc,
} from "./visualize/algorithms/InsertionSort";
import MergeSort, {
  MergeSortKey,
  MergeSortDesc,
} from "./visualize/algorithms/MergeSort";

import {Routes, Route } from 'react-router-dom';



// const App = () => {
//   return (
//     <>
     
//     </>
//   );
// };




class App extends Component {
  state = {
    darkMode: false,
    array: [],
    arraySize: 17,
    trace: [],
    algorithm: null,
    appDrawerOpen: false,
  };

  ALGORITHM = {
    "Bubble Sort": BubbleSort,
    "Insertion Sort": InsertionSort,
    "Merge Sort": MergeSort,
  };

  ALGORITHM_KEY = {
    "Bubble Sort": BubbleSortKey,
    "Insertion Sort": InsertionSortKey,
    "Merge Sort": MergeSortKey,
  };

  ALGORITHM_DESC = {
    "Bubble Sort": BubbleSortDesc,
    "Insertion Sort": InsertionSortDesc,
    "Merge Sort": MergeSortDesc,
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomArray = () => {
    // Generate pseudo-random number between 1 and max
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    // Generate an array of length max
    const array = Array(this.state.arraySize)
      .fill(0)
      .map(() => getRandomInt(this.state.arraySize * 5));

    this.setState(
      {
        array,
        trace: [],
      },
      this.createTrace
    );
  };

  handleAlgorithmChange = (algorithm) => {
    this.setState({ algorithm }, this.generateRandomArray);
  };

  handleArraySizeChange = (size) => {
    size = Number(size);
    size = size > 100 ? 100 : size;
    size = size < 0 ? 0 : size;
    this.setState({ arraySize: size }, this.generateRandomArray);
  };

  createTrace = () => {
    const numbers = [...this.state.array];
    const sort = this.ALGORITHM[this.state.algorithm];
    if (sort) {
      const trace = sort(numbers);
      this.setState({ trace });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  toggleAppDrawer = () => {
    this.setState((prevState) => ({
      appDrawerOpen: !prevState.appDrawerOpen,
    }));
  };

  render() {
    let theme = `App`;
    if (this.state.darkMode) theme += ` App_dark`;
    if (this.state.appDrawerOpen) theme += ` App_modal_open`;

    const colorKey = this.ALGORITHM_KEY[this.state.algorithm];
    const desc = this.ALGORITHM_DESC[this.state.algorithm];

    const controls = (
      <AppControls
        onGenerateRandomArray={this.generateRandomArray}
        algorithm={this.state.algorithm}
        onAlgorithmChange={this.handleAlgorithmChange}
        arraySize={this.state.arraySize}
        onArraySizeChange={this.handleArraySizeChange}
        
      />
    );

    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/visualize"
            element={
              <div className={theme}>
                <TopBar
                  drawerOpen={this.state.appDrawerOpen}
                  toggleDrawer={this.toggleAppDrawer}
                >
                  {controls}
                </TopBar>

                <AppDrawer
                  open={this.state.appDrawerOpen}
                  closeDrawer={this.toggleAppDrawer}
                >
                  {controls}
                </AppDrawer>

                <main className="App__Body">
                  <SortVisualizer
                    array={this.state.array}
                    trace={this.state.trace}
                    colorKey={colorKey}
                    desc={desc}
                  />
                </main>
              </div>
            }
          />
          <Route path="/algorithms_list" element={<Algorithms_list />} />
          <Route path="/binSearch" element={<BinS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/bfs" element={<Bfs />} />
          <Route path="/dfs" element={<Dfs />} />
          <Route render to="/" />
        </Routes>
      </div>
    );
    
  }
}

export default App;
