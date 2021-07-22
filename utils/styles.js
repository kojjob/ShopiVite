import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#007efc",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  brand: {
    color: "#ffffff",
    fontSize: "1.5rem",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
  },
  section: {
    marginTop: "1rem",
    marginBottom: "1rem",
  },
})

export default useStyles
