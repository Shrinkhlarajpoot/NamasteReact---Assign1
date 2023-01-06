const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement(
  "h1",
  {
    style: {
      color: "blue",
    },
  },
  "Hi,This is Shrinkhla Rajpoot"
);
const subHeading = React.createElement(
  "h2",
  {
    style: {
      color: "green",
    },
    className: "usersubHeading",
  },
  "I am a Frontend Developer"
);
const container = React.createElement(
  "div",
  {
    
    className: "container",
  },
  [heading, subHeading]
);
root.render(container);