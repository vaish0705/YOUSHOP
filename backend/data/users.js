import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Aryan',
        email:'aryan@example.com',
        password:bcrypt.hashSync('123456',10),
        
    },
    {
        name:'Hara janwar',
        email:'janwar@example.com',
        password:bcrypt.hashSync('123456',10),
    }
    
]
export default users 