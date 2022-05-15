import React, { Component } from "react";
import { connect } from "react-redux"; /* code change */
import "./App.css";

class App extends Component {

	handleOnClick = () => {
			this.props.dispatch({
				type: "INCREASE_COUNT",
			});
	}

	render() {
			return (
					<div className="App">
							<button onClick={this.handleOnClick}>Click</button>
							{/* <p>{this.props.store.getState().clicks}</p> */}
							<p>{this.props.clicks}</p> {/* code change */}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return { clicks: state.clicks };
};

export default connect(mapStateToProps)(App);