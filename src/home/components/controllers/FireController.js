import Axios from 'axios';

export const getAttachments = async() => {
    const result = await Axios.get('https://us-central1-classof21-615ab.cloudfunctions.net/api/attachments',
    {headers:{ "Content-Type": "application/json",
                "Cache-Control": "no-cache",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}})
                
    return result;
}

export const createAttachment = async(data) => {
    const res = await Axios.post('https://us-central1-classof21-615ab.cloudfunctions.net/api/attachment',data);
    return res;
}