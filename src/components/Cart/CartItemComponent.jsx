const CartItemComponent = () => {
    const items = [
        {
            id:1,
            name: 'sup',
            price:'100'
        },
        {
            id:2,
            name: 'rulet',
            price:'400'
        },
    ];

    return <>
        {items.map(item => {
            return <div className="cartItemContainer" key={item.id}>
                <img src={item.images[0]} alt=""/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <div></div>
            </div>
        })}
    </>
}
