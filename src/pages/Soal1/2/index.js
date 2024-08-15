export const sortAsc = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

export const sortDesc = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

const No2 = (data) => {
    sortAsc(data)
    sortDesc(data)

    console.log('Diurutkan dari terkecil' ,sortAsc(data))
    console.log('Diurutkan dari terbesar', sortDesc(data))
}

export default No2