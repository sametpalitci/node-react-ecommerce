import React from 'react';
import {Header, Footer,CardItem} from '../components';
import '../stylesheets/MainStyle.css';

const HomeScreen = props => {
    return (
        <>
            <Header />
                <div className="container">
                    <div className="row mt-2">
                        <CardItem
                            productImage={"https://reimg-teknosa-cloud-prod.mncdn.com/mnresize/600/600/productimage/125077898/125077898_0_MC/47118538.jpg"}
                            productName={"IPhone SE 2020"}
                            productPriceTag={499}
                        />
                    </div>
                </div>
            <Footer />
        </>
    );
};


export default HomeScreen;
