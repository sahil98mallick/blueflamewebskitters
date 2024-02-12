import { Box, TextField } from '@mui/material'
import React from 'react'
import Allchatlists from '@/components/allchatslists';
import Singlechatdetails from '@/components/singlechatdetails';
import Chatmenu from '@/components/Chatmenu';
import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import { Modelfunc } from '@/api/functions/Modelfunction';
import { useQuery } from 'react-query';
import { getToken } from '@/utils/localStorage';
import Dashboardchat from '@/components/Dashboardchat';
import { Allchatfunc } from '@/api/functions/Allchatfunction';
import { HashLoader } from 'react-spinners';

const index = () => {
    const { mode } = useThemeContext();
    const darkmodeswrapper = {
        color: mode === 'dark' ? 'black' : 'black',
        background: mode === 'dark' ? '#2C3E50' : 'white',
        minHeight: 'auto',
        width: '100%',
    };
    const { data: allmodels, isLoading, error } = useQuery("allmodels", Modelfunc);
    const { data: allchats, isLoading: chatloading, isError: chaterror } = useQuery("allchats", Allchatfunc);


    if (isLoading || chatloading) return <Box className='spinnersdesign'>
        <HashLoader
            color="#36d7b7"
            size={150}
        />
    </Box>;
    if (error) {
        console.error("Error fetching models:", error);
        return <div>Error fetching models</div>;
    }

    if (chaterror) {
        console.error("Error fetching models:", chaterror);
        return <div>Error fetching models</div>;
    }
    // console.log("All Models", allmodels);
    // console.log("All Models", allchats);
    return (
        <>
            <Box className="main-dashboard" sx={darkmodeswrapper}>
                <Box className="chatbox">
                    <Box className="chatmenu">
                        <Chatmenu />
                    </Box>
                    <Box className="allchatlist">
                        <Allchatlists allChatsModel={allchats} />
                    </Box>
                    <Box className="singlechartdetails">
                        <Dashboardchat allModels={allmodels} />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default index