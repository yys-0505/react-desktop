const menuList = [
  {
    name: 'subnav 1',
    icon: 'user',
    key: '/app/menu1',
    items: [
      {
        name: 'Submenu',
        key: '/sub1',
        items: [
          { name: 'option1', key: '/opt1' },
          { name: 'option2', key: '/opt2' },
          { name: 'option3', key: '/opt3' }
        ]
      },
      { name: 'option2', key: '/sub2' },
      { name: 'option3', key: '/sub3' }
    ]
  },
  {
    name: 'subnav 2',
    icon: 'laptop',
    key: '/app/menu2',
    items: [
      { name: 'option1', key: '/sub1' },
      { name: 'option2', key: '/sub2' },
      { name: 'option3', key: '/sub3' }
    ]
  },
  {
    name: 'subnav 3',
    icon: 'notification',
    key: '/app/menu3',
    items: [
      { name: 'option1', key: '/sub1' },
      { name: 'option2', key: '/sub2' },
      { name: 'option3', key: '/sub3' }
    ]
  }
];

export default menuList;