import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid/DataGrid"
import { rows,columns } from "./Data"
import { GridToolbar } from "@mui/x-data-grid"

import Header from "../../components/Header";






function Contacts() {








  return (
    <Box sx={{ height: 600, width: '98%',mx:"auto" }}>
       <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />
    <DataGrid rows={rows} 


slots={{
  toolbar: GridToolbar,
}}



// @ts-ignore
    columns={columns} />
  </Box>    )
}

export default Contacts