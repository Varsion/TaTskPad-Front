import React, {useEffect} from 'react';
import {
  Paper, Table, TableBody, TableCell, 
  TableContainer, TableHead, TableRow,
  Chip, Avatar,
} from '@mui/material';

import { GET_PROJECT } from '../../actions/project'
import { useQuery } from '@apollo/client'
import { NotifyError } from '../Notify'
import { setProjectId, setProjectCodeUrl } from '../Session'
import { useNavigate } from 'react-router-dom'

interface ProjectTableProps {
  organizationId: any
}

interface ProjectType {
  id: string
  name: string
  logoUrl: string
  keyWord: string
  codeUrl: string
}

const ProjectTable = (props: ProjectTableProps) => {
  const { organizationId } = props;

  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: {
      organizationId
    }
  })

  const owner = data?.organization?.owner
  const projects = data?.organization?.projects

  const enter = (projectId: string, codeUrl: string) => {
    console.log(codeUrl);
    setProjectId(projectId);
    setProjectCodeUrl(codeUrl);
    navigate("/");
  }

  useEffect(()=>{
    if(error){
      NotifyError(error.message)
    }
  }, [error])
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="project table">
        <TableHead>
          <TableRow>
            <TableCell>🌟</TableCell>
            <TableCell align='center'>Name</TableCell>
            <TableCell align='center'>Key</TableCell>
            <TableCell align='center'>Owner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { 
            loading ? 
              <TableRow><TableCell colSpan={4} align='center'>Loading...</TableCell></TableRow> :
              projects.length > 0 ?
                projects.map((project: ProjectType, index: number) => (
                    <TableRow key={project.id} onClick={(event) => enter(project.id, project.codeUrl)}>
                      <TableCell> {index+1} </TableCell>
                      <TableCell align='center'>
                        <Chip avatar={<Avatar />} label={project.name} />
                      </TableCell>
                      <TableCell align='center'> {project.keyWord} </TableCell>
                      <TableCell align='center'>
                        <Chip avatar={<Avatar />} label={owner.name} />
                      </TableCell>
                    </TableRow>
                )) :
                <TableRow><TableCell colSpan={4} align='center'>Empty</TableCell></TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProjectTable