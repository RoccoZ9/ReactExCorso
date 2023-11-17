
export const getData = async <T>(url : string) : Promise<T> => {
    const repsonse = await fetch(url);
    return  await repsonse.json();
}