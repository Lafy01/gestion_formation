export const fetcher = async (url: string) => {
    try {
        
    } catch (error: any) {
        if (error.response) {
            throw new Error(error.response.data.message || "An error occurred");
        } else if (error.request){
            throw new Error("No response received");
        } else {
            throw new Error(error.message);
        }
    }
}