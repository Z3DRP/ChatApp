const subscribe = (eventName: string, listener: EventListenerOrEventListenerObject) => {
    document.addEventListener(eventName, listener);
}

const unsubscribe = (eventName: string, listener: EventListenerOrEventListenerObject) => {
    document.removeEventListener(eventName, listener);
}

const publish = (eventName: string, data: any) => {
    const event = new CustomEvent(eventName, {detail: data});
    document.dispatchEvent(event);
} 

export { publish, subscribe, unsubscribe };