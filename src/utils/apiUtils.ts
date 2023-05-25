interface IApiErrors {
    [key: string]: string[];
}

export const submitFormData = async (
    data: any,
    setApiErrors: React.Dispatch<React.SetStateAction<IApiErrors>>,
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    reset: () => void,
    setSelectedType: React.Dispatch<React.SetStateAction<string>>,
    ) => {
    try {
        const url = "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/";
        const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        });
        const responseData = await response.json();

        if (response.ok) {
        setApiErrors({});
        setIsSuccess(true);
        setSelectedType("");
        reset();
        } else {
        const errorData: IApiErrors = {};
        for (const key in responseData) {
            errorData[key] = Array.isArray(responseData[key])
            ? responseData[key]
            : [responseData[key]];
        }
        setApiErrors(errorData);
        setIsSuccess(false);
        }
    } catch (error) {
        setApiErrors({ message: ["An error occurred. Please try again."] });
        setIsSuccess(false);
    }
};
