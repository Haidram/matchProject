import React from 'react'

function typeForm({formData, setFormData}) {
    return(
        <>
            <select
                className="select1"
                name="match" 
                id="match" 
                value={formData.matchType} 
                onChange={(e) => {
                    setFormData({...formData, matchType: e.target.value})
                }}
            >
                <option>-- Match Type --</option>
                <option value="Friendly">Friendly</option>
                <option value="Tournament">Tournament</option>
            </select>
        </>
    );
}

export default typeForm;