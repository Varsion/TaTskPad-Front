import * as React from 'react';
import {
  Box
} from '@mui/material';

import HeaderBar from '../../components/Items/HeaderBar';


export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex' }}>
      <HeaderBar />
    </Box>
  );
}
