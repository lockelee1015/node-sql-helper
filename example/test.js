var SqlHelper = require('../SqlHelper.js')
var template = require('./templates')

var sqlhelper = SqlHelper(template)

var sql = sqlhelper.getSql('topic.queryTopic', { topicId: 'M101' })

console.log(sql)

sql = sqlhelper.getSql('member.queryMember', { topicId: 'M150' })

console.log(sql)