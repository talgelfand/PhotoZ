import {Component} from 'react';
import axios from 'axios';

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