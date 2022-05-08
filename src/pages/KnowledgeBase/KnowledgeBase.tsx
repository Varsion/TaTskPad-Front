import { 
  Box, Toolbar, Breadcrumbs, Link,Divider, 
  Drawer, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Stack, Button, 
  Typography, AppBar, Dialog, IconButton, 
  Slide, FormGroup, TextField, 
} from '@mui/material';
import HeaderBar from '../../components/Items/HeaderBar';
import FolderIcon from '@mui/icons-material/Folder';
import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { TransitionProps } from '@mui/material/transitions';
import { GET_KNOWLEDGE_BASES, CREATE_DOCUMENT } from '../../actions/knowledgeBase';
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import {NotifyError, NotifySuccess} from '../../components/Notify';
import ReactQuill from 'react-quill';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const KnowledgeBase = () => {

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitleChange = (e: any) => {
    const { value } = e.target;
    setTitle(value);
  };


  const projectId = localStorage.getItem("projectId") || "";

  const { data: defaultData, loading: defaultLoading, error: defaultError } = useQuery(GET_KNOWLEDGE_BASES, {
    variables: {
      projectId
    }
  });

  const [createDocument, { data, error, loading }] = useMutation(CREATE_DOCUMENT);

  const knowledgeBase = defaultData?.project?.defaultKnowledgeBase;
  const documents = knowledgeBase?.documents;
  const document = documents?.[0];

  const createError = data?.createDocument?.errors;
  const createData = data?.createDocument?.document;

  useEffect(() => {
    if(knowledgeBase) {
      console.log(knowledgeBase)
    }
    if(documents) {
      console.log(documents.length)
    }
    if(createError) {
      NotifyError(createError[0].attribute+ ' ' + createError[0].message)
    }
    if(createData) {
      NotifySuccess('Document created successfully')
    }
  }, [defaultData, knowledgeBase, documents, createError, createData]);

  const handleCreateDocument = () => {
    createDocument({
      variables: {
        input: {
          projectId,
          title,
          content,
          knowledgeBaseId: knowledgeBase.id
        }
      }
    })
  }

  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
    <HeaderBar />
    {/* Side Bar */}
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem sx={{ pl: 4, mt: 2 }}>
            <ListItemText primary={knowledgeBase?.title} />
          </ListItem>
          <ListItem sx={{ pl: 4, mt: 2 }}>
            <Stack direction="row" spacing={2}>
              <Button variant="contained" size='small' onClick={handleClickOpen}>New Doc</Button>
            </Stack>
          </ListItem>
        </List>
        <Divider />


        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText primary="Knowledge Base" />
          </ListItemButton>
          {
            documents?.length > 0 ?
              documents.map((document:any, index: number) => {
                return (
                  <ListItemButton sx={{ pl: 6 }}>
                    <ListItemText primary={document.title} />
                  </ListItemButton>
                )
              }) : 
              <ListItemButton sx={{ pl: 6 }}>
                <Typography>
                  No documents founds
                </Typography>
              </ListItemButton>
          }
        </List>
        <Divider />
      </Box>
    </Drawer>
    {/* Side Bar */}
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="text.primary"
          href="/account"
        >
          Knowledge Base
        </Link>
      </Breadcrumbs>
      <Toolbar />
      {
        document ?
          <Box sx={{pl: 3}}>
            <Typography variant="h4">
              Title
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Box>
          :
          <Box sx={{pl: 3}}>
            <Typography variant="h4" sx={{alignContent: 'center'}}>
              Please try create a new document
            </Typography>
          </Box>
      }

      {/* create new */}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create New Document
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ pl:  10}}>
          <Toolbar />
          <FormGroup>
          <Stack spacing={2}>
            <TextField label="Title" id="title" margin="normal" value={title} onChange={handleTitleChange} sx={{width: 600}} required/>
            <Box sx={{width: 1000, height:350}}>
              <ReactQuill 
                theme="snow"
                id="Content"
                style={{"height": "300px"}}
                value={content} 
                onChange={setContent}
                placeholder={'Document Content'}
              />
            </Box>
            <LoadingButton 
              loading={loading}
              onClick={handleCreateDocument}
              variant="contained" 
              sx={{width: 100}}
              >
              Create
            </LoadingButton>
          </Stack>
        </FormGroup>
        </Box>
      </Dialog>

    </Box>
  </Box>
  )
}

export default KnowledgeBase;