import { ADD_DATA } from '../constants';

export const addData = ( id, order, title, description, content, is_published, image1, image2, image3, image4 ) => {
    return {
        type: ADD_DATA,
        id, 
        order, 
        title, 
        description, 
        content, 
        is_published, 
        image1, 
        image2, 
        image3, 
        image4
    }
}


