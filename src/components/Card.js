import React from 'react';
import { Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText, } from 'reactstrap';
import Webinfo from '../p2p-BG.svg'

const whatWeDo = (props) => {
    return (
        <div>
            <Card>
                <CardImg src={Webinfo} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Peak 2 Peak </CardTitle>
                    <CardSubtitle>MultiMedia</CardSubtitle>
                    <CardText>Let us bring your dreams to life!</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default whatWeDo;