var config = {
    style: 'mapbox://styles/blakehunsicker/ck9lnkp671zb81ipnp08n6ims',
    accessToken: 'pk.eyJ1IjoiYmxha2VodW5zaWNrZXIiLCJhIjoiY2s5MjB4dnNqMDA3dDNrbTBpN3d3M2k2NyJ9.Gr-7FjJNAII4-JmuCu0eIA',
    showMarkers: true,
    theme: 'light',
    alignment: 'right',
    title: 'ONLINE SURVEILLANCE',
    byline: 'By ABC',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'timeline-1',
            title: 'Timeline 1',
            description: 'test',
            location: {
                center: [104.9218, 33.4007],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'chinapopulation2',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'timeline-2',
            title: 'Timeline 2',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [104.9218, 33.4007],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'chinapopulation2',
                    opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'timeline-3',
            title: 'Timeline 3',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [104.9218, 33.4007],
                zoom: 3,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
          id: 'timeline-4',
          title: 'Timeline 4',
          description: 'Copy these sections to add to your story.',
          location: {
              center: [104.9218, 33.4007],
              zoom: 3,
              pitch: 0,
              bearing: 0
          },
          onChapterEnter: [],
          onChapterExit: []
      },
      {
        id: 'timeline-5',
        title: 'Timeline 5',
        description: 'Copy these sections to add to your story.',
        location: {
            center: [104.9218, 33.4007],
            zoom: 3,
            pitch: 0,
            bearing: 0
        },
        onChapterEnter: [],
        onChapterExit: []
    },
    {
      id: 'timeline-6',
      title: 'Timeline 6',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-7',
      title: 'Timeline 7',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'story-1',
      title: 'Story 1',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-8',
      title: 'Timeline 8',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-9',
      title: 'Timeline 9',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-10',
      title: 'Timeline 10',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-11',
      title: 'Timeline 11',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-12',
      title: 'Timeline 12',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'story-2',
      title: 'Story 2',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-13',
      title: 'Timeline 13',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-14',
      title: 'Timeline 14',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: 'timeline-15',
      title: 'Timeline 15',
      description: 'Copy these sections to add to your story.',
      location: {
          center: [104.9218, 33.4007],
          zoom: 3,
          pitch: 0,
          bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    }
    ]
};

export default config;