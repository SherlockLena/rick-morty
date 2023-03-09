import { useHttp } from '../hooks/http.hook';

const useRickAndMortyService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _apiBase = 'https://rickandmortyapi.com/api/character';

    const _transformData = (char) => {
        return {
            id: char.id,
            img: char.image,
            name: char.name,
            status: char.status,
            species: char.species,
            type: char.type,
            gender: char.gender,
            origin: char.origin.name
        }
    }
    
    const byName = (field) => {
        return (a, b) => a[field] > b[field] ? 1 : -1; 
    }

    const getAllCharacters = async (page = 1) => {
        const res = await request(`${_apiBase}/?page=${page}`);
        return res.results.sort(byName('name')).map(_transformData);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}/${id}`);
        return _transformData(res);
    }

    return {getAllCharacters, getCharacter, process, setProcess, clearError};
}

export default useRickAndMortyService;