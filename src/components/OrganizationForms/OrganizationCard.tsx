import React from 'react'
import { 
   Card, CardActionArea, CardContent, CardMedia, Grid, Typography,
} from '@mui/material';

import { setOrganizationId, setOrganizationName } from '../Session';

import { useNavigate } from 'react-router-dom'
interface OrganizationProps {
  children?: React.ReactNode;
  id: string;
  name: string;
  logoUrl: string;
}

const OrganizationCard = (props: OrganizationProps) => {
  const { id, name, logoUrl } = props;

  const navigate = useNavigate();

  const onClick = () => {
    setOrganizationId(id);
    setOrganizationName(name);
    navigate("/project");
  }

  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={onClick}>
          {
            logoUrl ? 
            <CardMedia
              component="img"
              height="140"
              image={logoUrl}
              alt="green iguana"
            />
            :
            <CardMedia
              component="img"
              height="140"
              image="https://img.varsion.cn/blog-img/20220416214916.png"
              alt="green iguana"
            />
          }

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              组织描述
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default OrganizationCard
