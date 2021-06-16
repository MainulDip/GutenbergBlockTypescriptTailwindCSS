wp.blocks.registerBlockType('tsgutenblock/block-type', {
  title: 'TypesScript GurenBerg Block Creating',
  icon: 'smiley',
  category: 'common',
  attributes: {
    skyColor: { type: 'string' },
    grassColor: { type: 'string' }
  },
  edit: props => {
    const updateSkyColor = e => {
      props.setAttributes({ skyColor: e.target.value })
    }
    const updateGrassColor = e => {
      props.setAttributes({ grassColor: e.target.value })
    }
    return (
      <>
        <div>
          <input
            type='text'
            name='skycolor'
            id=''
            placeholder='sky color'
            value={props.attributes.skyColor}
            onChange={updateSkyColor}
          />
          <input
            type='text'
            value={props.attributes.grassColor}
            name='grasscolor'
            id=''
            placeholder='grass color'
            onChange={updateGrassColor}
          />
        </div>
      </>
    )
  },
  save: props => {
    return null

    // return (
    //   <>
    //     <p>
    //       The sky color is {props.attributes.skyColor} and grass color is{' '}
    //       {props.attributes.grassColor}
    //     </p>
    //   </>
    // )
  }
})
