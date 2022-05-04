import React, { useEffect } from 'react';
import { 
  Stack
} from '@mui/material';
import CommentCell from './CommentCell';

interface CommentProps {
  comments: [
    {
      id: string;
      content: string;
      createdAt: string;
      account: {
        id: string;
        name: string;
        avatar: string;
      }
    }
  ];
}
const CommentContainer = (props:CommentProps) => {

  const { comments } = props;

  useEffect(()=>{
    if(comments) {
      console.log(comments)
    }
  }, [comments])
  return (
    <Stack spacing={2}>
      {
        comments?.length > 0 ? 
          comments.map((comment:any, index: any) => {
            return (
              <CommentCell
                key={index}
                id={comment.id}
                createdAt={comment.createdAt}
                content={comment.content}
                account={comment.account}
              />
            )
          }) :
          <p>no comments</p>

      }
    </Stack>
  )
}

export default CommentContainer;
