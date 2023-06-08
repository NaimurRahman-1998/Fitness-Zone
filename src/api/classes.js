export const addClass = async classData => {
    const response = await fetch(`http://localhost:5000/classes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}

export const addSelectClass = async classData => {
    const response = await fetch(`http://localhost:5000/selected`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}


export const addPayments = async classData => {
    const response = await fetch(`http://localhost:5000/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData),
    })

    const data = await response.json()
    return data
}


