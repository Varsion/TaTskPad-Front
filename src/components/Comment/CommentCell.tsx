import React from 'react';
import { 
  Card, CardHeader, Avatar, IconButton, CardContent,
  Typography
} from '@mui/material';
import { red } from '@mui/material/colors';
import ClearIcon from '@mui/icons-material/Clear';

interface CommentCellProps {
  id: string;
  content: string;
  createdAt: string;
  account: {
    id: string;
    name: string;
    avatar: string;
  }
}

const CommentCell = (props:CommentCellProps) => {

  const { id, content, account, createdAt } = props;

  const deleteComment = () => {
    console.log("delete comment")
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={account.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={deleteComment}>
            <ClearIcon />
          </IconButton>
        }
        title={account.name}
        subheader={createdAt}
      />
      <CardContent>
        <Typography variant="body2" component="div">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CommentCell;
