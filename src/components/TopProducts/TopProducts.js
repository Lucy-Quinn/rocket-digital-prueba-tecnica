import React, { useContext } from 'react';
import TopProductCard from './TopProductCard/TopProductCard';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { ThemeContext } from './../../contexts/ThemeContext';
import { Heading } from './TopProducts.styled';

const CAROUSEL_MOCKED_DATA = [
    {
        title: "Product",
        text: "Brief description",
        discounted: "$300.98",
        price: "$350.99",
        id: '1'
    },
    {
        title: "Product",
        text: "Brief description",
        discounted: "$300.98",
        price: "$350.99",
        id: '2'
    },
    {
        title: "Product",
        text: "Brief description",
        discounted: "$300.98",
        price: "$350.99",
        id: '3'
    }
]

const COMMON_STYLES = {
    fontSize: '18px',
    letterSpacing: '0.2px'
}

const TopProducts = () => {
    //Theme context
    const { themes } = useContext(ThemeContext);

    return (
        <div>
            <Heading themes={themes}>Top 10 Products</Heading>
            <Carousel>
                {
                    CAROUSEL_MOCKED_DATA.map((data) => {
                        return (
                            <Carousel.Item key={data.id}>
                                <Card style={{ width: '200px', margin: '0 auto 30px auto', height: '300px', borderRadius: '10px', boxShadow: '0px 5px 6px rgba(0, 0, 0, 0.06)', border: 'none' }}>
                                    <TopProductCard />
                                    <Card.Body>
                                        <Card.Title style={{ color: themes.black, fontWeight: '700', margin: '0', ...COMMON_STYLES }}>{data.title}</Card.Title>
                                        <Card.Text style={{ color: themes.lightGray, margin: '0', ...COMMON_STYLES }}>{data.text}</Card.Text>
                                        <Card.Text style={{ color: themes.primaryColorOrange, margin: '8px 0 0 0', ...COMMON_STYLES }}>{data.discounted}</Card.Text>
                                        <Card.Text style={{ color: themes.lightGray, textDecoration: 'line-through', margin: '0', ...COMMON_STYLES }}>{data.price}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
}

export default TopProducts;