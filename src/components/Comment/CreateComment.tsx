import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";

const CreateComment = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if(value){
      console.log(value);
    }
  }, [value])

  return (
    <Box>
      <br />
      <ReactQuill 
        theme="snow" 
        value={value} 
        onChange={setValue}
      />
      <br />
      <Box style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
          <LoadingButton 
            loading={false}
            variant="contained" 
            type='submit' >
              Comment
          </LoadingButton>
          
        </Box>
    </Box>
  );
}

export default CreateComment