import { useEffect, useContext } from 'react';

import { ShowcaseContext } from '../context';

function Alert() {
	const { alertName = '', closeAlert = Function.prototype} = useContext(ShowcaseContext);

	useEffect(() => {
		const timerId = setTimeout(closeAlert, 3000);

		return () => {
			// Когда имя изменится на другое, т.е. будет добавлен новый товар
			clearTimeout(timerId);
		}
	// eslint-disable-next-line
	}, [alertName]);

	return (
		<div id='toast-container'>
			<div className='toast'>{alertName} добавлен в корзину</div>
		</div>
	);
}

export default Alert;
