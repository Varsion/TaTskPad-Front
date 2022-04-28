import React, { useState, useEffect } from "react";
import {
  Collapse, Box, Paper, IconButton, Table, TableBody, TableCell, TableContainer, TableRow,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MinTable from "./MinTable";
interface BucketRow {
  id: string;
  name: string;
  isRelease: boolean;
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
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Box>
                <MinTable
                  date={"123"}
                  customerId={"123"}
                  key={"123"}
                />
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
  useEffect(()=>{
    console.log(props);
  }, [props]);
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
