import Page1 from '../containers/Page1';
import Page2 from '../containers/Page2';
import Page11 from '../containers/Page11';
import Page12 from '../containers/Page12';
import NotFound from '../containers/NotFound'

let routes = [
	{
		path: "/",
		component: Page1,
		routes: [
			{ path: "/1/", component: Page11 },
			{ path: "/1/2", component: Page12 }
		]
	},
	{ path: "/2", component: Page2 },
	{ component: NotFound }
];
export default routes;
