import { Button } from "@mui/material";
import { useState } from "react";

export default function RemoveButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <Button
      variant="contained"
      color="error"
      onClick={(e) => setClicked(!clicked)}
    >
      REMOVE
    </Button>
  );
}
