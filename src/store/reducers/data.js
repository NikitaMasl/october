import { ADD_DATA } from '../../constants';

let DATA = {
    data:[]
}

export const data = (state = DATA.data, { type, id, order, title, description, content, is_published, image1, image2, image3, image4 }) => {
    switch (type){
        case ADD_DATA:
            return [ 
                ...state, {
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
            ];
        default:
            return state;
    }
}