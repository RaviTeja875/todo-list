import React, { useState } from 'react'

function ToDo() {
    const [events, setEvents] = useState('')
    const [list, addList] = useState([])

    const handler = (e) => {
        e.preventDefault();
        if(events)
        {const event = { id: new Date().getTime().toString(), events }
        addList(list => { return [...list, event] })
        console.log(list);}
        else{
            alert("Must Enter Fields")
        }
    }

    const removeEvent = (id) => {
        let eventList = list.filter(x => x.id !== id)
        addList(eventList)

    }
    return (
        <>
            <article>
                <br></br>
                
                
                <form className='form' onSubmit={handler}>
                    <div className='form-control'>
                        <label htmlFor="To Do">To Do</label>
                        <input type='text' value={events} id='events' onChange={(e) => { setEvents(e.target.value) }}></input>

                    </div>
                    
                    <button type='submit' className='btn'>Add Events</button>

                </form>
                {
                    list.map((x) => {
                        return (
                            <div className='item' style={{border:'2px solid blue'}} key={x.id}>
                                <h3>{x.events}    </h3>
                                <h5>{x.date} {x.time} </h5>
                                <button className='btn' onClick={() => removeEvent(x.id)}>Remove</button>

                            </div>);
                    }
                    )
                }

            </article>
        </>
    )
}

export default ToDo