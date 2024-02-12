let token: string | null = null;

export const getToken = (): string | null => {
    if (typeof window !== 'undefined') {
        const tokenJson = localStorage.getItem('token');
        if (tokenJson) {
            const token = JSON.parse(tokenJson);
            return token;
        }
    }
    return null;
};


export const setToken = (newToken: string) => {
    token = newToken;
};

export const removeToken = () => {
    return new Promise((resolve, reject) => {
        if (typeof window !== 'undefined') {
            try {
                localStorage.removeItem('token');
                resolve(true);
            } catch (error) {
                console.error('Error removing token:', error);
                resolve(false);
            }
        } else {
            resolve(false);
        }
    });
};