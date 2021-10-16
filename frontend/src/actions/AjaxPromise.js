const ajaxPromise = async (
    params,
    headers = {},
    mode = '',
) => {
    const {type = 'GET', url, data} = params;

    const dataJson = JSON.stringify(Object.entries(data).reduce(
        (o, [k, v]) => ({ ...o, [k]: String(v ?? '') }),
        {},
    ),);

    const xhr = await fetch(url, {
        method: type,
        headers,
        body: dataJson,
        mode,
    })

    if (xhr.status >= 200 && xhr.status < 400) {
        const returnData = await xhr.text();
        return returnData
    } else {
        throw xhr;
    }
}

export default ajaxPromise;