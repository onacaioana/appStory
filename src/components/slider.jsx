import React from 'react';

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        src: require('../images/15.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: '"Nimic nu e mai presus de lege"'
    },
    {
        src: require('../images/16.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege'
    },
    {
        src: require('../images/17.jpg'),
        altText: 'TRIBUNALUL CLUJ',
        caption: 'TRIBUNALUL CLUJ',
        subcaption: 'Nimic nu e mai presus de lege'
    }
];
class Slider extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 }
    }

    /* function to run next slide */
    next = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }
    /* function to run previous slide */
    previous = () => {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex })
    }
    onExiting = () => {
        this.animating = true;
    }
    onExited = () => {
        this.animating = false;
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        /* Create each slide with map */
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}>
                    <img className="d-block w-100" src={item.src} alt={item.altText} />
                    <CarouselCaption style={{ transition: '0.6s ease-in-out left' }} className="bg-gradient-danger text-white" captionText={item.subcaption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        /* Create carousel using reactstrap */
        return (
            <Carousel
                autoPlay="false"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}>
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={e => this.goToIndex(e)} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>

        );
    }
}

export default Slider