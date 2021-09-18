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
            <h2>{name}</h2>
            <div className="photo" style={{ backgroundImage: `url(${data.imageUrl})`, height: '550px', width: '700px' }}></div>
        </div>
    );
}