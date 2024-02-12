import { Box } from "@mui/material";
import styled from "styled-components";

export const Globalstylewrapper = styled(Box)`
.main-body {
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
  }
  
  /* navbar Css Code */
  .header {
    box-shadow: none;
  }
  
  .toolbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .navitems-menu {
    width: 250px;
    /* background-color: aliceblue; */
    display: flex;
    justify-content: space-evenly;
  }
  
  .logoutbtn {
    text-transform: capitalize;
    color: black;
  }
  
  
  .bodycontent {
    width: 100%;
    height: 100vh;
    /* background-color: black; */
  }
  
  .indexpage {
    width: 100%;
    height: 100%;
  }
  
  .loginbox {
    width: 450px;
    height: auto;
    /* background-color: pink; */
    margin: 150px auto;
    border-radius: 20px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  
  .loginform {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 30px;
  }
  
  .loginbtn {
    border-radius: 20px;
  }
  
  .loginform-head {
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
  }
  
  @media only screen and (max-width: 800px) {
    .loginbox {
      width: 80%;
      height: auto;
      padding-bottom: 10px;
    }
  }
  
  
  /* Dashboard */
  .main-dashboard {
    width: 100%;
    height: 100vh;
    /* background-color: rgb(190, 9, 39); */
    margin: 50px auto;
  }
  
  .chatbox {
    width: 95%;
    height: auto;
    padding-bottom: 10px;
    /* background-color: blue; */
    margin: 40px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 5px;
    /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
    border-radius: 10px;
  }
  
  .allchatlist {
    width: 30%;
    height: 500px;
    /* background-color: pink; */
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    border: 1px solid rgb(0, 149, 175);
  }
  
  /* All Chart Components */
  
  .newchartlink {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Times New Roman', Times, serif;
    padding: 10px;
    text-align: center;
  }
  
  .newlink {
    text-align: center;
    font-size: 15px;
    color: black;
    display: flex;
    align-items: center;
    border: 1px solid rgb(5, 148, 184);
    text-decoration: none;
    padding: 5px;
    border-top-left-radius: 20px;
    border-end-start-radius: 20px;
  }
  
  .newlink:hover {
    background-color: #E5E7E9;
    border: 1px solid #E5E7E9;
    transform: scale(1.01);
  }
  
  .textfields {
    padding-bottom: 15px;
    margin: auto;
  }
  
  .allchatsdetails {
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  
  .allchats {
    width: 99%;
    height: 370px;
    margin: auto;
    border-radius: 10px;
    /* background-color: aliceblue; */
    overflow-y: auto;
  }
  
  .listsitems {
    width: 90%;
    height: 100px;
    margin: auto;
    /* background-color: pink; */
    border-radius: 20px;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    margin-top: 20px;
    display: flex;
    text-align: center;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid rgb(3, 115, 143);
  }
  
  .listsitems:hover {
    transform: scale(1.01);
  }
  
  .item1 {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .itemtext {
    text-decoration: none;
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
    font-style: italic;
  }
  
  .singlechartdetails {
    width: 50%;
    height: 500px;
    /* background-color: pink; */
    border-radius: 10px;
    /* overflow-y: auto; */
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(0, 149, 175);
  }
  
  .singlechart-container {
    width: 100%;
    height: 100%;
    padding: 10px;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
  }
  
  .singletitle {
    width: 99%;
    margin: auto;
    height: 50px;
    /* background-color: aliceblue; */
    /* border-radius: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3px;
  }
  
  .chats-conatiner {
    width: 99%;
    margin: auto;
    height: 380px;
    /* background-color: rgb(1, 91, 170); */
    overflow-y: auto;
    /* border-radius: 10px; */
  }
  
  .chattitle {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
  }
  
  
  .message-container {
    display: flex;
    flex-direction: column;
  }
  
  .message {
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    max-width: 70%;
    word-wrap: break-word;
    display: flex;
    align-items: center;
  }
  
  .sender-message {
    background-color: #e0e0e0;
    color: #000;
    align-self: flex-start;
  }
  
  .receiver-message {
    background-color: #4CAF50;
    color: #fff;
    align-self: flex-end;
  }
  
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  
  .inputchats {
    width: 99%;
    margin: auto;
    height: 70px;
    /* background-color: aliceblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
    gap: 10px;
    /* border-radius: 10px; */
  }
  
  
  /* Chart Menu  Components*/
  
  .chatmenu {
    width: 20%;
    height: 500px;
    /* background-color: pink; */
    border-radius: 10px;
    box-shadow: 0px 0px 48px -3px rgba(0, 0, 0, 0.1);
    border: 1px solid rgb(0, 149, 175);
  }
  
  .chatmenu-container {
    width: 100%;
    height: auto;
    padding-bottom: 10px;
    /* background-color: #9ef1a2; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    padding: 30px;
    /* align-items: center; */
  }
  
  .chatmenu-head {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    font-weight: 600;
    padding: 20px;
  }
  
  .chatmenulinks {
    text-decoration: none;
    font-size: larger;
    display: flex;
    align-items: center;
    gap: 15px;
    color: black;
  }
  
  /* Model Components select */
  .modelselect {
    width: 70%;
    height: 40px;
  }
  
  /* Spinner Design */
  .spinnersdesign {
    margin: auto;
  }
  
  .chatspinnersdesign {
    margin: 100px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`