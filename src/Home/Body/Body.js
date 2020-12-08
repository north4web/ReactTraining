import React from 'react'

class Body extends React.Component {

    state = {
        brand: 'Peugeot',
        model: '307cc',
        color: 'silver',
        year: 2005
    }

    changeColor = () => {
        this.setState({ color: "red" });
    }

    render() {
        return (

            <div>
                ------------------------------------------- <br />
                From here down is Body <br /> 
                <h2>My Car</h2>

                <h4>My car is {this.state.brand}, {this.state.model}, color {this.state.color}, from {this.state.year} </h4>
                <button
                type = "button" 
                onCLick = {this.changeColor}
                >Change color</button>
            </div>
        )
    }

}

export default Body