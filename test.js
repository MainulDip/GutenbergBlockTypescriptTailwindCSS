wp.blocks.registerBlockType('tsgutenblock/block-type', {
  title: 'TypesScript GurenBerg Block Creating',
  icon: 'smiley',
  category: 'common',
  edit: () => {
    return wp.element.createElement(
      'h1',
      null,
      'Hello from edit fn, Typescript Block Is on Way'
    )
  },
  save: () => {
    return wp.element.createElement(
      'h1',
      null,
      'Hello from save fn, Typescript Block Is on Way'
    )
  }
})
