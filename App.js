import React from "react";
import ReactDOM from "react-dom";
import AuthForm from "./AuthForm";
import Dashboard from "./Dashboard";
import About from "./About";
import { Router } from "@reach/router";
import { AppBar, Button, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
	flexGrow: 1,
  },
  title: {
	flexGrow: 1,
	justifyContent: "flex-start"
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.StrictMode>
      <div className={classes.root}>
        <AppBar position="fixed" style={{ background: "#0052cc" }}>
          <Toolbar>
            <Button color="inherit" className={classes.title}>
              <img
                alt=""
                src="https://user-images.githubusercontent.com/44428198/87041819-6a7c0780-c210-11ea-906e-8d2bd685d43d.png"
                width="40"
              />
            </Button>
            <Button color="inherit" href="/about" className="appBarItem">
              About Us
            </Button>
            <Button color="inherit" href="/login" className="appBarItem">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Router>
        <AuthForm path="/login" />
        <Dashboard path="/" />
        <About path="/about" />
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
