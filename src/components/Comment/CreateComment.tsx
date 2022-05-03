import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { LoadingButton } from "@mui/lab";
import { NotifyError, NotifySuccess } from "../../components/Notify";
import { Box } from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../actions/comment";

interface CreateCommentProps {
  issueId: string;
}
const CreateComment = (props:CreateCommentProps) => {
  const [content, setContent] = useState('');
  const { issueId } = props;

  const [createComment, { data, error }] = useMutation(CREATE_COMMENT);

  const comment = data?.createComment?.comment;
  const errors = data?.createComment?.errors;

  useEffect(() => {
    if(comment){
      NotifySuccess('Comment created successfully')
    }
    if(errors){
      NotifyError(errors[0].attribute + " " + errors[0].message)
    }
  }, [comment, errors, error])

  const submit = () => {
    if(content === "" || content === "<p><br></p>"){
      NotifyError("Comment content cannot be empty!")
    } else {
      createComment({
        variables: {
          input: {
            issueId,
            content
          }
        }
      });
    }
  }


  return (
    <Box>
      <br />
      <ReactQuill 
        theme="snow" 
        value={content} 
        onChange={setContent}
      />
      <br />
      <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={false}
            variant="contained"
            onClick={submit}
          >
              Comment
          </LoadingButton>
        </Box>
    </Box>
  );
}

export default CreateComment