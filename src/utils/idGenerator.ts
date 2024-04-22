const generateMessageId = () => `MSG-${idGenerator()}`;

const generateChatId = () => `CHT-${idGenerator()}`;

const generateUserId = () => `USR-${idGenerator()}`;

const idGenerator = () => `${Math.random().toString(36).slice(2)}`;

export {generateMessageId, generateChatId, generateUserId};