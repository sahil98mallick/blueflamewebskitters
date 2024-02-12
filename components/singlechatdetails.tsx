import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import { Message, SingleChatProps } from '@/typescripts/interfaces/Allchat.interface';
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import React from 'react'
import { Workingprogess } from './Common/Workingprogess';
const AdaptiveCardMessage = React.lazy(() => import('../components/AdaptiveCardMessage'));

const Singlechatdetails: React.FC<SingleChatProps> = ({ Singlechatdetails }: SingleChatProps) => {
    const { mode } = useThemeContext();
    const darkmodeswrapper = {
        color: mode === 'dark' ? 'white' : 'black',
        background: mode === 'dark' ? '#616A6B' : 'white',
        minHeight: 'auto',
        width: '100%',
    };

    console.log("Single Chat Details", Singlechatdetails);
    const removetags = (html:any) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }
    const renderMessageContent = (message: Message) => {
        switch (message.contentType) {
            case 'text':
                return <Box>{removetags(message.content)}</Box>;
            case 'json/adaptiveCard':
                return <AdaptiveCardMessage content={removetags(message.content)} />;
            case 'carousel':
                return <AdaptiveCardMessage content={removetags(message.content)} />;
            default:
                return <Box>{removetags(message.content)}</Box>;
        }
    };

    return (
        <>
            <Card className="singlechart-container" sx={darkmodeswrapper}>
                <Box className="singletitle">
                    <Typography variant="h5" gutterBottom className='chattitle'>
                        {Singlechatdetails?.title}
                    </Typography>
                </Box>
                <Box className="chats-conatiner">
                    <div className="chat-container">
                        <div className="message-container">
                            {Singlechatdetails.messages.map(message => (
                                <Box className={message.fromUser === 'assistant' ? "message sender-message" : "message receiver-message"}>
                                    <img src={message.fromUser === 'assistant' ? "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4da6b18546689.562cb43bdf6bf.png" : "https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp&w=256"} alt={message.fromUser === 'assistant' ? "Sender Avatar" : "Receiver Avatar"} className="avatar" />
                                    {renderMessageContent(message)}
                                </Box>
                            ))}
                        </div>
                    </div>
                </Box>
                <Box className="inputchats">
                    <TextField id="outlined-basic" variant="outlined" style={{ width: "80%" }}
                        placeholder='Enter Your Messages' />
                    <Button variant='contained' color='success'
                        style={{ borderRadius: "20px" }} onClick={() => { Workingprogess() }}>Send</Button>
                </Box>
            </Card>
        </>
    )
}

export default Singlechatdetails