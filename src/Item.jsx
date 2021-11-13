function Item(props) {

    const { name, price, setCount } = props;

    return(
        <div className="product-item">
      <h3 style={{ color: '#061178' }}>{name}</h3>
      <h4 style={{ color: '#597ef7' }}>
        {`${price.toLocaleString()} VND`}
      </h4>
    </div>
    )
}

export default Item;