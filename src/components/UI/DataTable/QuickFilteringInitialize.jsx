import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';
import testimonialData from './testimonialData';
import TailwindButton from '../Buttons/TailwindButton';
import { ControlPointDuplicateSharp } from '@mui/icons-material';
import { useDemoData } from '@mui/x-data-grid-generator';


export default function QuickFilteringInitialize(props) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'company', headerName: 'Company', width: 150 },
    { field: 'description', headerName: 'Description', minWidth: 150, flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: 'center',
      sortable: false,
      width: 200,
      renderCell: ({ row }) =>
        <div className='flex gap-2 py-2'>
          <TailwindButton button_target={props.identifiers.edit.id} button_type="primary" >
            Edit
          </TailwindButton>
          <TailwindButton button_target={props.identifiers.delete.id} button_type="danger" >
            Delete
          </TailwindButton>
        </div>
    }
  ];
  
  return (
    <Box sx={{ height: 400, width: 1, backgroundColor: 'white' }}>
      <DataGrid
        rows={testimonialData}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          props.setSelectedRows(testimonialData.filter(({ id }) => newRowSelectionModel.includes(id)));
        }}
        checkboxSelection
      />
    </Box>
  );
}