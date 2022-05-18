import React, {useState, useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./DriversDatatable.scss";

function DriversDatatable() {
    const [drivers, setDrivers ] =  useState([]);

    const columns = [
        { field: 'code', headerName: 'Code', width: 70 },
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

      const rows = drivers.map((driver) => {
          return {code: driver.code,
                    firstName: driver.forename,
                    lastName: driver.surname,
                    dob: driver.dob,
                    nationality: driver.nationality,
                    url: driver.url}
      });

    useEffect(() => {
        const getDrivers = async () => {
            try{
                const response = await fetch("http://localhost:5555/drivers");
                const jsonData = await response.json();
                if (jsonData){
                    setDrivers(jsonData)
                }
                else {console.log("json data empty")};
                
            }catch(err){
                console.error(err.message);
            }
        }
        getDrivers()
    }, []);
  
  console.log(drivers);
  return (
    <>
        <div className="driversDatatable"></div>
        <div>
            <div className='datatable' >
              <DataGrid  className="datagrid" getRowId = {(row) => row.code}
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
            />
          </div>
        </div>
    </>
  )
}

export default DriversDatatable