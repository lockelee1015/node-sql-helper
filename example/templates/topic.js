module.exports = function (option) {
    return {
        queryTopic:
        `
        SELECT *
        FROM AI001_TOPIC 
        ${getTopicId(option)}
        `
    }
}

function getTopicId(option) {
    if (!!option.topicId) {
        return `WHERE TOPIC_ID= '${option.topicId}'`
    } else {
        return ''
    }
}