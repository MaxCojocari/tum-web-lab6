import { Button } from "@mui/material";

interface RemoveButtonProps {
  pageName: string;
  courseId: number;
  onItemRemoved: (courseId: number) => void;
}

export default function RemoveButton({
  courseId,
  onItemRemoved,
}: RemoveButtonProps) {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={(e) => onItemRemoved(courseId)}
    >
      REMOVE
    </Button>
  );
}
