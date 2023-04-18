import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import TailwindButton from '../Buttons/TailwindButton';
import testimonialData from './testimonialData';


export default function QuickFilteringInitialize(props) {
  const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'company_name', headerName: 'Company Name', width: 150 },
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
        rows={props?.data}
        getRowId={(row) => row._id}
        columns={columns}
        onRowSelectionModelChange={(newRowSelectionModel) => {
          props.setSelectedRows(props?.data?.filter(({ _id }) => newRowSelectionModel.includes(_id)));
        }}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}