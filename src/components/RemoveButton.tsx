import { Button } from "@mui/material";

interface RemoveButtonProps {
  parentCourseId: number;
  onItemRemoved: () => void;
}

export default function RemoveButton({
  parentCourseId,
  onItemRemoved,
}: RemoveButtonProps) {
  function remove() {
    const cartContentIds = localStorage.getItem("cart");
    let ids = cartContentIds ? JSON.parse(cartContentIds) : [];

    ids = ids.filter((item: number) => item !== parentCourseId);
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem("cart", JSON.stringify(ids));

    onItemRemoved();
  }

  return (
    <Button variant="contained" color="error" onClick={remove}>
      REMOVE
    </Button>
  );
}
