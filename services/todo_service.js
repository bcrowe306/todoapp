const { ObjectId } = require('mongodb')
const _ = require('lodash')
const { map } = require('lodash')
function idConverter(string){
    try {
        return ObjectId(string)
    } catch (error) {
        return string
    }
}

module.exports = db => {
    var collection = db.collection('todos')
    return {
        select (user_id){
            return new Promise((resolve, reject) => {
                collection.find({user_id}).toArray((err, results) => {
                    if(err){
                        return reject(err)
                    }
                    results = _.map(results, (value) => {
                        return _.omit(value, 'user_id')
                    })
                    resolve(results)
                })
            });
        },
        async selectOne (_id, user_id){
            var results =  await collection.findOne({ _id: idConverter(_id), user_id })
            results = _.omit(results, 'user_id')
            return results
        },
        async insert (object, user_id){
            object = _.omit(object, ['_id', 'createdAt', 'updatedAt'])
            var now_date = new Date()
            object.createdAt = now_date
            object.updatedAt = now_date
            object.user_id = user_id
            return await collection.insert(object)
        },
        async update (_id, object, user_id){
            object = _.omit(object, ['_id', 'createdAt', 'updatedAt'])
            object.updatedAt = new Date()
            return await collection.updateOne({ _id: idConverter(_id), user_id}, {$set: object})
        },
        async deleteOne(_id, user_id){
            return await collection.deleteOne({ _id: idConverter(_id), user_id })
        }
    }
}