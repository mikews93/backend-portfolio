export default {
  name:'socialMedia',
  title:'Social Media',
  type:'document',
  fields:[
      {
          name:'name',
          title:'Name',
          type:'string'
      },
      {
          name:'link',
          title:'Url',
          type:'string'
      },
      {
          name:'tooltip',
          title:'Tooltip',
          type:'string'
    },
    {
      name:'icon',
      title:'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }

  ]
}