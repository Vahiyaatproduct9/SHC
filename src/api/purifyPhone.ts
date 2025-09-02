export default function purifyPhone(phone: string | null) {
    let purifiedNum = '';
    const numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+']
    for (let num of phone || '') {
        if (numList.includes(num)) {
            purifiedNum = purifiedNum + num
        }
    }
    if (purifiedNum.includes('+91')) return purifiedNum
    else {
        purifiedNum = '+91' + purifiedNum
        return purifiedNum
    }
}