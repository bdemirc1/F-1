import React, {useState, useEffect} from 'react'
import './ConstructorDatatable.scss';
import { DataGrid } from '@mui/x-data-grid';

function ConstructorDatatable() {
    const [constructorStandings, setConstructorStandings ] =  useState([]);

    const columns = [
        { field: 'position', headerName: 'Position', width: 70 },
        { field: 'name', headerName: 'Name', width: 200 },
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
          width: 500,
          renderCell: (params) => {
              return (
                <a href={params.row.url}>{params.row.url}</a>
              )
          }
        },
      ];

      const rows = constructorStandings.map((consStanding) => {
          return {position: consStanding.position,
                    name: consStanding.name,
                    nationality: consStanding.nationality,
                    url: consStanding.url}
      });

    useEffect(() => {
        const getConstructorStandings = async () => {
            try{
                const response = await fetch("http://localhost:5555/constructor_standings");
                const jsonData = await response.json();
                if (jsonData){
                    setConstructorStandings(jsonData)
                }
                else {console.log("json data empty")};
            }catch(err){
                console.error(err.message);
            }
        }
        getConstructorStandings()
    }, []);
  
    console.log(constructorStandings);
  return (
    <div>
        <div className="title">Constructor Standings</div>
        <div className='datatable'>
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

export default ConstructorDatatable