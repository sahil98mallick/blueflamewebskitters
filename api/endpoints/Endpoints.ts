// export const primaryURL = "https://api.blueflame.ai/"
export const primaryURL = process.env.BLUEFLAME_API

export const endpoints = {
    auth: {
        login: "dev/login",
    },
    chats: {
        allchats: "dev/v1/ChatThread/list",
        singlechat: (id: String | number) => `dev/v1/ChatThread/${id}`,
    },
    models: {
        allmodels: "dev/v1/Model/list"
    },
    profile: {
        profileview: "dev/me",
    }
}