import { Box, Checkbox, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface CheckboxFilterProps {
  text: string;
  onCheckboxChange: (isChecked: boolean) => void;
  cachedPermissionAllow?: boolean;
}

export default function CheckboxFilter({
  text,
  onCheckboxChange,
  cachedPermissionAllow,
}: CheckboxFilterProps) {
  const [checked, setChecked] = useState(
    cachedPermissionAllow ? cachedPermissionAllow : false
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onCheckboxChange(isChecked);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
      }}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        sx={{
          color: "#545be8",
          "&.Mui-checked": {
            color: "#545be8",
          },
        }}
        disableRipple
      />
      <Typography
        sx={{ display: "flex", alignItems: "center", fontWeight: "300" }}
      >
        {text}
      </Typography>
    </Box>
  );
}
