import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import './Navigation.scss';

export default function Navigation()
{
	return (
		<div className={`admin-navigation`}>

			<input className="nav-items" placeholder={'Search...'} />
			<div className="nav-items" data-label='DASHBOARD'>
				<Link to="/admin">
					<i className="icon">🏠</i><div>{'DASHBOARD'}</div>
				</Link>
			</div>
			<div className="nav-items" data-label='CHATS'>
				<Link to="/admin/chats">
					<i className="icon">💬</i><div>{'CHATS'}</div>
				</Link>
			</div>
			<div className="nav-items" data-label='ACCOUNTS'>
				<Link to="/admin/accounts">
					<i className="icon">👤</i><div>{'ACCOUNTS'}</div>
				</Link>
			</div>
			<div className="nav-items" data-label='REQUEST'>
				<Link to="/admin/request">
					<i className="icon">📨</i><div>{'REQUEST'}</div>
				</Link>
			</div>
		</div>
	);
}
