
const Api = {
    fetchUser: async () => {
        return await fetch('http://localhost:3001/data/1')
            .then(res => res.json())          
    },
    updateCandidate: async(action) =>{      
        return await  fetch('http://localhost:3001/data/1', {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body:  JSON.stringify(action.payload)
           }).then(res => res.json());            
    }
};

export default Api;