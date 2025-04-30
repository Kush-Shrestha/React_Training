const heading = React.createElement("div",{ id:"container" }, React.createElement("h1",{},"First Heading"), React.createElement("h2",{},"Second Heading"))
const rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(heading);