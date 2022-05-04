import React, { useEffect } from 'react';
import { 
  Card, CardHeader, Avatar, IconButton, CardContent,
  Typography
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { DELETE_COMMENT } from '../../actions/comment';
import { useMutation } from '@apollo/client';
import { NotifyError, NotifySuccess } from '../Notify'

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

  const [deleteComment, {data, error}] = useMutation(DELETE_COMMENT)
  const comment = data?.deleteComment?.comment;
  const errors = data?.deleteComment?.errors

  const handleDelete = () => {
    console.log("delete comment")
    deleteComment({
      variables: {
        input: {id}
      }
    })
  }

  useEffect(() => {
    if(comment) {
      NotifySuccess("Comment Deleted Success");
      setTimeout(() => {
        window.location.reload();
      }, 5000)
    }
    if(errors) {
      NotifyError("Comment Deleted Failed");
    }
    if(error) {
      NotifyError(error.message);
    }
  },[comment, errors, error])


  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={account.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleDelete}>
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
