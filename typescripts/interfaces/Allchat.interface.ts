export interface SingleChat {
    value: string;
    name: string;
}
export interface Message {
    fromUser: string;
    content: string;
    contentType: string;
}
export interface SingleChat {
    messages: Message[];
    title: string;
}
export interface SingleChatProps {
    Singlechatdetails: SingleChat;
}