const generateId = (type: string) => {
    switch (type.toLowerCase()) {
        case 'message':
            return `MSG-${idGenerator()}`;
        case 'chat':
            return `CHT-${idGenerator()}`;
        case 'user':
            return `USR-${idGenerator()}`;
    }
}

const idGenerator = () => `${Math.random().toString(36).slice(2)}`;

export {generateId};