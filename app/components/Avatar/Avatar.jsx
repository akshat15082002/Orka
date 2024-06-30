import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Orka"
        src="https://pics.craiyon.com/2023-06-25/16f9df36b0184899befe5aef2a974fb1.webp"
        sx={{ width: 28, height: 28 }}
      />
    </Stack>
  );
}