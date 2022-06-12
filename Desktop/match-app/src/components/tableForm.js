import React from 'react'

function RenderingElement({formData, setFormData}){
    return (
        <div>
            <table className='tableContainer'>
                <thead>
                    <tr>    
                        <th>Team 1</th>
                        <th>Team 2</th>
                        <th>Match Type</th>
                        <th>Tournament Name</th>
                        <th>Start Date & Time</th>
                        <th>End Date & Time</th>
                        <th>Location</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            <tr>
                                <td>{formData['teamName1']}({formData['team1']})</td>
                                <td>{formData['teamName2']}({formData['team2']})</td>
                                <td>{formData['matchType']}</td>
                                <td>{formData['tournament']}</td>
                                <td>{formData['startTime']}</td>
                                <td>{formData['endTime']}</td>
                                <td>{formData['matchLocation']}</td>
                                <td>{formData['comments']}</td>
                            </tr>
                    }
                </tbody>
            </table>      
            
      </div>
    )
}

function Tables({formData, setFormData}) {
    return (
        <RenderingElement formData={formData} setFormData={setFormData}/>
    );
}

export default Tables;