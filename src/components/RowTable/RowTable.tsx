import React, { useState, useEffect } from "react";
import {
  Collapse, Box, Paper, IconButton, Table, TableBody, TableCell, 
  TableContainer, TableRow, Button, ButtonGroup
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MinTable from "./MinTable";
interface BucketRow {
  id: string;
  name: string;
  isRelease: boolean;
  issues: [IssueType]
}

interface IssueType {
  id: string;
  title: string;
  keyNumber: string;
  status: string;
  genre: string;
  priority: string;
  assignee: {
    name: string;
    avatar: string;
  }
}
interface BucketProps {
  buckets: BucketRow[];
}

function Row(props: { row: BucketRow }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">
          {
            row.isRelease ? 
            <ButtonGroup disableElevation variant="contained">
              <Button variant="outlined" color="success" size="small">
                Current Sprint
              </Button>
              <Button variant="outlined" color="error" size="small">
                Complete Sprint
              </Button>
            </ButtonGroup> : 
            <ButtonGroup disableElevation variant="contained">
              <Button variant="contained" size="small">
                Start As Sprint
              </Button>
            </ButtonGroup>
          }

        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Box>
              {
                row?.issues?.length > 0 ?
                  row.issues.map((issue: IssueType) => {
                    return <MinTable key={issue.id} {...issue} />;
                  }) : <Box>No issues</Box>
              }
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable(props: BucketProps) {

  const { buckets } = props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {buckets.map((bucket) => (
            <Row key={bucket.name} row={bucket} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
