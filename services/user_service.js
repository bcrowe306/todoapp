const { ObjectId } = require('mongodb')
const _ = require('lodash')
const bcrypt = require('bcrypt')
const { create } = require('lodash')
const saltRounds = 10;

var userTemplate = {
    enabled: true,
    emailVerified: false,
    phoneVerified: false,
    role: 'user',
    api_key: ''
}
function idConverter(string){
    try {
        return ObjectId(string)
    } catch (error) {
        return string
    }
}

module.exports = db => {
    var collection = db.collection('users')
    return {
        select (){
            return new Promise((resolve, reject) => {
                collection.find().toArray((err, results) => {
                    if(err){
                        return reject(err)
                    }
                    results = _.map(results, (value) => {
                        return _.omit(value, ['password'])
                    })
                    resolve(results)
                })
            });
        },
        async selectOne (_id){
            object =  await collection.findOne({ _id: idConverter(_id) })
            object = _.omit(object, ['password'])
            return object
        },
        async selectOneByEmail (email){
            object =  await collection.findOne({ email })
            object = _.omit(object, ['password'])
            return object
        },
        async insert (object){
            object = _.omit(object, ['_id', 'createdAt', 'updatedAt'])
            object.createdAt = Date.now()
            object.updatedAt = Date.now()
            return await collection.insert(object)
        },
        async update (_id, object){
            object = _.omit(object, ['_id', 'createdAt', 'updatedAt'])
            object.updatedAt = Date.now()
            return await collection.updateOne({ _id: idConverter(_id)}, {$set: object})
        },
        async deleteOne(_id){
            return await collection.deleteOne({ _id: idConverter(_id) })
        },
        async create(user){
            var user_exist = await collection.findOne({email: user.email})
            if (user_exist == null){
                Object.assign(user, userTemplate)
                user.password = bcrypt.hashSync(user.password, saltRounds)
                 results = await collection.insert(user)
                 return results
            }else {
                throw Error('User already exist.')
                return null
            }
        },
        async authenticate (credentials) {
            var user = await collection.findOne({email: credentials.email})
            if(user){
                if(user.enabled){
                    if(bcrypt.compareSync(credentials.password, user.password)){
                        return {
                            user: _.omit(user, 'password'),
                            status: true,
                            message: 'Authenticated'
                        }
                    }
                    else {
                        return {
                            user: false,
                            status: false,
                            message: 'Incorrect Username or Password'
                        }
                    }
                    
                }
                else {
                    return {
                        user: false,
                        status: false,
                        message: 'User is disabled'
                    }
                }
            }
            else {
                return {
                    user: false,
                    status: false,
                    message: 'Incorrect Username or Password'
                }
            }
        }
    }
}