import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {

    render() {
        return (
            <div>
				<Link to="home">home</Link>
				<Link to="about">about</Link>
				<Link to="contact">contact</Link>
				{this.props.children}
			</div>
        );
    }
}       