import React from "react";
import { 
  Box, Toolbar, Grid, Breadcrumbs,
  Link, Avatar, Stack, Typography
} from "@mui/material";
import { GET_ACCOUNT } from "../../actions/auth";
import HeaderBar from "../../components/Items/HeaderBar";
import SideBar from "../../components/Items/SideBar";
import { useQuery } from "@apollo/client";

const Issue = () => {

  const { data, loading, error } = useQuery(GET_ACCOUNT);

  const account = data?.account;
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <HeaderBar />
      <SideBar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="text.primary"
            href="/account"
          >
            Account Profile
          </Link>
        </Breadcrumbs>
        <Toolbar />
        <Grid container spacing={2}>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={8}>

            <Stack 
              direction='row'
              spacing={2}
              sx={{
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">
                Avatar:
              </Typography>
              <Avatar src={account?.avatar} sx={{
                width: 56, 
                height: 56
                }}/>
            </Stack>

            <Stack 
              direction='row'
              spacing={2}
              sx={{
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <Typography variant="h6">
                Name:
              </Typography>
              <Typography variant="h6">
                {account?.name}
              </Typography>
            </Stack>

            <Stack 
              direction='row'
              spacing={2}
              sx={{
                display: "flex",
                margin: "0 auto",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <Typography variant="h6">
                Email:
              </Typography>
              <Typography variant="h6">
                {account?.email}
              </Typography>
            </Stack>

          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Issue;