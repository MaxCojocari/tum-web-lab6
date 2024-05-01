import { Button } from "@mui/material";

interface RemoveButtonProps {
  pageName: string;
  parentCourseId: number;
  onItemRemoved: () => void;
}

export default function RemoveButton({
  pageName,
  parentCourseId,
  onItemRemoved,
}: RemoveButtonProps) {
  function remove() {
    const cartContentIds = localStorage.getItem(pageName.toLowerCase());
    let ids = cartContentIds ? JSON.parse(cartContentIds) : [];

    ids = ids.filter((item: number) => item !== parentCourseId);
    ids.sort((a: number, b: number) => a - b);
    localStorage.setItem(pageName.toLowerCase(), JSON.stringify(ids));

    onItemRemoved();
  }

  return (
    <Button variant="contained" color="error" onClick={remove}>
      REMOVE
    </Button>
  );
}
