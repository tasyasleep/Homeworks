// 1 task

const searchCandidatesByPhoneNumber = phone => {
    let candidatePhone = null;
    const byPhoneArr = condidateArr.filter(item => {
        candidatePhone = item.phone.match(/\d/g).join('').includes(phone.match(/\d/g).join(''))
        return candidatePhone
    })
    return byPhoneArr
}
console.log(searchCandidatesByPhoneNumber('43'))
console.log(searchCandidatesByPhoneNumber('+1(869) 40'))
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82'))


// 2 task
const getCandidateById = id => {
    const candidate = condidateArr
        .filter((candidate) => candidate._id == id)
        .map((candidate) => {
            candidate.registered = candidate.registered
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('/');
            return candidate;
        })
    return candidate[0];
}
console.log(getCandidateById('5e216bc9f51c08c39c3ed006'))

// 3 task

const sortCandidatesArr = sortBy => {
    if (!sortBy) {
        return [...condidateArr];
    } else if (sortBy == 'asc') {
        return condidateArr.sort((min, max) => min.balance.match(/\d/g).join('') - max.balance.match(/\d/g).join(''))
    } else if (sortBy == 'desc') {
        return condidateArr.sort((min, max) => max.balance.match(/\d/g).join('') - min.balance.match(/\d/g).join(''))
    }
}
console.log(sortCandidatesArr('asc'))
console.log(sortCandidatesArr('desc'))
console.log(sortCandidatesArr())

// 4 task

const getEyeColorMap = () => {
    const obj = [];
    condidateArr.forEach(item => {
        let color = item.eyeColor
        obj[color] = []
    })
    for (let key in obj) {
        obj[key] = condidateArr.filter(item => item.eyeColor == key)
    }
    return obj;
}
console.log(getEyeColorMap())