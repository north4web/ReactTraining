import React from 'react'


class Form extends React.Component {


    state = {
        name: "John",
        email: "janisever@yahoo.com",
        event: "Workshop"
    }

    updateName = (e) => {
        this.setState({ name: e.target.value })
    }
    updateEmail = (e) => {
        this.setState({ email: e.target.value })
    }
    updateEvent = (e) => {
        this.setState({ event: e.target.value })
    }


    render() {
        return (

            <div>
                This is Form
                <h4>Name</h4> <input onChange={this.updateName} />
                <h4>Email</h4> <input onChange={this.updateEmail} />
                <h4>Event</h4> <input onChange={this.updateEvent} />

                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.event}</p>
            </div>

        )

    }

}

export default Form