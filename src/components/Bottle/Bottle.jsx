import './Bottle.css'

const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>bottle: {name}</h3>
            <img src={img} alt=""/>
            <p>price: ${price}</p>
        </div>
    );
};

export default Bottle;