import axios from 'axios';
import React, { Component } from 'react';

class LearnMore extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            condition: null
        }
    }

    componentDidMount = () => {
        this.getCondition()
    }

    getCondition = async () => {
        console.log(this.props)
        let URL = `https://localhost:44394/api/Condition/${this.props.condition.id}`
        let response = await axios.get(URL)   
        this.setState({
            condition: response.data
        })

    }

    render() { 
        console.log(this.state)
        if(this.state.condition !== null){
            return ( 
                <div className='container shadow'>
                    <div>
                        <img src={this.state.condition.image}/>
                    </div>
                    <div>
                        <h3>{this.state.condition.name}</h3>
                    </div>
                    <div>
                        <p>
                            {this.state.condition.descriptionExtended}
                        </p>
                    </div>
                </div>
             );

        } else {
            return null
        }
    }
}
 
export default LearnMore;