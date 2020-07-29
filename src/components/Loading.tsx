import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div style={styles.centerDiv}>
      <Spinner animation="border" />
    </div>
  );
}


const styles = {
  centerDiv: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
};
