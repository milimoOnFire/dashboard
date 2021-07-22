import { FC } from "react";
import { Typography, Badge, Box } from "@material-ui/core";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { yellow, green, red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(0, 1),
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: green[500],
    },
    error: {
      main: red[500],
    },
  },
});

interface IPriorityBadge {
  priority?: string;
}

export const PriorityBadge: FC<IPriorityBadge> = ({ priority }) => {
  const classes = useStyles();
  const color =
    priority === "High"
      ? "error"
      : priority === "Low"
      ? "secondary"
      : "primary";

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" alignItems="center">
        <Badge color={color} variant="dot" />
        <Typography className={classes.title} color={color}>
          {priority}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};
