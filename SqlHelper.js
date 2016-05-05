function SqlHelper(template) {
    function getSql(sqlId, option) {
        var sqlIds = sqlId.split('.')
        var sqlObject = ''
        while (sqlIds.length > 1) {
            sqlObject = template[sqlIds[0]]
            sqlIds.splice(0, 1)
        }

        return sqlObject(option)[sqlIds[0]]
    }
    return { getSql }
}

module.exports = SqlHelper