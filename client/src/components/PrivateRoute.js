// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import type {
	BaseReducerPropsTypes,
	BaseReduxPropTypes,
} from '../types/base-props-types';
import { Route, Redirect } from 'react-router-dom';
type Props = BaseReduxPropTypes & {
	userState: Object,
	appState: Object,
	events: Object,
};
class PrivateRoute extends Component<Props> {
	render() {
		const { userState, component: Component, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={props =>
					userState.token ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: '/login',
								state: { from: props.location },
							}}
						/>
					)
				}
			/>
		);
	}
}
const mapStateToProps = state => {
	// const { appState, userState, events } = state;
	return state;
};

export default connect(mapStateToProps)(PrivateRoute);