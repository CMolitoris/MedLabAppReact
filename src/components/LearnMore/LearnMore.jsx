import axios from 'axios';
import React, { Component, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { Image } from 'react-bootstrap';
import './LearnMore.css'


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
        try {
            let URL = `https://localhost:44394/api/Condition/1`
            let response = await axios.get(URL)   
            this.setState({
                condition: response.data
            })
        } catch(e) {
            console.log("Error in get condition: ", e)
        }

    }

    render() { 
        console.log(this.state)
        if(this.state.condition !== null){
            return ( 
                <div className=' shadow main-panel-learn'>
                    <div className='shadow sub-panel-learn-image'>
                        <Image style={{height: '100%'}}  src={this.state.condition.image}/>
                    </div>
                    <div className='shadow sub-panel-learn'>
                        <div align='center'>
                            <h3>{this.state.condition.name}</h3>
                        </div>
                        <hr/>
                        <div>
                            <p>
                                {this.state.condition.descriptionExtended}
                            </p>
                        </div>

                    </div>
                </div>
             );

        } else {
            return null
        }
    }
}
 
export default LearnMore;