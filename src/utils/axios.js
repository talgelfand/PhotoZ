import {Component} from 'react';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: {
        'Header': 'foobar' 
    }
});

class GetData extends Component {

    state = {
        myData: ''
    }

    componentDidMount() {
        axios.get('http://localhost:3000/')
            .then(res => {
                this.setState({
                    myData: res.data
                })
            }) 
            .catch(
                console.log('Error trying to fetch data')
            )
    }
}

export default GetData;
export {instance};