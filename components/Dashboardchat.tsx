import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import { Box, Button, Card, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React from 'react'
import { Workingprogess } from './Common/Workingprogess';

interface Model {
    value: string;
    name: string;
}

interface DashboardChatProps {
    allModels: Model[];
}

const Dashboardchat: React.FC<DashboardChatProps> = ({ allModels }: DashboardChatProps) => {
    const { mode } = useThemeContext();
    const darkmodeswrapper = {
        color: mode === 'dark' ? 'white' : 'black',
        background: mode === 'dark' ? '#616A6B' : 'white',
        minHeight: 'auto',
        width: '100%',
    };

    console.log("Child Model", allModels);
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <>
            <Card className="singlechart-container" sx={darkmodeswrapper}>
                <Box className="singletitle">
                    <center><h3>Select Your Model</h3></center>
                    <Select
                        labelId="demo-simple-select-label"
                        value={age}
                        label="Age"
                        className='modelselect'
                        onChange={handleChange}
                    >
                        <MenuItem value="" disabled>Select Your Model Here</MenuItem>
                        {allModels?.map((item, mkey: number) => (
                            <MenuItem key={mkey} value={item?.value}>{item?.name}</MenuItem>
                        ))}
                    </Select>
                </Box>
                <Box className="chats-conatiner">
                    <div className="chat-container">
                        <div className="message-container" style={{marginTop:"10px"}}>

                            <div className="message receiver-message">
                                <img src=
                                    "https://dcassetcdn.com/design_img/3678360/767981/21569322/59xc38cb52rac7bxd676cm1kj4_image.png"
                                    alt="Receiver Avatar"
                                    className="avatar" />
                                Hi! How can I help you today?
                            </div>
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

export default Dashboardchat