import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { getLoginCookie } from "./lib/getLoginCookie";
import { getCSRFCookie } from "./lib/getCSRFCookie";
import "./App.css";
import { Configs } from "./Configs";
import GitHubIcon from "@material-ui/icons/GitHub";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";

function App() {
  const [url, setUrl] = React.useState("initial url");
  const [loginSameSite, setLoginSameSite] = React.useState(false);
  const [CSRFSameSite, setCSRFSameSite] = React.useState(false);
  const [checkedState, setCheckedState] = React.useState({
    loginCookie: {
      sameSite: false
    },
    CSRFCookie: {
      sameSite: false
    }
  });
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#040213" }
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <AppBar style={{ textAlign: "right" }}>
          <IconButton
            href="https://github.com/douglasnaphas/csrf-vulnerable"
            style={{
              width: "30px",
              marginRight: "-10px"
            }}
          >
            <GitHubIcon
              fontSize="large"
              style={{ padding: "10px", color: "white", marginRight: "-10px" }}
            ></GitHubIcon>
          </IconButton>
        </AppBar>
        <Typography variant="h2" component="h1">
          Vulnemort
        </Typography>
        <Typography variant="h3" component="h3" style={{ padding: "8px" }}>
          A site vulnerable to Cross-Site Request Forgery
        </Typography>
        <br />
        <div>
          <Paper className="White-paper" style={{ minWidth: "400px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>SameSite</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => {
                          getLoginCookie(loginSameSite);
                        }}
                      >
                        Get a login cookie
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={loginSameSite}
                      onChange={event => {
                        setLoginSameSite(event.target.checked);
                      }}
                    ></Checkbox>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div>
                      <Button
                        variant="contained"
                        onClick={() => {
                          getCSRFCookie(CSRFSameSite);
                        }}
                      >
                        Get a CSRF cookie
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
          <br />
          <Paper className="White-paper" style={{ minWidth: "400px" }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>
                    Endpoint, no CSRF defenses, allows all origins, requires
                    login:
                  </TableCell>
                  <TableCell>
                    {new URL("/api/xo/do-nothing", Configs.apiUrl())["href"]}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    Endpoint, no CSRF defenses, allows whitelisted origins,
                    requires login:
                  </TableCell>
                  <TableCell>
                    {new URL("/api/noxo/do-nothing", Configs.apiUrl())["href"]}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
