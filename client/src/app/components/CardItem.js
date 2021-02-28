import react from "react";

const CardItem = ({productPriceTag,productName,productImage}) => {
    return (
        <div className="col-lg-3 p-3">
            <div className="card" >
                <img className="card-img-top" src={productImage} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{productName}</h5>
                        <p className="card-text">Only {productPriceTag}$</p>
                        <a href="#" className="btn btn-primary">Add Bascet</a>
                    </div>
            </div>
        </div>
    );
};

export {CardItem};
