import React, { useEffect, useState } from 'react'
import './DriverDatatable.scss';
import { DataGrid } from '@mui/x-data-grid';
  

function DriverDatatable() {
    const [driversStanding, setDriversStanding ] =  useState([]);

    const columns = [
        { field: 'position', headerName: 'Position', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'dob',
            headerName: 'Date of Birth',
            width: 160,
          },
          {
            field: 'nationality',
            headerName: 'Nationality',
            width: 150,
          },
        {
          field: 'url',
          headerName: 'URL',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 490,
          renderCell: (params) => {
              return (
                <a href={params.row.url}>{params.row.url}</a>
              )
          }
        },
      ];

      const rows = driversStanding.map((driverStanding) => {
          return {position: driverStanding.position,
                    firstName: driverStanding.forename,
                    lastName: driverStanding.surname,
                    dob: driverStanding.dob,
                    nationality: driverStanding.nationality,
                    url: driverStanding.url}
      });

    useEffect(() => {
        const getDriversStanding = async () => {
            try{
                const response = await fetch("http://localhost:5555/drivers_standing");
                const jsonData = await response.json();
                if (jsonData){
                    setDriversStanding(jsonData)
                }
                else {console.log("json data empty")};
                console.log(driversStanding);
            }catch(err){
                console.error(err.message);
            }
        }
        getDriversStanding()
    }, []);
    

 
  return (
    <div>
      <div className="title">Driver Standings</div>
      <div className='datatable' >
          <DataGrid getRowId = {(row) => row.position}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default DriverDatatable
