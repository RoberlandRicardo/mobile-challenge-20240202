import useSendRequisition, { Method } from "./useSendRequisition";

const useGetDetailsWord = () => {

    const { sendRequisition } = useSendRequisition();

    async function getDetailsWord(word: string) {
        const response = await sendRequisition({
            method: Method.GET,
            endpoint: word,
        })

        return response;
    }

    return {
        getDetailsWord
    }
}

export default useGetDetailsWord;