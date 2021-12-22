import React, { Component } from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Carousel, CarouselSlide } from 'react-material-ui-carousel'

class Banner extends Component {
  pictures = [
    {image: './hero2.jpg', title: 'A Nice Car'},
    {image: './hero1.jpg', title: 'Delicious Coffee'},
    {image: './hero3.jpg', title: 'Beautiful Dog'},
  ];

  render () {
    return (
      <Carousel>
        {this.pictures.map(({ image, title }) => (
          <CarouselSlide key={image}>
            <Card>
              <CardMedia
                image={image}
                title={title}
                style={{
                  height: 0,
                  paddingTop: '75%',
                }}
              />
              <CardContent>
                <Typography>{title}</Typography>
              </CardContent>
            </Card>
          </CarouselSlide>
        ))}
      </Carousel>
      )
  }
}

export default Banner;