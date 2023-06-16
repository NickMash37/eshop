import './ItemImage.css';

export const ItemImage = ({ image }) => {
    return (
        <div className='item-cover' style={{ backgroundImage: `url(${image})` }}></div>
    )
}