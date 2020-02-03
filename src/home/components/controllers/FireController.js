import Axios from 'axios';
const token = localStorage.getItem('USERTOKEN');
const headers = {
    headers:{ "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*",
                "Authorization":`${token}`,
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}
}

export const getAttachments = async() => {
    
    const result = await Axios.get('https://us-central1-classof21-615ab.cloudfunctions.net/api/attachments',headers)
                
    return result;
}