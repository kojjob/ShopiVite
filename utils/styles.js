import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#007efc",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})

export default useStyles
