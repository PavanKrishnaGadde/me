import {
    useParams
  } from 'react-router-dom';
import { photographyData } from '../utils/constants';

export const PhotoDetails = () => {
    const {name} = useParams();

    const data = photographyData.find(d => d.name === name);

    if(!data) return <div>image not found</div>;

    return (
        <div className="photo-details">
            <h1 className="header">{name}</h1>
            <div className="photo-wrapper">
                <div className="photo" style={{ backgroundImage: `url(${data.imageUrl})`}}></div>
            </div>
        </div>
    );
}