import * as React from 'react';
import {
  Box, Toolbar, Breadcrumbs, Link
} from '@mui/material';

export default function Backlog() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/#/">
          Projects
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/#/"
        >
          TaTskPad
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/#/"
          aria-current="page"
        >
          Backlog
        </Link>
      </Breadcrumbs>
    </Box>
  )
}