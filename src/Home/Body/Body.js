import React from 'react'

class Body extends React.Component {

    state = {
        brand: 'Peugeot',
        model: '307cc',
        color: 'silver',
        year: 2005,
        backgroundColor: 'silver'
    }

    changeCar = () => {
        if (this.state.brand === 'Peugeot') {

            this.setState({ brand: 'Audi', model: 'TT', year: 2015 });
        } else {
            this.setState({ brand: 'Peugeot', model: '307cc', year: 2005 });
        }
    }

    // changeBackgroundColor = () => {
    //     this.setState({ backgroundColor: 'pink' });
    // }

    updateBcgColor = (e) => {

        this.setState({ backgroundColor: e.target.value })
    }

    render() {

        return (

            <div>
                ------------------------------------------- <br />
                From here down is Body <br /><br /><br />




                <div style={{ width: '405px', height: '36px', backgroundColor: this.state.backgroundColor }}>

                    <label style={{ color: 'darkblue', fontSize: '19px' }}>Type a Color</label> <input onChange={this.updateBcgColor} style={{ margineTop: '5px', border: '5px solid darkgray'}}/>


                    {/* <button
                    type="button"
                    onClick={this.changeBackgroundColor}
                >Change Background color</button> */}

                    {/* <p>The color is: {this.state.backgroundColor}</p> */}
                </div>
                <div>
                    
                    <h4 style={{ color: 'darkblue' }}>{this.state.brand} {this.state.model}, <span style={{ color: this.state.backgroundColor, fontWeight: 'bold' }}> {this.state.backgroundColor}</span>, from {this.state.year} </h4>
                    
                    <button
                        type="button"
                        onClick={this.changeCar}
                    >Change Car</button>
                    <br /><br /><br />
                </div>


            </div>



        )
    }

}

export default Body