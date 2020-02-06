export const checkPermission = (handle) => {
    switch (handle) {
        case 'Admin':
            return true;
    
        default:
            return false;
    }
}