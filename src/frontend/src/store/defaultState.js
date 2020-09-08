import md5 from 'md5';

export const defaultState = {
    users:[{
        id:"U1",
        name:"Dev",
        friends:[`U2`],
        passwordHash:"1234"
    },{
        id:"U2",
        name:"TR",
        friends:[],
        passwordHash:1234
    }],
    groups:[{
        name:"To Do",
        id:"G1",
        owner:"U1"
    },{
        name:"Doing",
        id:"G2",
        owner:"U1"
    },{
        name:"Done",
        id:"G3",
        owner:"U1"
    }
    ],
    tasks:[{
        name:"Refactor tests",
        id:"T1",
        group:"G1",
        owner:"U1",
        isComplete:false,
    },{
        name:"Meet with CTO",
        id:"T2",
        group:"G1",
        owner:"U1",
        isComplete:true,
    },{
        name:"Compile ES6",
        id:"T3",
        group:"G2",
        owner:"U2",
        isComplete:false,
    },{
        name:"Update component snapshots",
        id:"T4",
        group:"G2",
        owner:"U1",
        isComplete:true,
    },{
        name:"Production optimizations",
        id:"T5",
        group:"G3",
        owner:"U1",
        isComplete:false,
    }],
    comments:[{
        owner:"U2",
        id:"C1",
        task:"T1",
        content:"Great work!"
    }]
/*     session: [{
        authenticated : false,
        registered : false
    }] */
};

