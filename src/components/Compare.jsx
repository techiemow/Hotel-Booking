import { ModalDialog } from '@mui/joy'
import { Grid, InputAdornment, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { hotels } from './constants';

const Compare = ({compare ,setcompare}) => {


  
  return (
    <Modal open={compare == true} onClose={() => setcompare(false)} >
    <ModalDialog
      minWidth={600}
      aria-labelledby="nested-modal-title"
      aria-describedby="nested-modal-description"
      sx={(theme) => ({
        [theme.breakpoints.only("xs")]: {
          top: "unset",
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: 0,
          transform: "none",
        },
      })}
    >
<div className="Comnparison">
        <TextField
             className='Item m-2 mx-2'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: 300 }}
                    label="Search"
                    placeholder="Enter the name of first Hotel"
                    fullWidth
                   
                  />
      
        <TextField
             className='Item mx-2 m-2' 
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ width: 300 }}
                    label="Search"
                    placeholder="Enter the name of second Hotel"
                    fullWidth
                  />

</div>
    


      </ModalDialog>
      </Modal>
   
  )
}

export default Compare