module.exports = function (option) {
    return {
        'queryMember':
        `
        SELECT * 
        FROM AI005_MEMBER
        WHERE TOPIC_ID='${option.topicId}'
        `
    }
}