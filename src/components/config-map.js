import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import scrollama from 'scrollama';

const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;	  
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";	  
    return {
      url: url + suffix
    }	  
}

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChapter: props.chapters[0]
        };
        // this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        const config = this.props;
        const mapStart = config.chapters[0].location;

        mapboxgl.accessToken = config.accessToken;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: config.style,
            center: mapStart.center,
            zoom: mapStart.zoom,
            pitch: mapStart.pitch,
            bearing: mapStart.bearing,
            transformRequest: transformRequest
        });

        const marker = new mapboxgl.Marker();
        if (config.showMarkers) {
            marker.setLngLat(mapStart.center).addTo(map);
        }

        function getLayerPaintType(layer) {
            var layerType = map.getLayer(layer).type;
            return layerTypes[layerType];
        }

        function setLayerOpacity(layer) {
            var paintProps = getLayerPaintType(layer.layer);
            paintProps.forEach(function(prop) {
                map.setPaintProperty(layer.layer, prop, layer.opacity);
            });
        }

        const setState = this.setState.bind(this);

        // instantiate the scrollama
        const scroller = scrollama();

        map.on('load', function () {

            // setup the instance, pass callback functions
            scroller
            .setup({
                step: '.step',
                offset: 0.6,
                progress: true
            })
            .onStepEnter(response => {
                const chapter = config.chapters.find(chap => chap.id === response.element.id);
                setState({currentChapter:chapter});
                map.flyTo(chapter.location);
                if (config.showMarkers) {
                    marker.setLngLat(chapter.location.center);
                }
                // if (chapter.onChapterEnter.length > 0) {
                //     chapter.onChapterEnter.forEach(setLayerOpacity);
                // }
            })
            .onStepExit(response => {
                var chapter = config.chapters.find(chap => chap.id === response.element.id);
                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }
            });
        });

        window.addEventListener('resize', scroller.resize);
        map.scrollZoom.disable();
        map.addControl(new mapboxgl.NavigationControl());
    }

    render() {
        const config = this.props;
        const theme = config.theme;
        const currentChapterID = this.state.currentChapter.id;
        return (
            <>
                <div ref={el => this.mapContainer = el} className="mapboxgl-map" />
                <div id="story">
                    {/* {config.title &&
                        <div id="header" className={theme}>
                            <h4>{config.title}</h4>
                            {config.subtitle &&
                                <p>{config.subtitle}</p>
                            }
                            {config.byline &&
                                <p>{config.byline}</p>
                            }
                        </div>
                    } */}
                    <div id="features" className={alignments[config.alignment]}>
                        {
                            config.chapters.map(chapter => 
                                <Chapter key={chapter.id} theme={theme} {...chapter} currentChapterID={currentChapterID}/>
                            )
                        }
                    </div>
                    {config.footer &&
                        <div id="footer" className={theme}>
                            <p>{config.footer}</p>
                        </div>
                    }
                </div>
            </>
        );
    }

}

function Chapter({id, theme, title, image, description, description2, description3, description4, description5, currentChapterID}) {

    const classList = id === currentChapterID ?
        "step active"
    :
        "step";

    return (
        <div id={id} className={[(`${ id.search('timeline') === -1 ? 'story' : 'story' }`), classList].join(' ')}>
            <div className={theme}>
                { title &&
                    <h4 className="title">{title}</h4>
                }
                { description &&
                    <div>
                        <p>{description}</p>
                        { image &&
                    <img src={image} alt={title}></img>
                }
                        <p>{description2}</p>
                        <p>{description3}</p>
                        <p>{description4}</p>
                        <p>{description5}</p>
                    </div>
                }
                {/* { image &&
                    <img src={image} alt={title}></img>
                } */}
            </div>
        </div>
    )
}

export default Map;