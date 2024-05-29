import {
  AppBar,
  Container,
  IconButton,
  TextField,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

export function MuiApp() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AccessAlarmIcon />
          </IconButton>
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Photos
          </Typography>
          <img
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="logo"
            style={{
              height: 40,
              width: 40,
              borderRadius: 1000,
              overflow: "hidden",
            }}
          />
        </Toolbar>
      </AppBar>
      <Container sx={{ margin: "100px auto" }}>
        <div className="w-[400px] flex flex-col gap-5 mx-auto bg-slate-200 rounded-lg p-8">
          <Typography variant="h6" color="inherit" component="div">
            Login
          </Typography>
          <TextField name="username" label="Username" variant="filled" />
          <TextField name="password" label="Password" variant="filled" />
          <div className="flex justify-end">
            <Button variant="outlined">Send</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
