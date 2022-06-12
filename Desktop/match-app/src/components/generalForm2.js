import React from 'react'

function teamForm({formData, setFormData}) {
    return(
        <>
            <input
                className="starttime"
                type="text"
                name="startTime"
                value={formData.startTime}
                placeholder="Start Date & Time"
                onChange={(e) => {
                    setFormData({...formData, startTime: e.target.value})
                }}
            />

            <input
                className="endtime"
                type="text"
                name="endTime"
                value={formData.endTime}
                placeholder="End Date & Time"
                onChange={(e) => {
                    setFormData({...formData, endTime: e.target.value})
                }}
            />

            <input
                className="tournament"
                type="text"
                name="tournament"
                value={formData.tournament}
                placeholder="Tournament Name"
                onChange={(e) => {
                    setFormData({...formData, tournament: e.target.value})
                }}
            />

            <input
                className="location"
                type="text"
                name="matchLocation"
                value={formData.matchLocation}
                placeholder="Match Location"
                onChange={(e) => {
                    setFormData({...formData, matchLocation: e.target.value})
                }}
            />

            <textarea
                className="comments"
                rows = "4"
                cols = "21"
                name="tournament"
                value={formData.comments}
                onChange={(e) => {
                    setFormData({...formData, comments: e.target.value})
                }}
            />
        </>
    );
}

export default teamForm;