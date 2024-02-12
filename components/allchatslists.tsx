import { Box, Card, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Chats {
    value: string;
    name: string;
    title: string;
    id: string;
    creationDate: string;
    messageCount: string;
}
interface AllChatListsProps {
    allChatsModel: Chats[];
}
const Allchatlists: React.FC<AllChatListsProps> = ({ allChatsModel }: AllChatListsProps) => {
    console.log("Chat Child Model", allChatsModel);
    return (
        <>
            <Card className="allchatsdetails">
                <center>
                    <Typography variant="h5" gutterBottom className='newchartlink'>
                        All Charts <Link href={`/dashboard`} className='newlink'>
                            <ArrowBackIcon />New Chart</Link>
                    </Typography>
                </center>
                <center>
                    <TextField
                        id="input-with-icon-textfield"
                        type="text"
                        className="textfields"
                        placeholder='Enter Your Details to Search'
                        style={{ width: "90%", borderRadius: "50%" }}
                    />
                </center>
                <Box className="allchats">
                    {
                        allChatsModel?.map((item, cmap) => {
                            return (
                                <>
                                    <Link key={cmap} href={`/dashboard/${item?.id}`} style={{ textDecoration: "none" }}>
                                        <Card className='listsitems'>
                                            <Box className="item1">
                                                <Typography variant="body2" gutterBottom className='itemtext'>
                                                    {item?.title}
                                                </Typography>
                                                {/* <Typography variant="body2" gutterBottom className='itemtext'>
                                                    BlueFlame AI Agent
                                                </Typography> */}
                                            </Box>
                                            <Box className="item1">
                                                <Typography variant="body2" gutterBottom className='itemtext'>
                                                    {item?.creationDate?.slice(0, 10)}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom className='itemtext'>
                                                    {item?.messageCount}
                                                </Typography>
                                            </Box>
                                        </Card>
                                    </Link>
                                </>
                            )
                        })
                    }
                    {/* <Link href={`/dashboard/${15}`} style={{ textDecoration: "none" }}>
                        <Card className='listsitems'>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    Similar Companies To...
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    BlueFlame AI Agent
                                </Typography>
                            </Box>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    2024-02-06
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    15
                                </Typography>
                            </Box>
                        </Card>
                    </Link>
                    <Link href={`/dashboard/${15}`} style={{ textDecoration: "none" }}>
                        <Card className='listsitems'>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    Similar Companies To...
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    BlueFlame AI Agent
                                </Typography>
                            </Box>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    2024-02-06
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    15
                                </Typography>
                            </Box>
                        </Card>
                    </Link>
                    <Link href={`/dashboard/${15}`} style={{ textDecoration: "none" }}>
                        <Card className='listsitems'>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    Similar Companies To...
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    BlueFlame AI Agent
                                </Typography>
                            </Box>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    2024-02-06
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    15
                                </Typography>
                            </Box>
                        </Card>
                    </Link>
                    <Link href={`/dashboard/${15}`} style={{ textDecoration: "none" }}>
                        <Card className='listsitems'>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    Similar Companies To...
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    BlueFlame AI Agent
                                </Typography>
                            </Box>
                            <Box className="item1">
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    2024-02-06
                                </Typography>
                                <Typography variant="body2" gutterBottom className='itemtext'>
                                    15
                                </Typography>
                            </Box>
                        </Card>
                    </Link> */}
                </Box>
            </Card>
        </>
    )
}

export default Allchatlists