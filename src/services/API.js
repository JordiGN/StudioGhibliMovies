import axios from 'axios';

const URL = 'https://ghibliapi.herokuapp.com'


const getFilms = async () => {
		try {
		    const response = await axios.get(URL+'/films');
		    return response.data;
		} catch (error) {
		    console.error(error);
		}
	}
export {getFilms};