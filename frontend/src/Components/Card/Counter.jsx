

const Counter = ({ quantity, onQuantityChange }) => {
    return (
        <div className="flex flex-col w-20">
            <p className="text-gray-400">Size</p>
            <div className="  flex  items-center  rounded-lg gap-2 ">
                <button onClick={() => onQuantityChange(Math.max(1, quantity - 1))} disabled={quantity === 1}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg disabled:opacity-50">
                    -
                </button>
                <p >{quantity}</p>
                <button onClick={() => onQuantityChange(quantity + 1)}
                    className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-1 rounded-lg">
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
