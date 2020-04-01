var mariaConfig = {
    default: {
        path: '/default',
        query: [
            'select * from enemy_force;',
            'select * from bmoa;'
        ]
    },
    Entities: {
        path: '/Entities',
        //url path 설정.... 서버쪽!!
        mapper: 'testMapper'
    }
}

module.exports = { mariaConfig: mariaConfig };