import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const tecladoL1 = ([
  'Q','W','E','R','T','Y','U','I','O','P',
])
const tecladoL2 = ([
  'A','S','D','F','G','H','J','K','L','Ç',
])
const tecladoL3 = ([
  'Z','X','C','V','B','N','M','<','&',
])

type LetraProps = {
  text: string;
}

export function Letra(props: LetraProps) {
  return (
      <p>{props.text}</p>
  )
}

function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={2}>
        <Item>
          {tecladoL1.map(Letra =>{
            return <Letra text={tecladoL1}/>  
          })
        }
          </Item>
        </Grid>
      </React.Fragment>
    );
  }

  
  export default function Teclado() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} xs={3} >
          <Grid container item spacing={1}>
            <FormRow />
          </Grid>
          <Grid container item spacing={1}>
            <FormRow />
          </Grid>
          <Grid container item spacing={1}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    );
  }