import React from 'react'

function teamForm({formData, setFormData}) {
    return(
        <>
            <input
                className="teamName1"
                type="text"
                name="teamName1"
                value={formData.teamName1}
                placeholder="Team 1 Name"
                onChange={(e) => {
                    setFormData({...formData, teamName1: e.target.value})
                }}
            />

            <input
                className="teamName2"
                type="text"
                name="teamName2"
                value={formData.teamName2}
                placeholder="Team 2 Name"
                onChange={(e) => {
                    setFormData({...formData, teamName2: e.target.value})
                }}
            />

            <div className='leftLine'>__________________________</div>
            <div className='vs'>VS</div>
            <div className='rightLine'>__________________________</div>

            <select
                className="team1"
                name="team1"
                id="team1"
                value={formData.team1}
                onChange={(e) => {
                    setFormData({...formData, team1: e.target.value})
                }}
            >
                <option>-- Home or Away --</option>
                <option value="Home">Home</option>
                <option value="Away">Away</option>
            </select>

            <select
                className="team2"
                name="team2"
                id="team2"
                value={formData.team2}
                onChange={(e) => {
                    setFormData({...formData, team2: e.target.value})
                }}
            >
                <option>-- Home or Away --</option>
                <option value="Home">Home</option>
                <option value="Away">Away</option>
            </select>
        </>
    );
}

export default teamForm;