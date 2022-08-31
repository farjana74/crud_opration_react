import React, {
  useEffect,
  useState,
} from 'react';

import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const ShowUpdate = () => {
    const { register, handleSubmit, reset } = useForm();
    const { showId } = useParams()
    const [updateShow, setUpdateShow] = useState({})

    const handleNameChange = e => {

        const updateName = e.target.value;
        console.log(updateName);
        const UpdateNameChange = {
            name: updateName, rj_name: updateShow.rj_name, time: updateShow.time, img: updateShow.img, duration: updateShow.duration, views: updateShow.views
        };
        setUpdateShow(UpdateNameChange);
    }

    const handleRjNameChange = e => {
        const updateRjName = e.target.value;
        const UpdateRjUser = {
            rj_name: updateRjName, name: updateShow.name, time: updateShow.time, img: updateShow.img, duration: updateShow.duration, views: updateShow.views
        };
        setUpdateShow(UpdateRjUser);
    }
    const handleTimeChange = e => {
        const updateTime = e.target.value;
        const UpdateUserTime = {
            name: updateShow.name, rj_name: updateShow.rj_name, time: updateTime, img: updateShow.img, duration: updateShow.duration, views: updateShow.views
        };
        setUpdateShow(UpdateUserTime);
    }
    const handleImage = e => {
        const updateImage = e.target.value;
        const UpdateUserImage = {
            name: updateShow.name, rj_name: updateShow.rj_name, time: updateShow.time, img: updateImage, duration: updateShow.duration, views: updateShow.views
        };
        setUpdateShow(UpdateUserImage);
    }
    const handleDurationChange = e => {
        const updateDuration = e.target.value;
        const UpdateUserDuration = {
            name: updateShow.name, rj_name: updateShow.rj_name, time: updateShow.time, img: updateShow.img, duration: updateDuration, views: updateShow.views
        };
        setUpdateShow(UpdateUserDuration);
    }
    const handleViewsChange = e => {
        const updateViews = e.target.value;
        const UpdateUserView = {
            name: updateShow.name, rj_name: updateShow.rj_name, time: updateShow.time, img: updateShow.img, duration: updateShow.duration, views: updateViews
        };
        setUpdateShow(UpdateUserView);
    }


    useEffect(() => {
        const url = `https://mighty-tor-25393.herokuapp.com/services/${showId
            }`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUpdateShow(data))

    }, [])

    // data updated------

    const handleUpdateChange = (e) => {
        const url = `https://mighty-tor-25393.herokuapp.com/services/${showId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateShow)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('succes')
                    setUpdateShow({});
                }
            })
        e.preventDefault();






    }

    return (
        <div className='container my-5' >


            <div className=' border col shadow-lg p-4'>

                <div className='contact-us-form'>
                    <form className="row g-3" onSubmit={handleUpdateChange}  >
                        <div className="col-md-6 col">
                            <div className="form-floating  ">
                                <input type="text" className="form-control" onChange={handleNameChange} value={updateShow.name || ''} placeholder="showName"

                                />
                                <label htmlFor="showName">Shows Title</label>
                            </div>
                        </div>
                        <div className="col-md-6">

                            <div className="form-floating ">
                                <input type="text" className="form-control" onChange={handleRjNameChange} value={updateShow.rj_name || ''} id="rj_name" placeholder="rj_name" required

                                />
                                <label htmlFor="rj_name">Rj Name</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" onChange={handleTimeChange} value={updateShow.time || ''} id="time" placeholder="time" required

                                />
                                <label htmlFor="time">Event Time</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="img" onChange={handleImage} value={updateShow.img || ''} placeholder="Event Image" required

                                />
                                <label htmlFor="img">Event image Url</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input className="form-control" id="duration" onChange={handleDurationChange} value={updateShow.duration || ''} placeholder="duration" required

                                />
                                <label htmlFor="duration">Event Duration</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating ">
                                <input type="number" className="form-control" onChange={handleViewsChange} value={updateShow.views || ''} id="views" placeholder="views" required

                                />
                                <label htmlFor="views">Total Views</label>
                            </div>
                        </div>


                        <div className="col-12 text-center ">
                            <button type="submit" className=" w-50  send-btn"

                            >Update</button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default ShowUpdate;