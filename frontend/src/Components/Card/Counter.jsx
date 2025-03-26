

const Counter = ({ quantity, onQuantityChange }) => {
    return (
        <div className="flex flex-col w-16">
            <p className="counter-text">Size</p>
            <div className="counter-buttons">
                <button onClick={() => onQuantityChange(Math.max(1, quantity - 1))} disabled={quantity === 1}>
                    -
                </button>
                <p>{quantity}</p>
                <button onClick={() => onQuantityChange(quantity + 1)}>
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
