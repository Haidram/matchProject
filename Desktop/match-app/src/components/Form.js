import React, {useState} from 'react'
import Type from "./typeForm";
import General1 from "./generalForm1";
import General2 from "./generalForm2";
import Teams from "./teamForm";
import Tables from './tableForm';

function Form() {
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        matchType: [],
        startTime: [],
        endTime: [],
        matchLocation: [],
        comments: [],
        team1: [],
        team2: [],
        teamName1: [],
        teamName2: [],
        tournament: [],
    });

    const FormTitles = ["Type", "General", "Teams"];
    const Display = () => {
        if(page === 0){
            return <Type formData={formData} setFormData={setFormData}/>;
        }
        else if(page === 1 && formData.matchType === 'Friendly'){
            return <General1 formData={formData} setFormData={setFormData}/>;
        }
        else if(page === 1 && formData.matchType === 'Tournament'){
            return <General2 formData={formData} setFormData={setFormData}/>;
        }
        else if(page === 2){
            return <Teams formData={formData} setFormData={setFormData}/>;
        }
        else{
            return <Tables formData={formData} setFormData={setFormData}/>;
        }
    }

    const addDataIntoCache = (cacheName, url, response) => {
        const data = new Response(JSON.stringify(response));
        if('caches' in window){
            caches.open(cacheName).then((cache) => {
                cache.put(url, data);
            });
        }
    }

    return (
        <div className='form'>
            <div 
                style={{ borderColor: page != FormTitles.length ? 'gainsboro': 'white'}}
                className='formContainer'>
                <div
                    style={{ visibility: page != FormTitles.length ? 'visible': 'hidden'}} 
                    className='header'>
                    <>{FormTitles[page]} {page+1}/3</>
                </div>
                <div className='body'>{Display()}</div>
                <div className='footer'>
                    <button
                        style={{ visibility: page != 0 ? 'visible': 'hidden'}}
                        className='button1'
                        disabled = {page == 0}
                        onClick = {() => {
                            setPage((curPage) => curPage - 1)
                        }}
                    >
                        Back
                    </button>

                    <button
                        className='button2'
                        //disabled = {page == FormTitles.length}
                        onClick = {() => {
                            if(page === FormTitles.length){
                                setPage((curPage) => curPage - 3)
                                addDataIntoCache('MyCache', 'https://localhost:5000', 'SampleData')
                            }
                            else{
                                setPage((curPage) => curPage + 1)
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Form;