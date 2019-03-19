import Page111 from '../containers/Page111';
import Page112 from '../containers/Page112';
import Page12 from '../containers/Page12/loadable';
import Page13 from '../containers/Page13/loadable';
import Page21 from '../containers/Page21';
import Page22 from '../containers/Page22';
import NotFound from '../containers/NotFound'

let routes = [
	{
		path: "/app/menu1",
		key: "menu1",
		routes: [
			{
				path: "/sub1",
				key: "sub1",
				routes: [
					{ path: "/opt1", key: "opt1", component: Page111 },
					{ path: "/opt2", key: "opt2", component: Page112 }
				]
			},
			{ path: "/sub2", key: "sub2", component: Page12 },
			{ path: "/sub3", key: "sub3", component: Page13 }
		]
	},
	{
		path: "/app/menu2",
		key: "menu2",
		routes: [
			{ path: "/sub1", key: "sub1", component: Page21 },
			{ path: "/sub2", key: "sub2", component: Page22 }
		]
	},
	{ component: NotFound, key: 'notfound' }
];
export default routes;
