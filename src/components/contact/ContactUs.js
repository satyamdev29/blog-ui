import React from 'react'

const ContactUs = (props) => {
    return(
    <div className="container mt-4">
        <h2>Contact Us </h2>
        <form>
            <div className="form-row">
                <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
                </div>
            </div>
        <div className="form-row">
            <div className="form-group col-md-12">
            <label for="inputEmail4">Comment</label>
            <textarea type="text" className="form-control" id="inputName" placeholder="First Name" />
            </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
</div>

    )
}

export default ContactUs