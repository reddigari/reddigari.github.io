import React from 'react';
import SectionHeader from './SectionHeader';
import { Row, Col } from 'react-bootstrap';
import '../styles/Research.css';


function Research(props) {
    const items = props.data || [];
    const researchTypes = [
        {"type": "publication", "title": "Publications"},
        {"type": "poster", "title": "Posters"},
        {"type": "talk", "title": "Talks"}
    ]
    return (
        <Col className="Research">
            {
                researchTypes.map(t =>
                    <ResearchSection key={t.type}
                        title={t.title}
                        items={items.filter(d => d.kind === t.type)} />
                )
            }
        </Col>
    )
}


function ResearchSection(props) {
    if (!props.items || !props.items.length) return null;
    return (
        <div className="ResearchSection">
            <SectionHeader title={props.title} />
            { props.items.map((d, i) => <ResearchItem key={`research-${i}`} {...d} />) }
        </div>
    )
}


function ResearchItem(props) {
    const style = {
        textIndent: "-1.5rem",
        paddingLeft: "1.5rem",
    }
    const componentMap = {
        publication: ResearchPublication,
        poster: ResearchConferenceItem,
        talk: ResearchConferenceItem,
    }
    const Component = componentMap[props.kind];
    return (
        <div className="ResearchItem">
            <Row>
                <Col style={style}>
                    <Component {...props} />
                </Col>
            </Row>
        </div>
    )
}


function ResearchPublication(props) {
    const {
        authors, year, title, journal,
        volume, number, pages, doi, url,
        linkType
    } = props;
    return (
        <Col>
            <span className="authors">{authors}</span>
            <span className="year"> ({year}).</span>
            <span className="title"> {title}.</span>
            <span className="journal"><i> {journal},</i></span>
            <span className="volume"><i> {volume}</i></span>
            { number ? <span className="number">({number}),</span> : ',' }
            { pages ? <span className="pages"> {pages}.</span> : null }
            { doi && url && linkType === "doi" ? 
                <a href={url}><span className="doi"> doi:{doi}</span></a> : null }
        </Col>
    )
}


function ResearchConferenceItem(props) {
    const {
        authors, year, month, title, conference,
        url, linkType, location
    } = props;
    return (
        <Col>
            <span className="authors">{authors}</span>
            <span className="year-month"> ({year}, {month}).</span>
            <span className="title"> <i>{title}</i>.</span>
            <span className="conference"> {conference},</span>
            <span className="location"> {location}.</span>
            { url && linkType ?
                <a href={url}><span className="poster-link"> [{linkType}]</span></a> : null }
        </Col>
    )
}

export default Research
