const user = {
    id: 11,
    email: 'user@basicsstrong.com',
    info:{
        name: 'Emma',
        address:{
            state: 'Rajasthan'
        }
    }
}

if(user != null && user.info != null && user.info.address)
console.log(user.info.address.state)


//ES2020
console.log(user?.info?.address?.state)