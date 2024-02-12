import { Allchatfunc, Singlechatfunc } from '@/api/functions/Allchatfunction';
import { Modelfunc } from '@/api/functions/Modelfunction';
import Chatmenu from '@/components/Chatmenu';
import Allchatlists from '@/components/allchatslists';
import Singlechatdetails from '@/components/singlechatdetails';
import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { HashLoader } from 'react-spinners';

const Singlechat = () => {
    const { mode } = useThemeContext();
    const darkmodeswrapper = {
        color: mode === 'dark' ? 'black' : 'black',
        background: mode === 'dark' ? '#2C3E50' : 'white',
        minHeight: 'auto',
        width: '100%',
    };
    // Fetch all chats
    const { data: allchats, isLoading: chatloading, isError: chaterror } = useQuery("allchats", Allchatfunc);

    // Fetch Single Chat Details Here
    const router = useRouter();
    const { slug } = router?.query;
    const { data: singlechat, isLoading: singlechatloading, isError: singlechaterror } = useQuery(
        ["singlechat", { slug }],
        () => Singlechatfunc(slug),
        { enabled: !!slug }
    );

    useEffect(() => {
        if (slug) {
            // Fetch Single Chat Details
            Singlechatfunc(slug);
        }
    }, [slug]);

    if (chatloading) return <Box className='spinnersdesign'>
        <HashLoader
            color="#36d7b7"
            size={150}
        />
    </Box>;

    if (chaterror) {
        console.error("Error fetching all chats:", chaterror);
        return <div>Error fetching all chats</div>;
    }

    if (singlechaterror) {
        console.error("Error fetching single chat:", singlechaterror);
        return <div>Error fetching single chat</div>;
    }

    return (
        <>
            <Box className="main-dashboard" sx={darkmodeswrapper}>
                <Box className="chatbox">
                    <Box className="chatmenu">
                        <Chatmenu />
                    </Box>
                    <Box className="allchatlist">
                        {
                            chatloading ? (
                                <>
                                    <HashLoader
                                        color="#36d7b7"
                                        size={150}
                                    />
                                </>
                            ) : (
                                <>
                                    <Allchatlists allChatsModel={allchats} />
                                </>
                            )
                        }
                    </Box>
                    <Box className="singlechartdetails">
                        {
                            singlechatloading ? (
                                <>
                                    <Box className='chatspinnersdesign'>
                                        <HashLoader
                                            color="#36d7b7"
                                            size={150}
                                        />
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Singlechatdetails Singlechatdetails={singlechat} />
                                </>
                            )
                        }
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Singlechat