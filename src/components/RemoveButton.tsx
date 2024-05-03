import { Button } from "@mui/material";

interface RemoveButtonProps {
  pageName: string;
  courseId: number;
  onItemRemoved: (pageName: string, courseId: number) => void;
}

export default function RemoveButton({
  pageName,
  courseId,
  onItemRemoved,
}: RemoveButtonProps) {
  return (
    <Button
      variant="contained"
      color="error"
      onClick={(e) => onItemRemoved(pageName, courseId)}
    >
      REMOVE
    </Button>
  );
}
