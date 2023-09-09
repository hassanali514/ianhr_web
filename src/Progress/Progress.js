import React, {Fragment} from "react";
import {IoIosBusiness} from 'react-icons/io'
import {MdOutlineGroups} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'


const Progress = () => {
    return (
        <Fragment>
            <div className="container my-4">
                <div className="row">
                    <div className="col-lg-4 d-flex flex-row">
                        <div className="col-lg-3"><IoIosBusiness/></div>
                        <div className="col-lg-9">
                            <div>50+</div>
                            <div>Business Divisions</div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-row">
                        <div className="col-lg-3"><MdOutlineGroups/></div>
                        <div className="col-lg-9">
                            <div>10000+</div>
                            <div>Employees Strength</div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex flex-row">
                        <div className="col-lg-3"><AiFillStar/></div>
                        <div className="col-lg-9">
                            <div>500+</div>
                            <div>Awards and Reconitions</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Progress