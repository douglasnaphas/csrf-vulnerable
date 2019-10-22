import React from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getLoginCookie } from "./lib/getLoginCookie";
import { getCSRFCookie } from "./lib/getCSRFCookie";

function App() {
  const [url, setUrl] = React.useState("initial url");
  return (
    <div className="App">
      <Typography variant="h2" component="h1">
        Vulnemort
      </Typography>
      <Typography variant="h3" component="h3">
        A site vulnerable to Cross-Site Request Forgery
      </Typography>
      <br />
      <br />
      <Paper className="White-paper" style={{ minWidth: "400px" }}>
        <div>
          <Button
            variant="contained"
            onClick={() => {
              console.log(process);
              console.log("************");
              console.log(process.env);
              getLoginCookie();
            }}
          >
            Get a login cookie
          </Button>
        </div>
        <br />
        <br />
        <div>
          <Button
            variant="contained"
            onClick={() => {
              getCSRFCookie();
            }}
          >
            Get a CSRF cookie
          </Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
