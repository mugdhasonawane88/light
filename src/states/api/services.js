//import APIHelper from '../utils/APIHelper';

/**
* Utility having all API calls related to data store workflows.
*/
const Api = {
    fetchUser: async () => {
        return await fetch('http://localhost:3001/data/1')
            .then(res => res.json())          
    },
    updateCandidate: async(action) =>{
        console.log( " ---- > ", action)      
        return await  fetch('http://localhost:3001/data/1', {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify(action.payload)
           }).then(res => res.json());    
        
    }

};

export default Api;